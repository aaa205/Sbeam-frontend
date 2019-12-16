<template>
  <!-- 二层（图片） -->
  <b-row class="sb-order-layer2">
    <b-col class="col-3">
      <a href="#">
        <div class="sb-order-divimg text-center">
          <b-img-lazy class="sb-order-img center" :src="item.logo_img" :alt="item.namg"></b-img-lazy>
        </div>
      </a>
    </b-col>
    <b-col class="col-9">
      <!-- 2.1层 游戏名称、商品单价 -->
      <b-row class="sb-order-layer2up">
        <b-col class="col-8">
          <p>
            <a href class="sb-order-a sb-order-leftpad sb-order-name">{{item.name}}</a>
          </p>
        </b-col>
        <b-col class="col-2 sb-order-leftpad">单价：{{item.price}}</b-col>
        <b-col class="col-2 sb-order-upline sb-order-leftpad">商品代号：{{item.product_id}}</b-col>
      </b-row>
      <!-- 2.2层 游戏描述、商品数量、订单总价 -->
      <b-row class="sb-order-layer2down">
        <b-col class="col-8 sb-order-desc sb-order-desc">
          <a href class="sb-order-a">
            <span class="sb-order-leftpad sb-order-desc">{{item.description}}</span>
          </a>
        </b-col>
        <b-col class="col-2 sb-order-leftpad sb-order-downalign">数量：{{item.quantity}}</b-col>
        <b-col class="col-2 sb-order-leftpad sb-order-downalign">总价：{{total}}</b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "OrderItemSingle",
  props: { item: Object },
  data() {
    return {
      total: 0
    };
  },
  mounted() {
    this.total = this.item.quantity * this.item.price;
  }
};
</script>

<style scoped>
div {
  text-align: left;
  font-size: 100%;
  color: #bfbfbf;
  margin: 0;
  padding: 0;
}
.sb-order-layer2 {
  margin: 5px auto;
}
.sb-order-layer2up {
  height: 50%;
  line-height: 70px;
  margin: 0;
  padding: 0;
  background-color: #404040;
}
.sb-order-layer2down {
  height: 50%;
  line-height: 30px;
  background-color: #404040;
}
.sb-order-img {
  max-height: 100%;
  max-width: 98%;
}
.sb-order-name {
  font-weight: 600;
  font-size: 130%;
}
.sb-order-a {
  color: #bfbfbf;
}
.sb-order-a:hover {
  /* font-style: italic; */
  text-decoration-line: underline;
  color: #efefef
}
.sb-order-desc {
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.sb-order-desc:hover{
    color: #cfcfcf
}
.sb-order-leftpad {
  padding-left: 10px;
}
.sb-order-downalign {
  line-height: 70px;
}
</style>