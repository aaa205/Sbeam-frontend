<template>
    <b-container class="sb-cart-container">
        <div class="sb-jumbotron sb-bgc-grey sb-cart-div">
            <b-row>
                <b-col>
                    <h3 class="row-title sb-title-leftpadding">全部商品</h3>
                </b-col>
            </b-row>
            <div>
                <cart-nav-bar v-if="isLargeWidth"></cart-nav-bar>
                <cart-nav-bar-mobile v-if="isSmallWidth"></cart-nav-bar-mobile>
                <div v-for="item in products" v-bind:key="item.id">
                    <cart-item v-if="isLargeWidth" :item="item" :items="products" v-model="products"></cart-item>
                    <cart-item-mobile v-if="isSmallWidth" :item="item" :items="products"
                                      v-model="products"></cart-item-mobile>
                </div>
                <cart-bottom-bar v-if="isLargeWidth"></cart-bottom-bar>
                <cart-bottom-bar-mobile v-if="isSmallWidth" :items="products"></cart-bottom-bar-mobile>
            </div>
        </div>
    </b-container>
</template>


<script>
    import CartItem from "@/components/CartItem";
    import CartItemMobile from "@/components/CartItemMobile";
    import CartNavBar from "@/components/CartNavBar";
    import CartNavBarMobile from "@/components/CartNavBarMobile";
    import CartBottomBar from "@/components/CartBottomBar";
    import CartBottomBarMobile from "@/components/CartBottomBarMobile";
    import {getCartItems} from "@/apis/api";
    import {mapGetters, mapState} from "vuex";

    export default {
        components: {CartItem, CartNavBar, CartBottomBar, CartItemMobile, CartNavBarMobile, CartBottomBarMobile},
        data() {
            return {
                screenWidth: document.body.clientWidth,
                isSmallWidth: false,
                isLargeWidth: true,
                products: [
                    {
                        id: 1,
                        imgSrc: require("../assets/img/game-logo/Red-Dead-Redemption-2.png"),
                        Gname: "Red Dead Redemption 2",
                        Introduction:
                            "Rockstar Games出品的史诗般的开放世界游戏《荒野大镖客：救赎2》不仅好评如潮，也是主机世代评分最高的游戏，PC版更是添加了全新故事模式内容，并进行了视觉效果升级等各项改进。",
                        gameSrc: "#",
                        price: 169,
                        quantity: 1
                    },
                    {
                        id: 2,
                        imgSrc: require("../assets/img/game-logo/Red Dead Redemption 2.png"),
                        Gname: "Red Dead Redemption 2",
                        Introduction:
                            "Rockstar Games出品的史诗般的开放世界游戏《荒野大镖客：救赎2》不仅好评如潮，也是主机世代评分最高的游戏，PC版更是添加了全新故事模式内容，并进行了视觉效果升级等各项改进。",
                        gameSrc: "#",
                        price: 169,
                        quantity: 1
                    },
                    {
                        id: 3,
                        imgSrc: require("../assets/img/game-logo/Red-Dead-Redemption-2.png"),
                        Gname: "Red Dead Redemption 2",
                        Introduction:
                            "Rockstar Games出品的史诗般的开放世界游戏《荒野大镖客：救赎2》不仅好评如潮，也是主机世代评分最高的游戏，PC版更是添加了全新故事模式内容，并进行了视觉效果升级等各项改进。",
                        gameSrc: "#",
                        price: 169,
                        quantity: 1
                    }
                ]
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
                    window.console.log(resp.data)
                    if(resp.status==200){
                        this.$store.dispatch('cart/setAllItems',resp.data.items)
                    }
                })
            }
        },
        computed: {
            ...mapState({
                items: state => state.cart.items
            }),
            ...mapGetters('cart', {
                total: 'cartTotalPrice'
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
        padding-left: 50px;
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