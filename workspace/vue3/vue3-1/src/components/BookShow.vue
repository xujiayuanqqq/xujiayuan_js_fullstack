<template>
  <div>
    <img :src="result && result.imgUrl" alt="">
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from "vue";
export default defineComponent({
  async setup() {
    const rawData = await axios.get('/');
    return {
      result: rawData.data
    }
  }
})
</script>
<style lang=""> 
</style>