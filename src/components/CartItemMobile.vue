<template>
    <b-row class="sb-cart-row">
        <!-- 复选框 -->
        <b-col class="col-1 sb-cart-col">
            <b-form-checkbox
                    class="sb-cart-checkbox"
                    id="selectAll"
                    value="selected"
                    unchecked-value="not-selected"
            ></b-form-checkbox>
        </b-col>
        <!-- 右侧 -->
        <b-col class="col-11">
            <!-- 删除 -->
            <b-row>
                <b-col class="col-11"></b-col>
                <b-col class="col-1">
                    <b-button class="sb-cart-smallbtn sb-float-rignt">x</b-button>
                </b-col>
            </b-row>
            <!-- 上面 -->
            <b-row class="sb-upper-row">
                <!-- 图片 -->
                <b-col class="col-4 sb-cart-img">
                    <a href="#">
                        <b-img-lazy class="sb-cart-img sb-cart-img" :src="item.logo_img" :alt="item.name"
                                    left></b-img-lazy>
                    </a>
                </b-col>
                <!-- 标题+简介 -->
                <b-col class="col-8">
                    <b-row>
                        <a href="#" class="sb-cart-atext">
                            <b-row class="sb-cart-Gtitle">
                                <h5 class="sb-cart-h5 sb-cart-a">{{item.name}}</h5>
                            </b-row>
                            <b-row>
                                <p class="sb-cart-p sb-cart-a">{{item.description}}</p>
                            </b-row>
                        </a>
                    </b-row>
                </b-col>
            </b-row>
            <!-- 下面 -->
            <b-row>
                <!-- 单价 -->
                <b-col class="col-5 sb-cart-col">
                    <p class="sb-cart-align">
                        <span class="sb-cart-perprice">{{item.price}}</span> 元/份
                    </p>
                </b-col>
                <!-- 数量 -->
                <b-col class="col-7 sb-cart-align">
                    <span>数量：</span>
                    <b-button class="sb-cart-smallbtn" type="button" @click="sub()">-</b-button>
                    <input class="sb-cart-itext" type="text" v-model="item.quantity"/>
                    <b-button class="sb-cart-smallbtn" type="button" @click="add()">+</b-button>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
export default {
  name: "CartItemMobile",
  props: {
    item: Object
  },
  data() {
    return {};
  },
  methods: {
    add() {
      if (this.item.quantity < 0) {
        this.item.quantity = 0;
      }
      this.item.quantity++;
      this.addup();
    },
    sub() {
      if (this.item.quantity <= 0) {
        alert("不能再减少数量啦！");
        this.item.quantity = 0;
      } else {
        this.item.quantity--;
      }
    },
    del() {
      this.items.slice(this.item.id - 1, 1);
    }
  }
};
    import {asynUpdate} from "@/apis/api";

    export default {
        name: "CartItemMobile",
        props: {
            item: Object,//{id,quantity,price,name,description,logo_img}
            index: Number,
        },
        data() {
            return {};
        },
        methods: {
            add() {
                if (this.item.quantity < 0) {
                    this.item.quantity = 0;
                }
                this.item.quantity++;
                asynUpdate({product_id: this.item.id, quantity: this.item.quantity, type: 'update'}).then(resp => {
                    if (resp.status == 200) {
                        if (resp.data.ret == 0)
                            window.console.log("更新成功")
                    }
                })
            },
            sub() {
                if (this.item.quantity <= 0) {
                    alert("不能再减少数量啦！");
                    this.item.quantity = 0;
                } else {
                    this.item.quantity--;
                }
                asynUpdate({product_id: this.item.id, quantity: this.item.quantity, type: 'delete'}).then(resp => {
                    if (resp.status == 200) {
                        if (resp.data.ret == 0)
                            window.console.log("删除成功")
                    }
                })
            }
        }
    };
</script>

<style scoped>
    div {
        padding: 0 3px;
        margin: 0;
    }

    .sb-float-rignt {
        float: right;
    }

    .sb-cart-row {
        margin: 3px;
        text-align: left;
        height: 180px;
        border: 1px solid #5f5f5f;
        font-size: 80%;
    }

    .sb-cart-a:hover {
        font-style: italic;
        text-decoration-line: underline;
    }

    .sb-upper-row {
        max-width: 100%;
        max-height: 60%;
        height: 100%;
        width: 100%;
    }

    .sb-cart-img {
        max-width: 100%;
        max-height: 108px;
        height: 100%;
        width: 100%;
        background-color: #dfdfdf;
        padding: 0;
        text-align: center;
    }

    .sb-cart-checkbox {
        top: center;
        vertical-align: middle;
        left: 2.1rem;
        top: 4.8rem;
    }

    .sb-cart-Gtitle {
        height: 50%;
    }

    .sb-cart-p {
        line-height: 1.2em;
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .sb-cart-smallbtn {
        width: 15px;
        text-align: center;
        padding: 0;
        line-height: 0.9em;
    }

    .sb-cart-h5 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .sb-cart-align {
        text-align: center;
        margin: 0;
        margin-top: 17px;
        font-size: 130%;
    }

    .sb-cart-itext {
        width: 40px;
        height: 25px;
    }

    .sb-cart-perprice {
        color: red;
        font-size: 110%;
        font-weight: 550;
    }
</style>