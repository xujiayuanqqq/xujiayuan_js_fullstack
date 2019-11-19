<template>
  <transition name="el-alert-fade">
    <!-- 居中 不同type -->
    <div class="el-alert" :class="[typeClass, center? 'is-center': '']" v-show="visible">
      <div class="el-alert__content">
        <span class="el-alert__title" v-if="title">{{title}}</span>
        <slot>
          <p class="el-alert__descripyion" v-if="description">{{description}}</p>
        </slot>
        <i class="el-alert__closebtn el-icon-close" @click="close()"></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    center: Boolean
  },
  computed: {
    typeClass () {
      return `el-alert--${this.type}`
    }
  },
  methods: {
    close () {
      this.visible = false;
      this.$emit('close');
    }
  }
};
</script>

<style>
.el-alert-fade-enter-active {
  transition: all .3s ease;
}
.el-alert-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.el-alert-fade-enter, .el-alert-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
