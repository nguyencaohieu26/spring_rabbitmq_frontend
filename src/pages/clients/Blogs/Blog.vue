<template>
  <div class="main__blog container">
    <Banner imgURL="imagesFile/header-bg.png" name="Blogs"/>
  </div>
</template>
<script>
import Banner from "@/components/Banner";
import LayoutDefault from "@/layouts/LayoutDefault";
export default {
  components: {Banner},
  data(){
    return{

    }
  },
  created() {
    this.$emit('update:layout',LayoutDefault)
  }
}
</script>