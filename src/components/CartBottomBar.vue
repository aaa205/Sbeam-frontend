<template>
    <b-row class="sb-cart-bottombar">
        <b-col class="col-7"></b-col>
        <b-col class="col-3">
            <div class="sb-cart-total">
                <p class="sb-cart-number">
                    总价：
                    <span class="sb-cart-number">${{total.toFixed(2)}}</span>
                </p>
            </div>
        </b-col>
        <b-col class="col-2">
            <div>
                <b-button class="sb-cart-summit" @click="buy" :disabled="disable">结算</b-button>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CartBottomBar",
        computed: {
            ...mapGetters('cart', {
                total: 'cartTotalPrice'
            })
        },
        data() {
            return {
                disable: false
            }
        },
        methods: {
            buy() {
                this.disable = true
                this.$store.dispatch('cart/buyProducts').finally(() => {
                    this.disable = false
                })
            }
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
        color: #91dba2;
        font-size: 120%;
    }
</style>