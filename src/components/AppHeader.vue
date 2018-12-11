<template>
  <navbar class="indigo" dark style="padding: 0.1rem 1rem !important">
  <!-- Navbar brand -->
  <mdb-navbar-brand class="text-white" href="/" style="margin-left: 4px;">
   Image Browser
  </mdb-navbar-brand>

  <navbar-collapse>
    <navbar-nav v-if="isLoggedIn" right>
      <navbar-item  class="text-white"><i class="fa fa-upload" aria-hidden="true"></i><router-link class="text-white" to="/AddImages"> Add Images </router-link> </navbar-item>
      <navbar-item class="text-white"><i class="fa fa-th" aria-hidden="true"></i><router-link class="text-white" to="/Gallery"> Gallery</router-link> </navbar-item>
      <navbar-item icon="user" class="indigo" @click.native="logout" ><i class="fa fa-user"></i> Logout </navbar-item>
    </navbar-nav>
      <navbar-nav v-if="!isLoggedIn" right>
        <navbar-item icon="user" class="indigo" @click.native="login" ><i class="fa fa-user"></i> Login </navbar-item>
    </navbar-nav>
    <!-- Search form -->
  </navbar-collapse>
</navbar>
</template>
<script>
/* eslint-disable */
import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, mdbNavbarBrand, Btn, Fa } from 'mdbvue';
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'AppHeader',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    mdbNavbarBrand,
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
   methods: {
     ...mapActions(['login', 'logout']),
   }
}
</script>

<style scoped>
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
.nav-item {
    margin-right: 1rem;
}
</style>