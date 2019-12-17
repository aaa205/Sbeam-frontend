<template>
    <b-container class="sb-bgc-grey sb-order-container">
        <div class="sb-order-headtitle">
            <h3>订单详情</h3>
        </div>
        <order-item v-for="order in orders" v-bind:key="order.orders_id" :order="order"></order-item>
    </b-container>
</template>

<script>
    import OrderItem from "@/components/OrderItem";
    import {getOrders} from "@/apis/api";

    export default {
        name: "Order",
        components: {OrderItem},
        data() {
            return {
                orders: null
            };
        },
        methods: {
            getOrders() {
                getOrders().then(resp => {
                    if (resp.status == 200) {
                        resp.data.orders.forEach(o => {
                            o.items.forEach(i => {
                                i.logo_img = require('../assets/' + i.logo_img)
                            })
                        })
                        resp.data.orders.sort((a, b) => {
                            return b.created_time - a.created_time
                        })
                        this.orders = resp.data.orders
                    }
                })
            }
        },
        mounted() {
            this.getOrders()
        }
    };
</script>

<style scoped>
    .sb-order-container {
        margin: 20px auto;
        color: white;
        text-align: left;
    }

    .sb-order-headtitle {
        padding: 20px;
        padding-bottom: 0;
    }

</style>