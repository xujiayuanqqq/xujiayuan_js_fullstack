<template>
  <div id="app">
    <router-link to="/"> /</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/dashboard">/dashboard</router-link>
    <router-link v-if="entry" to="/login">/login</router-link>
    <router-link v-if="!entry" to="/logout">/logout</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  // name: 'App'
  data () {
    return {
      entry: true
    }
  },
  beforeUpdate() {
    console.log(localStorage.token)
    if(localStorage.token) {
      this.entry = false;
    } else {
      this.entry = true;
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
