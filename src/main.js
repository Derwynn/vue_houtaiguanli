import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import "babel-polyfill";
import Mock from './mock';
Mock.bootstrap();



Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small'
});

Vue.prototype.$http = axios;


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')