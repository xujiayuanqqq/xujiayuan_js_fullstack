<template>
  <div>
    <button type="primary" icon="el-icon-delete" @click="logout">清空token</button>
  </div>
</template>
<script>
import auth from "@/auth.js";
export default {
  methods: {
    logout() {
      auth.logout();
      console.log('done');
      this.$router.replace(this.$route.query.redirect || "/");
    }
  }
}
</script>
<style>

</style>
