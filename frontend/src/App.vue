<template>
  <div id="app">
    <v-app dark>
      <v-navigation-drawer
        clipped
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link :to="{name: 'Adduser' }">
                <v-list-tile-title>Add User</v-list-tile-title>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>DancesafeResults</v-toolbar-title>
      </v-toolbar>
      <div class="col-sm-9">
        <router-view/>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  component: 'add-user',
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
