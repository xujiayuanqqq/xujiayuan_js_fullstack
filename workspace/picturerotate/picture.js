new Vue({
    el: '#app',
    data: {
      title: 'Web UI Development Handbook',
      demoTitle: "CSS3 Animation 3D Demo",
      dir: 'default'
    },
    computed: {
      fullDir () {
        return `show-${this.dir}`
      }
    }
  })