
import '@/styles/main.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VModal from "vue-js-modal";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBgk05TerpUHpowJ8bA0KQIB7zisGsdnYg',
        /*libraries: 'places',*/ // This is required if you use the Autocomplete plugin
    },
    installComponents: true
})

Vue.use(VModal);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')