<template>
  <b-container>
    <div class="sb-jumbotron sb-bgc-grey sb-cart-div">
      <div class="sb-jumbotron sb-bgc-grey sb-cart-div">
        <b-jumbotron class="sb-cart-bg" header="您的购物车为空！" lead="请探索更多商品……">
          <b-button variant="info" to="/">立即购物</b-button>
        </b-jumbotron>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name:'CartBlank'
};
</script>

<style scoped>
.row-title {
  color: white;
  font-size: 1.17em;
  margin-top: 3%;
}
.sb-cart-bg {
  background: url("../assets/img/cart/cart.png") no-repeat right;
  background-size: auto 60%;
  height: 500px;
  line-height: 7em;
  padding-left: 100px;
}
.sb-cart-div {
  color: white;
  text-align: left;
  height: 500px;
  margin: 20px auto;
}
</style>