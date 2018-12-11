<template>
<div class="container-fluid">
  <app-header></app-header>
  <div id="app" class="flyout">  
    <main class="mt-5">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</div>
</template>

<script>
import AppHeader from './components/AppHeader';
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
    AppHeader  
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
}
</script>

<style>
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
