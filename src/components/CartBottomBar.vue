<template>
    <b-row class="sb-cart-bottombar">
        <b-col class="col-7"></b-col>
        <b-col class="col-3">
            <div class="sb-cart-total">
                <p class="sb-cart-number">
                    总价：
                    <span style="color: #91dba2;">${{total.toFixed(2)}}</span>
                </p>
            </div>
        </b-col>
        <b-col class="col-2">
            <div>
                <b-button href="#" to="/cart_blank" class="sb-cart-summit">结算</b-button>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CartBottomBar",
        computed:{
            ...mapGetters('cart',{
                total:'cartTotalPrice'
            })
        }
    }
</script>

<style scoped>
    .sb-cart-bottombar {
        margin: 30px 15px;
        text-align: right;
    }

    .sb-cart-summit {
        margin-top: 8px;
        /* position: absolute;
        left: 1257px; */
    }

    .sb-cart-total {
        margin-top: 10px;
        font-weight: bold;
        float: right;
        /* position: absolute;
        left: 1050px; */
    }

    .sb-cart-number {

        font-size: 120%;
    }
</style>