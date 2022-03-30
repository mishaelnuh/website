<template>
  <div id="app">
    <nav class="navbar sticky-top">
      <a class="navbar-brand" href="/">mishael nuh</a>
      <b-nav>
        <b-nav-item href="https://www.linkedin.com/in/mishaelnuh/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" class="navbarIcon"/></b-nav-item>
        <b-nav-item href="https://github.com/mishaelnuh/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" class="navbarIcon"/></b-nav-item>
        <b-nav-item href="mailto:mishael.ebel.nuh@gmail.com"><font-awesome-icon icon="envelope" class="navbarIcon"/></b-nav-item>
      </b-nav>
    </nav>
    <b-container>
      <b-row>
        <b-col>
          <router-view :key="$route.fullPath"></router-view>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="footer">
            <p><font-awesome-icon icon="copyright"/> 2022 Mishael Nuh</p>
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
