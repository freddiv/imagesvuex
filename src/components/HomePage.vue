<template>
  <container>
      <div><h2>Home</h2></div>
  </container>
</template>

<script>
import { Container,} from 'mdbvue';


export default {
  name: 'HomePage',
  components: {
    Container,
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