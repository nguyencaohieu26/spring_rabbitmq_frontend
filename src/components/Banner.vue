<template>
  <div class="products__banner">
    <img height="100%" width="100%" v-bind:src="imgURL" >
    <div class="products__banner-content">
      <h1>{{name}}</h1>
      <router-link to="/">
        <a-icon type="home" /> Home
      </router-link><span style="color: #3a3535"> >{{name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:[
    'imgURL',
    'name',
  ],
  data(){
    return{

    }
  },
  created() {
    console.log(this.$route);
  }
}
</script>