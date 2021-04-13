<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <br />
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import _ from 'lodash';

export default {
  // name: 'app',
  watch: {
    $route (to, from) {
      console.log('to', to);
      console.log('from', from);
      if (from.path.includes('/')) {
        this.$oldRoute = _.cloneDeep(from);
        // this.$oldRoute = JSON.parse(JSON.stringify(from));
        // this.$oldRoute = from;
        console.log('from', from);
        console.log('this.$oldRoute', this.$oldRoute);
      }
    },
  },
  data () {
    return {
      $oldRoute: {},
      ua: navigator.userAgent,
    };
  },
  // ...
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
