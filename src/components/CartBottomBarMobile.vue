<template>
  <b-row class="sb-cart-bottombar">
    <b-col class="col-4"></b-col>
    <b-col class="col-5">
      <div class="sb-cart-total">
        <p>
          总价：￥
          <span class="sb-cart-number">{{total}}</span>
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
export default {
  name: "CartBottomBarMobile",
  props: {
    items: []
  },
  data() {
    return {
      total: 0
    };
  },
  methods: {
    addup() {
      this.items.forEach(item => {
        this.total = this.total + item.quantity * item.price;
      });
    }
  },
  mounted: function() {
    this.addup();
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
  color: gold;
  font-size: 120%;
}
</style>