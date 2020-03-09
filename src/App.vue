<template>
  <div id="app">
    <b-container class="mb-5 mt-5" >
      <b-row>
        <b-col>
          <b-navbar toggleable="sm" type="light" style="padding-left: 0px; padding-right: 0px; margin-bottom: 50px;">
            <b-navbar-brand href="#/" style="font-size: 150%; font-weight: bold;">mishael nuh</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="https://twitter.com/MishaelNuh"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/> twitter</b-nav-item>
                <b-nav-item href="https://www.linkedin.com/in/mishaelnuh/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/> linkedin</b-nav-item>
                <b-nav-item href="mailto:mishael.ebel.nuh@gmail.com"><font-awesome-icon icon="envelope"/> email</b-nav-item>
              </b-navbar-nav> 
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
        <router-view :key="$route.fullPath"></router-view>
        </b-col>
      </b-row>
      <b-row>
        <b-col style="text-align:center;">
          <div style="padding-top: 20px;">
          <p><font-awesome-icon icon="copyright"/> 2020 Mishael Nuh</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
