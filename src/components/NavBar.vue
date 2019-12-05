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
                    <b-nav-item v-else>
                        <b-img width="25" height="25" center rounded="circle" v-bind:src="this.avatar"></b-img>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "NavBar",
        data() {
            return {
                kw: ''
            }
        },
        computed:mapState({
            isLogin: state=>state.user.isLogin,
            avatar:state=>require('../assets/'+state.user.info.avatar)
        }),
        methods: {
            toBrowse() {
                this.kw.trim()
                this.$router.push({path: '/browse', query: {kw: this.kw}})
            }
        }
    }
</script>

<style scoped>


</style>