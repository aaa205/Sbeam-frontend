<template>
    <b-container class="sb-cart-container">
        <div v-if="!this.isEmpty" class="sb-jumbotron sb-bgc-grey sb-cart-div">
            <b-row>
                <b-col>
                    <h3 class="row-title sb-title-leftpadding">购物车</h3>
                </b-col>
            </b-row>
            <div>
                <cart-nav-bar v-if="isLargeWidth"></cart-nav-bar>
                <cart-nav-bar-mobile v-if="isSmallWidth"></cart-nav-bar-mobile>
                <div v-for="(item,index) in this.items" v-bind:key="index">
                    <cart-item v-if="isLargeWidth" :item="item" :index="index+1"></cart-item>
                    <cart-item-mobile v-if="isSmallWidth" :item="item" :index="index+1"></cart-item-mobile>
                </div>
                <cart-bottom-bar v-if="isLargeWidth"></cart-bottom-bar>
                <cart-bottom-bar-mobile v-if="isSmallWidth"></cart-bottom-bar-mobile>
            </div>
        </div>
        <CartBlank v-else></CartBlank>
    </b-container>
</template>


<script>
    import CartItem from "@/components/CartItem";
    import CartBlank from "@/components/CartBlank";
    import CartItemMobile from "@/components/CartItemMobile";
    import CartNavBar from "@/components/CartNavBar";
    import CartNavBarMobile from "@/components/CartNavBarMobile";
    import CartBottomBar from "@/components/CartBottomBar";
    import CartBottomBarMobile from "@/components/CartBottomBarMobile";
    import {getCartItems} from "@/apis/api";
    import {mapGetters, mapState} from "vuex";

    export default {
        components: {
            CartBlank,
            CartItem,
            CartNavBar,
            CartBottomBar,
            CartItemMobile,
            CartNavBarMobile,
            CartBottomBarMobile
        },
        data() {
            return {
                screenWidth: document.body.clientWidth,
                isSmallWidth: false,
                isLargeWidth: true,
            };
        },
        mounted() {
            if (this.screenWidth <= 992) {
                this.isSmallWidth = true;
            }
            this.isLargeWidth = !this.isSmallWidth;
            this.getAllItems()
        },
        methods: {
            getAllItems() {
                getCartItems().then(resp => {
                    if (resp.status == 200) {
                        //[{id,quantity,price,name,description,logo_img}]
                        resp.data.items.forEach(item => {
                            item.logo_img = require("../assets/" + item.logo_img)
                        })
                        window.console.log(resp.data)
                        this.$store.dispatch('cart/setAllItems', resp.data.items)
                    } else if (resp.status == 403) {
                        window.alert('请先登录')
                    }
                })
            },

        },
        computed: {
            ...mapState({
                items: state => state.cart.items

            }),
            ...mapGetters('cart', {
                total: 'cartTotalPrice',
                isEmpty: 'isEmpty'
            })
        }
    }
</script>

<style scoped>
    .row-title {
        color: white;
        font-size: 1.17em;
        margin-top: 3%;
    }

    .sb-title-leftpadding {
        padding-left: 30px;
    }

    .sb-cart-bg {
        background: url("../assets/img/cart/cart.png") no-repeat right;
        background-size: auto 60%;
        line-height: 7em;
        padding-left: 100px;
    }

    .sb-cart-div {
        margin-top: 20px;
    }

    body {
        font-size: 100%;
    }
</style>