<template>
  <nav>
    <h1>TodoT</h1>
    <ul>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link" v-if="!isAuthenticated">About</router-link>
      <router-link to="/todos" class="nav-link" v-if="isAuthenticated">Todos</router-link>
      <router-link to="/login" class="nav-link" v-if="!isAuthenticated">Log in</router-link>
      <router-link to="/profile" class="nav-link" v-if="isAuthenticated">Profile</router-link>
      <a class="nav-link" v-if="isAuthenticated" v-on:click="logOut">Log out</a>
      <router-link to="/register" class="nav-link" v-if="!isAuthenticated">Sign up</router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import store from '../../store/store';

@Component
export default class TheNav extends Vue {
  public get isAuthenticated(): boolean {
    return this.$store.getters['auth/isAuth'];
  }

  public logOut() {
    this.$store.dispatch('auth/logOut');
    // This is used to stop console errors when navigating to current location
    // this.$router.push({ name: 'home' }, undefined, () => { location.href = this.$route.hash; });
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');
$accent-color: #00ADB5;

nav {
  z-index: 100;
  top: 0;
  width: 100%;
  max-width: 100%;
  padding: 15px 20px;
  position: fixed;
  text-align: left;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);
  background-color: #ffffff;

  h1 {
    font-family: "Dosis", "Source Sans Pro", Helvetica, Arial;
    margin: 0;
    text-align: left;
    display: inline-block;
    vertical-align: middle;
    font-size: 1.8em;
  }

  ul {
    position: absolute;
    display: inline-block;
    margin: 0;
    right: 0px;
    top: 17px;
    text-align: right;
    vertical-align: middle;

    .nav-link {
      display: inline-block;
      padding-left: 0;
      padding-right: 5px;
      vertical-align: middle;
      padding-top: 5px;
      font-weight: 600;
      text-decoration: none;
      color: #000000;
    }

    .router-link-exact-active {
      color: $accent-color;
    }
  }
}

@media screen and (min-width: 370px) {
  nav {
    padding: 15px 30px;

    ul {
      right: 15px;

      .nav-link {
        padding-left: 15px;
      }
    }
  }
}

@media screen and (min-width: 400px) {
  nav {
    ul {
      .nav-link {
        font-size: 1.1em;
      }
    }
  }
}
</style>