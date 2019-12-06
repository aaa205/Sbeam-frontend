<template>
  <b-row class="sb-cart-navbar">
    <b-col class="col-1 sb-head">
      <b-form-checkbox id="selectAll" value="selected" unchecked-value="not-selected" style="text-align: left">全选</b-form-checkbox>
    </b-col>
    <b-col class="col-6 sb-head">商品信息</b-col>
    <b-col class="col-1 sb-head">金额</b-col>
    <b-col class="col-3 sb-head">操作</b-col>
  </b-row>
</template>

<script>
export default {
  name: "CartNavBar",
  props: {
    item: Object
  }
};
</script>

<style>
.sb-cart-navbar {
  margin: 15px;
}
.sb-head {
  text-align: center;
}
</style>