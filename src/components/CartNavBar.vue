<template>
  <b-row class="sb-cart-navbar">
    <b-col class="col-1 sb-head">
      <b-form-checkbox :checked="this.allSelected" style="text-align: left">全选</b-form-checkbox>
    </b-col>
    <b-col class=" offset-3 col-3 sb-head">商品信息</b-col>
    <b-col class="col-1 sb-head">单价</b-col>
    <b-col class="col-2 sb-head">数量</b-col>
    <b-col class="col-1 sb-head">总价</b-col>
    <b-col class="col-1 sb-head">操作</b-col>
  </b-row>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CartNavBar",
  computed:{
    ...mapGetters('cart', {
      allSelected: 'isAllSelected'
    })
  }
}
</script>

<style scoped>
.sb-cart-navbar {
  color: white;
  margin: 15px;
}
.sb-head {
  text-align: center;
}
</style>