<template>
    <div>
        <b-navbar class="sticky-top" toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Sbeam</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!--主页路由-->
                    <b-nav-item to="/">
                        探索
                    </b-nav-item>
                    <b-nav-item to="/browse">浏览</b-nav-item>
                </b-navbar-nav>
                <b-nav-form class="mx-auto">
                    <b-input placeholder="搜索" v-model="kw" @keyup.enter="toBrowse"></b-input>
                </b-nav-form>
                <b-navbar-nav>
                    <b-nav-item to="/cart">购物车</b-nav-item>
                    <b-nav-item v-if="!this.isLogin" to="/login">登录</b-nav-item>
                    <b-nav-item-dropdown v-else no-caret variant="link" right class="drop_list">
                        <template v-slot:button-content>
                            <div>欢迎，{{userName}}</div>
                        </template>
                        <b-img width="30" height="30" center rounded="circle" :src="this.avatar"></b-img>
                        <b-dropdown-item href="#">我的订单</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item @click="doLogout">注销</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {logout} from "@/apis/api";

    export default {
        name: "NavBar",
        data() {
            return {
                kw: ''
            }
        },
        computed: mapState({
            isLogin: state => state.user.isLogin,
            userName: state => state.user.info.userName,
            userID: state => state.user.info.userID,
            avatar: state => {
                if (state.user.info.avatar)
                    return require('../assets/' + state.user.info.avatar)
                else
                    return require('../assets/img/avatar/default_avatar.png')
            }
        }),
        methods: {
            toBrowse() {
                this.kw.trim()
                this.$router.push({path: '/browse', query: {kw: this.kw}})
            },
            doLogout() {
                logout().then(resp => {
                    if (resp.status != 200) {
                        window.console.log(resp.data)
                        return
                    }
                    //修改user状态
                    this.$store.dispatch('user/logout')
                    this.$router.push({path:'/'})
                })
            }
        }
    }
</script>

<style scoped>

</style>