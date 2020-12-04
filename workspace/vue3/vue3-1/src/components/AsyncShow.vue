<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// defineComponent 是用来解决TypeScript情况下，传统的Vue.extends无法对组件给出正确的参数类型推断的
// 也就是说在TypeScript环境中参数类型推断不正常时，用defineComponent()组件来进行包装函数
export default defineComponent ({
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({ result: 'Welcome Vue3' });
      }, 2000);
    });
  }
});
</script>
<style lang="">
</style>