<template>
  <b-container class="sb-bgc-grey sb-order-container" >
      <div class="sb-order-headtitle">
          <h3>订单详情</h3>
      </div>
    <order-item  v-for="order in orders" v-bind:key="order.orders_id" :order="order"></order-item>
  </b-container>
</template>

<script>
import OrderItem from "@/components/OrderItem";
export default {
  name: "Order",
  components: { OrderItem },
  data() {
    return {
      ret: 0,
      msg: "success",
      orders: [
        {
          order_id: 43,
          created_time: 1575972116743,
          items: [
            {
              product_id: 18,
              name: "Death Stranding",
              logo_img: require("../assets/img/game-logo/Death Stranding.png"),
              description:
                "Sam Bridges必须勇敢面对被Death Stranding完全颠覆的世界。带着来自未来的碎片，他踏上了一段旅程，逐渐将支离破碎的世界重新连接到一起。",
              quantity: 1,
              price: 59.9
            }
          ]
        },
        {
          order_id: 44,
          created_time: 1575972151669,
          items: [
            {
              product_id: 19,
              name: "Death Stranding",
              logo_img: require("../assets/img/game-logo/Death Stranding.png"),
              description:
                "Sam Bridges必须勇敢面对被Death Stranding完全颠覆的世界。带着来自未来的碎片，他踏上了一段旅程，逐渐将支离破碎的世界重新连接到一起。",
              quantity: 1,
              price: 59.9
            }
          ]
        },
        {
          order_id: 45,
          created_time: 1575972222335,
          items: [
            {
              product_id: 20,
              name: "Death Stranding",
              logo_img: require("../assets/img/game-logo/Death Stranding.png"),
              description:
                "Sam Bridges必须勇敢面对被Death Stranding完全颠覆的世界。带着来自未来的碎片，他踏上了一段旅程，逐渐将支离破碎的世界重新连接到一起。",
              quantity: 1,
              price: 59.9
            }
          ]
        },
        {
          order_id: 47,
          created_time: 1575972451355,
          items: [
            {
              product_id: 21,
              name: "Death Stranding",
              logo_img: require("../assets/img/game-logo/Shenmue 3.png"),
              description:
                "Sam Bridges必须勇敢面对被Death Stranding完全颠覆的世界。带着来自未来的碎片，他踏上了一段旅程，逐渐将支离破碎的世界重新连接到一起。",
              quantity: 1,
              price: 59.9
            }
          ]
        },
        {
          order_id: 48,
          created_time: 1575972502558,
          items: [
            {
              product_id: 22,
              name: "Death Stranding",
              logo_img: require("../assets/img/game-logo/Death Stranding.png"),
              description:
                "Sam Bridges必须勇敢面对被Death Stranding完全颠覆的世界。带着来自未来的碎片，他踏上了一段旅程，逐渐将支离破碎的世界重新连接到一起。",
              quantity: 1,
              price: 59.9
            },
            {
              product_id: 23,
              name: "Metro Exodus",
              logo_img: require("../assets/img/game-logo/Metro Exodus.png"),
              description:
                "《Metro Exodus》由4A Games制作，是一款剧情波澜壮阔、跌宕起伏的第一人称射击游戏。在这款极具沉浸感的游戏中，不仅有紧张激烈的战斗和潜行元素，还可体检探索未知和生存危机带来的恐惧。 ",
              quantity: 1,
              price: 59.9
            }
          ]
        }
      ]
    };
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