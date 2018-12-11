<template>
      <div><h4>Please wait.....</h4>{{isLoggedIn}}</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Authenticate',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
     ...mapActions(['finalizeLogin']),
   },
  created() {
    this.finalizeLogin(window.location.hash)
    },
    

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>