<template>
  <div class="main">
    <the-nav></the-nav>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TheNav from './components/layout/TheNav.vue';
import TheFooter from './components/layout/TheFooter.vue';

@Component({
  components: {
    TheNav,
    TheFooter,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

html {
  max-width: 100%;
}

body {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif, "Source Sans Pro", Helvetica, Arial, sans-serif;
}

.main {
  font-family: sans-serif, "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
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
