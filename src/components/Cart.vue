<template>
  <b-container class="sb-cart-container">
    <div class="sb-jumbotron sb-bgc-grey sb-cart-div">
      <b-row>
        <b-col>
          <h3 class="row-title sb-title-leftpadding">全部商品</h3>
        </b-col>
      </b-row>
      <cart-nav-bar></cart-nav-bar>
      <div v-for="item in items" v-bind:key="item.id">
        <cart-item :item="item" :items="items" v-model="items"></cart-item>
      </div>
      <b-button href="#" to="/cart_blank">去隔壁</b-button>
    </div>
  </b-container>
</template>

<script>
import CartItem from "@/components/CartItem";
import CartNavBar from "@/components/CartNavBar";
export default {
  components: { CartItem, CartNavBar },
  data() {
    return {
      items: [
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
          imgSrc: require("../assets/img/game-logo/Red-Dead-Redemption-2.png"),
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
        },
        {
          id: 4,
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
  }
};
</script>

<style>
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
  height: 500px;
  line-height: 7em;
  padding-left: 100px;
}
.sb-cart-div {
  height: 500px;
  margin: 20px auto;
}
@media screen and (max-width: 768px) {
  .sb-cart-container {
    max-width: 720px;
    width: 720px;
  }
}
@media screen and (max-width: 768px) {
  .sb-cart-container {
    max-width: 720px;
    width: 720px;
  }
}
</style>