import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HomeContent from "@/components/HomeContent";
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from "vue-axios";
import LoginContent from "@/components/LoginContent";
import JoinContent from "@/components/JoinContent";
import BrowseContent from "@/components/BrowseContent";
import Cart from "@/components/CartContent";
import CartBlank from "@/components/CartBlank";
import './css/scaffolding.css'
import DetailContent from "@/components/DetailContent";
import VueCookies from 'vue-cookies'
import store from '@/store'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.config.productionTip = false
const routes = [
    {path: '/', component: HomeContent},
    {path: '/login', component: LoginContent},
    {path: '/join', component: JoinContent},
    {path: '/browse', component: BrowseContent},
    {path: '/product/:id', component: DetailContent},
    {path: '/browse', component: BrowseContent, props: (route) => ({kw: route.query.kw})},
    {path: '/cart', component: Cart},
    {path: '/cart_blank', component: CartBlank}
]
const router = new VueRouter({
    routes
})

//登录判断，通过检查cookies标记是否登录
router.beforeEach((to, from, next) => {
    let isLogin=Vue.cookies.get('isLogin')
    let user=store.state.user
    if(isLogin){
        user.isLogin=true
        user.info={
            userID:Vue.cookies.get('userID'),
            userName:Vue.cookies.get('userName'),
            avatar:Vue.cookies.get('avatar')
        }
    }else{
        user.isLogin=false
    }
    next()
})

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router,
    store,
    data() {
        return {}
    }
}).$mount('#app')
