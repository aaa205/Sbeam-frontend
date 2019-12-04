<template>
  <b-container>
    <div class="sb-jumbotron sb-bgc-grey sb-cart-div">
      <b-row>
        <b-col>
          <h3 class="row-title sb-title-leftpadding">全部商品</h3>
        </b-col>
      </b-row>
        <b-table>
            
        </b-table>
      <b-jumbotron class="sb-cart-bg" header="您的购物车为空！" lead="请探索更多商品……">
        <b-button href="#" to="/">立即购物</b-button>
        <b-button href="#" to="/cart_blank">去隔壁</b-button>
      </b-jumbotron>
    </div>
  </b-container>
</template>

<script>
export default {};
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
</style>