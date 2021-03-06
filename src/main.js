// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 路由设置
import store from './store';
import './filters';// 过滤器
import Element from 'element-ui'; // element
import 'element-ui/lib/theme-default/index.css'; // element样式
import zhuge from './global/zhuge.js'; // 诸葛io
import './utils/miXins.js';  // 全局函数
import './assets/css/base.css'; // 引入自己的CSS,格式化样式
import axios from './api/api.js';// axios请求配置
import URL_ from './api/url.js';// URL请求地址汇总
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条样式

import Vuex from 'vuex';
import global from './global/global.js';
Vue.prototype.$http = axios;
Vue.prototype.URL = URL_;
Vue.prototype.$global = global;
Vue.use(Element); // UI库
Vue.use(Vuex);
Vue.use(zhuge); // 诸葛io

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to) {
    NProgress.start(); // 开启Progress
  }
  next();
});
router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
