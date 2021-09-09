import Vue from "vue/dist/vue";
window.Vue = Vue;

import App from "./App.vue";
import router from "./router";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

Vue.component('app' , App)

new Vue({
    el: '#app',
    router,
    // render: h => h(App)
});
