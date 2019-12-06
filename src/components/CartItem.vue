<template>
  <b-row class="sb-cart-row">
    <!-- 复选框 -->
    <b-col class="col-1 sb-cart-col">
      <b-form-checkbox
        class="sb-cart-checkbox"
        id="selectAll"
        value="selected"
        unchecked-value="not-selected"
      >{{item.id}}</b-form-checkbox>
    </b-col>
    <!-- 游戏图 -->
    <b-col class="col-3 sb-cart-img">
      <a href="#">
        <b-img-lazy class="sb-cart-img" :src="item.imgSrc" :alt="item.Gname" left></b-img-lazy>
      </a>
    </b-col>
    <!-- 游戏描述 -->
    <b-col class="col-3 sb-cart-col">
      <a href="#" class="sb-cart-atext">
        <b-row class="sb-cart-Gtitle">
          <h5 class="sb-cart-h5">{{item.Gname}}</h5>
        </b-row>
        <b-row class="sb-cart-Gintro">
          <p class="sb-cart-p">{{item.Introduction}}</p>
        </b-row>
      </a>
    </b-col>
    <!-- 金额 -->
    <b-col class="col-1 sb-cart-col">
      <p class="sb-cart-price">{{item.price}}</p>
    </b-col>
    <!-- 操作 -->
  </b-row>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object
  }
};
</script>

<style>
.sb-cart-row {
  margin: 15px;
  text-align: left;
  height: 80px;
  border: 1px solid #5f5f5f;
  vertical-align: middle;
}
.sb-cart-col {
  height: 100%;
  width: 100%;
}
.sb-cart-checkbox {
  top: 35%;
}
.sb-cart-text {
  text-align: center;
  margin-top: 28px;
}
.sb-cart-img {
  height: 98%;
  width: auto;
}
.sb-cart-p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.sb-cart-Gtitle {
  height: 30%;
}
.sb-cart-h5 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.sb-cart-price {
  text-align: center;
  margin-top: 28px;
}

@media screen and (max-width: 992px) {
  .sb-cart-checkbox {
    top: 15px;
  }
  .sb-cart-text {
    text-align: center;
    margin-top: 15px;
  }
  .sb-cart-row {
    height: 55px;
  }
  .sb-cart-price {
    text-align: center;
    margin-top: 15px;
  }
  .sb-cart-h5 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .sb-cart-p {
    visibility: hidden;
  }
}
</style>