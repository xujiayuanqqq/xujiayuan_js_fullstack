<template>
  <div class="container">
    <slider-nav :menuWidth="60" :currentTab.sync="currentTab" :navList="this.navList"></slider-nav>
  </div>
</template>

<script>
  import slideNav from '@/components/slider-nav'
  import {
    navList
  } from '@/common/js/basic'
  export default {
    name: 'index',
    data() {
      return {
        navList: navList,
        winWidth: 0,
        winHeight: 0,
        // tab切换
        currentTab: 0,
      };
    },
    methods: {
      computed: {
        contentHeight() {
          return this.winHeight - 62 + 'px'
        }
      },
      components: {
        sliderNav,
      },
      async onLoad() {
        // 获取系统消息
        let info = await wxp.getSystemInfo();
        this.winWidth = info.windowWidth;
        this.winHeight = info.windowHeight
      },
    },
  }
</script>
<style lang="scss" scoped>
  .container {
    height: 100%;
    .swiper-box {
      display: block;
      width: 100%;
      overflow: hidden;
      .swiper-item {
        height: 100%;
        text-align: center;
      }
    }
  }
</style>
