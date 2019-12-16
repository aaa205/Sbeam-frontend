<template>
  <div>
      <b-row class="sb-order-outerrow">
    <b-col>
      <!-- 一层（时间、订单号、商品号） -->
      <b-row class="sb-order-layer1">
        <b-col class="col-3 sb-order-upline">日期：{{date}}</b-col>
        <b-col class="col-9 sb-order-upline">订单号：{{order.order_id}}</b-col>
      </b-row>
      <order-item-single v-for="item in order.items" :key="item.product_id" :item="item"></order-item-single>
    </b-col>
  </b-row>
  <hr class="filters_line">
  </div>
  
</template>

<script>
import OrderItemSingle from "@/components/OrderItemSingle";
export default {
  name: "orderItem",
  props: {
    order: Object
  },
  components: { OrderItemSingle },
  data() {
    return {
      date: null
    };
  },
  mounted() {
    this.date = new Date(this.order.created_time);
    this.date =
      this.date.getFullYear() +
      "-" +
      (this.date.getMonth() + 1) +
      "-" +
      this.date.getDate();
  }
};
</script>

<style scoped>
div {
  text-align: left;
  font-size: 100%;
  color: #efefef;
  margin: 0;
  padding: 0;
}
.sb-order-outerrow {
  margin: 1% auto;
  /* border-bottom: 1px solid #8a8a8a; */
  /* border-radius: 10px; */
}
.sb-order-layer1 {
  height: 40px;
}
.sb-order-upline {
  line-height: 40px;
  padding-left: 10px;
}
.sb-cart-a:hover {
  font-style: italic;
  text-decoration-line: underline;
}
.filters_line {
        background-color: #6f6f6f;
        height: 1px;
        border: none;
    }
</style>