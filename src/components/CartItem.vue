<template>
    <b-row class="sb-cart-row">
        <!-- 复选框 -->
        <b-col class="col-1 sb-cart-col">
            <b-form-checkbox
                    class="sb-cart-checkbox"
                    id="selectAll"
                    value="selected"
                    unchecked-value="not-selected"
            >
                <span v-if="isLargeWidth">{{index}}</span>
            </b-form-checkbox>
        </b-col>
        <!-- 游戏图 -->
        <b-col class="col-3 sb-cart-img">
            <a href="#">
                <b-img-lazy class="sb-cart-img" :src="item.logo_img" :alt="item.name" left></b-img-lazy>
            </a>
        </b-col>
        <!-- 游戏描述 -->
        <b-col class="col-3 sb-cart-col">
            <a href="#" class="sb-cart-atext">
                <b-row class="sb-cart-Gtitle">
                    <h6 class="sb-cart-h5 ">{{item.name}}</h6>
                </b-row>
                <b-row class="sb-cart-Gintro">
                    <p class="sb-cart-p  text-white-50">{{item.description}}</p>
                </b-row>
            </a>
        </b-col>
        <!-- 单价 -->
        <b-col class="col-1 sb-cart-col ">
            <p class="sb-cart-align">{{item.price.toFixed(2)}}</p>
        </b-col>
        <!-- 数量 -->
        <b-col class="col-2 sb-cart-align number_input ">
            <b-input  type="number" v-model="item.quantity" max="99" min="1" class="number_input" size="sm"/>
        </b-col>
        <!-- 总价 -->
        <b-col class="col-1 sb-cart-align">{{(item.quantity*item.price).toFixed(2)}}</b-col>
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
            item: Object,//{id,quantity,price,name,description,logo_img}
            index: Number,
        },
        data() {
            return {
                screenWidth: document.body.clientWidth,
                isSmallWidth: false,
                isLargeWidth: !this.isSmallWidth
            };
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
            }
        },
        mounted() {
            if (this.screenWidth <= 992) {
                this.isSmallWidth = true
            }
            this.isLargeWidth = !this.isSmallWidth
            // alert(this.isLargeWidth+' '+this.isSmallWidth)
        }
    };
</script>

<style scoped>
    .sb-cart-a:hover {

        text-decoration-line: underline;
    }

    .sb-cart-row {
        margin: 15px;
        text-align: left;
        height: 80px;
        border: 1px solid #5f5f5f;
        vertical-align: middle;
    }
    .number_input{
        width: 45%;
        display: table;
        margin-left: auto;
        margin-right: auto;
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
        margin-top: 2%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }


    .sb-cart-smallbtn {
        width: 15px;
        text-align: center;
        padding: 0;
        line-height: 0.9em;
    }

    @media screen and (max-width: 992px) {
        .sb-cart-mId {
            visibility: hidden;
        }

        .sb-cart-checkbox {
            top: 15px;
        }

        .sb-cart-row {
            height: 100px;
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