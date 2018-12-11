<template>
<mdb-container>
	<div><h3>Gallery</h3></div>
						<img  v-for="(image, index) in allImages" :key="index"  class="p-2" :src="image.link" style="width: 25%; height: 25%; margin-right:0px;">
</mdb-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {mdbContainer, } from 'mdbvue';

export default {
	name: 'Gallery',
	components: {
		mdbContainer,
	},
	computed: {
		...mapGetters(['allImages']),
	},
	methods: {
			...mapActions(['fetchImages']),
		// eslint-disable-next-line
		closeModal: function(event){
		this.$emit('closeLoginModal');
		},
	},
	created(){
		this.fetchImages()
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
	min-width: 25%;
	max-width: 25%;
	margin-right: 5px!important;
	display: inline;
}
</style>