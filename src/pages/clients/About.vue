<template>
  <div class="main__about container">
    <h3>This is about page</h3>
  </div>
</template>
<script>
import LayoutDefault from "@/layouts/LayoutDefault";
export default {
  data(){
    return{

    }
  },
  created() {
    this.$emit('update:layout',LayoutDefault)
  }
}
</script>