<template>
  <div class="main__blog container">
    <Banner imgURL="../imagesFile/header-bg.png" name="ProductDetail"/>
  </div>
</template>
<script>

import LayoutDefault from "@/layouts/LayoutDefault";
import Banner from "@/components/Banner";
export default {
  components:{Banner},
  data(){
    return{
    }
  },
  created() {
    this.$emit('update:layout',LayoutDefault)
  },
}
</script>