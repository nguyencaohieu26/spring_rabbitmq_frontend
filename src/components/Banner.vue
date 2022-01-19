<template>
  <div class="products__banner">
    <img :src="imgURL">
    <div class="products__banner-content">
      <h1>{{name}}</h1>
      <router-link to="/">
        <a-icon type="home" /> Home <span style="color: #3a3535"> > {{ name }}</span>
      </router-link>
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
  }
}
</script>