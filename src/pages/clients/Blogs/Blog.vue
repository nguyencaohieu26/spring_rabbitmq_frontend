<template>
  <div class="main__blog container">
    <h3>This is blog page</h3>
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