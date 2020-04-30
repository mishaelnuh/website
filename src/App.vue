<template>
  <div id="app">
    <b-navbar class="sticky-top navbar-expand">
      <b-navbar-brand href="#/">mishael nuh</b-navbar-brand>
      <b-navbar-nav :fill="true" class="ml-auto">
        <b-nav-item href="https://twitter.com/MishaelNuh"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></b-nav-item>
        <b-nav-item href="https://www.linkedin.com/in/mishaelnuh/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/></b-nav-item>
        <b-nav-item href="https://github.com/mishaelnuh/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/></b-nav-item>
        <b-nav-item href="mailto:mishael.ebel.nuh@gmail.com"><font-awesome-icon icon="envelope"/></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid="true" class="mt-5">
      <b-row no-gutters>
        <b-col>
          <router-view :key="$route.fullPath"></router-view>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col>
          <div class="footer">
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
