<template>
  <b-row class="sb-cart-bottombar">
    <b-col class="col-4"></b-col>
    <b-col class="col-5">
      <div class="sb-cart-total">
        <p>
          总价：
          <span class="sb-cart-number">${{total.toFixed(2)}}</span>
        </p>
      </div>
    </b-col>
    <b-col class="col-3">
      <div>
        <b-button href="#" to="/cart_blank" class="sb-cart-summit">
          <span class="sb-cart-fontsize">结算</span>
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CartBottomBarMobile",
  computed:{
        ...mapGetters('cart',{
            total:'cartTotalPrice'
        })
    }
};
</script>

<style scoped>
div {
  padding: 3px;
  margin: 0;
}
.sb-cart-fontsize {
  font-size: 90%;
}
.sb-cart-bottombar {
  margin: 10px 3px;
  text-align: center;
}
.sb-cart-total {
  padding-top: 8px;
  font-weight: bold;
  text-align: center;
}
.sb-cart-number {
    color: #91dba2;
    font-size: 120%;
}
</style>