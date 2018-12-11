<template>
  <div class="container container-fluid">
      <div><h2>AddImages</h2></div>
  </div>
</template>

<script>



export default {
  name: 'AddImages',
  components: {

  },
  methods: {
    // eslint-disable-next-line
     closeModal: function(event){
       this.$emit('closeLoginModal');
     },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>