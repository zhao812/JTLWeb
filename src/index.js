//es6 promise
require('es6-promise').polyfill();  

import Vue from 'vue'
import router from './router'    //路由配置
// import store from './store'
import App from './pages/main'

import 'static/reset.css'

//将router加入并生成应用
new Vue({
    // store,
    router,
    el: '#main',
    render: h => h(App)
});