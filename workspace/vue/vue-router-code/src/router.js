import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Foo from '@/views/Foo'
import { DEFAULT_ECDH_CURVE } from 'tls';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:Home
    },{
      path: '/foo',
      component: Foo
    }
  ]
})

export default router
