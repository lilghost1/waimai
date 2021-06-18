// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import request from './ajax.js'
import { Form } from 'vant';
import { Field } from 'vant';
import VueAMap from 'vue-amap';



Vue.use(VueAMap);
Vue.prototype.$http=request;
Vue.use(Vant);
Vue.use(Form);
Vue.use(Field);
Vue.config.productionTip = false
// 引入vue-amap


// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '53109d68c1874667d8c4132e38bb603d',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView','AMap.Geolocation', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  props:[''],
  components: { App },
  template: '<App/>'
})
