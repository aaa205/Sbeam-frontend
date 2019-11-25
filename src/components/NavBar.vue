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
                    <b-nav-item href="#">商城</b-nav-item>
                </b-navbar-nav>
                <b-nav-form class="mx-auto">
                    <b-form-input size="sm" type="search" placeholder="搜索"></b-form-input>
                </b-nav-form>
                <b-navbar-nav>
                    <b-nav-item>购物车</b-nav-item>
                    <b-nav-item href="#">注册</b-nav-item>
                    <b-nav-item href="#">登录</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>