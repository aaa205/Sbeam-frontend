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
          <h5 class="sb-cart-h5 sb-cart-a">{{item.Gname}}</h5>
        </b-row>
        <b-row class="sb-cart-Gintro">
          <p class="sb-cart-p sb-cart-a">{{item.Introduction}}</p>
        </b-row>
      </a>
    </b-col>
    <!-- 单价 -->
    <b-col class="col-1 sb-cart-col">
      <p class="sb-cart-align">{{item.price}}</p>
    </b-col>
    <!-- 数量 -->
    <b-col class="col-2 sb-cart-align">
      <b-button class="sb-cart-smallbtn" type="button" @click="sub()">-</b-button>
      <input class="sb-cart-itext" type="text" v-model="item.quantity" />
      <b-button class="sb-cart-smallbtn" type="button" @click="add()">+</b-button>
    </b-col>
    <!-- 总价 -->
    <b-col class="col-1 sb-cart-align">{{item.quantity*item.price}}</b-col>
    <!-- 操作 -->
    <b-col class="1">
      <a href="#" @click="del()">
        <p class="sb-cart-align sb-cart-a">删除</p>
      </a>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object,
    items: []
  },
  data() {
    return {
      
    };
  },
  methods: {
    add(){
      if(this.item.quantity<0){
        this.item.quantity = 0;
      }
      this.item.quantity++;
    },
    sub(){
      if(this.item.quantity<=0){
        alert('不能再减少数量啦！')
        this.item.quantity = 0
      } else {
        this.item.quantity--
      }
    },
    del(){
      this.items.slice(this.item.id-1,1)
    }
  }
};
</script>

<style>
.sb-cart-a:hover {
  font-style: italic;
  text-decoration-line: underline;
}
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
.sb-cart-align {
  text-align: center;
  margin-top: 28px;
}
.sb-cart-img {
  height: 100%;
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
.sb-cart-itext {
  width: 40px;
}
.sb-cart-smallbtn {
  width: 15px;
  text-align: center;
  padding: 0;
  line-height: 0.9em;
}

@media screen and (max-width: 992px) {
  .sb-cart-checkbox {
    top: 15px;
  }
  .sb-cart-row {
    height: 55px;
  }
  .sb-cart-align {
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