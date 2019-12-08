<template>
  <b-row class="sb-cart-navbar">
    <b-col class="col-2 sb-head">
      <b-form-checkbox id="selectAll" value="selected" unchecked-value="not-selected" style="text-align: left"></b-form-checkbox>
    </b-col>
    <b-col class="col-10 sb-head">商品信息</b-col>
  </b-row>
</template>

<script>
export default {
  name: "CartNavBarMobile",
  props: {
    item: Object
  }
};
</script>

<style scoped>
.sb-cart-navbar {
    margin: 0px;
}
.sb-head {
  text-align: center;
  font-size: 90%;
}
</style>