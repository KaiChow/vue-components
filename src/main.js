import Vue from "vue";
import App from "./App.vue";
import AlertModal from "./components/dialog/index";
Vue.prototype.KDialog = AlertModal;

//全局自定义的组件使用方法
import MessageBox from "./components/box/index";

Vue.use(MessageBox);

// Vue.use(AlertModal);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
