<template>
  <div id="app">
    <b-container fluid="xl" class="mt-3">
      <b-row class="mt-5">
        <b-col>
          <router-view :key="$route.fullPath"></router-view>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col style="text-align: right;">
          <p><font-awesome-icon icon="copyright"/> 2020 Mishael Nuh</p>
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
