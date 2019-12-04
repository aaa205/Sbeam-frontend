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
                    <b-nav-item to="/browse">商城</b-nav-item>
                </b-navbar-nav>
                <b-nav-form class="mx-auto">
                    <b-input type="search" placeholder="搜索"></b-input>
                    <input type="button" class=" btn sb-btn" value="ok">
                </b-nav-form>
                <b-navbar-nav>
                    <b-nav-item to="/cart">购物车</b-nav-item>
                    <b-nav-item v-if="!this.userName" to="/login">登录</b-nav-item>
                    <b-nav-item v-else>
                        <b-img width="25" height="25" center rounded="circle" v-bind:src="avatar"></b-img>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                userName: null,
                avatar: '',
                userID:0
            }
        },
        mounted() {
            this.getLoginState()
        },
        methods: {
            getLoginState() {
                this.userName = this.$cookies.get('userName')
                this.userID=this.$cookies.get('userID')
                let img = this.$cookies.get('avatar')
                if (img)
                    this.avatar = require('../assets/' + img)
            }
        }
    }
</script>

<style scoped>


</style>