<template>
    <b-container>
        <div>
            <b-row class="my-5 text-left">
                <b-col md="4">
                    <router-link class="text-white-50" to="/">返回首页</router-link>
                    <span class="mx-2 text-white">
                        |
                    </span>
                    <span class="text-white">
                        {{product.name}}
                    </span>
                </b-col>
            </b-row>
        </div>
        <div>
            <home-carousel
                    v-bind:carousel-data="carouselData"></home-carousel>
        </div>
        <div>
            <b-row class="my-4">
                <b-col md="3">
                    <div>
                        <b-img-lazy v-bind:src="product.logo_img" class="bg-dark img-fluid"></b-img-lazy>
                    </div>
                </b-col>
                <b-col md="6">
                    <div class="text-white text-left">
                        <span>{{product.description}}</span>
                    </div>
                </b-col>
                <b-col md="3">
                    <div class="text-white text-right">
                        <div class="mt-4 h5">
                            <span>US${{product.price}}</span>
                        </div>
                        <div class="mt-2">
                            <b-button @click="addToCart" class="w-50" variant="danger">购买</b-button>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row>
                <b-col md="3" class="my-4">
                    <div class="text-left text-white h5">
                        <span>关于游戏</span>
                    </div>
                </b-col>
                <b-col md="9" class="my-4">
                    <div>
                        <b-row class="mb-2">
                            <b-col md="4">
                                <div class="text-white-50 text-left">
                                    <span>开发商</span>
                                </div>
                                <div class="text-white text-left">
                                    <span>{{product.developer}}</span>
                                </div>

                            </b-col>
                            <b-col md="4" class="my-2">
                                <div class="text-white-50 text-left">
                                    <span>发行商</span>
                                </div>
                                <div class="text-white text-left">
                                    <span>{{product.publisher}}</span>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="text-white-50 text-left">
                                    <span>发行日期</span>
                                </div>
                                <div class="text-white text-left">
                                    <span>{{product.release_date}}</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="mb-2">
                            <b-col md="4">
                                <div class="text-white-50 text-left">
                                    <span>标签</span>
                                </div>
                                <div class="text-white text-left">
                                    <span>{{product.is_single_player}}</span>&nbsp;
                                    <span>{{product.is_multi_player}}</span>&nbsp;
                                    <span>{{product.is_could_save}}</span>&nbsp;
                                </div>
                            </b-col>
                            <b-col md="4">
                                <div class="text-white-50 text-left">
                                    <span>评级</span>
                                </div>
                                <div class="text-white text-left">
                                    <span>17岁以上</span>
                                </div>
                            </b-col>
                            <b-col md="4">
                                <div class="text-white-50 text-left">
                                    <span>平台</span>
                                </div>
                                <div class="text-white text-left">
                                    <span>{{product.spec[0].os}}</span>
                                    <span>{{product.spec[0].os}}</span>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="my-5">
                        <div class="text-left text-white">
                            <strong>《{{product.name}}》</strong>
                        </div>
                        <div class="text-left text-white">
                            <span>
                                {{product.description}}<br><br>
                                {{product.description}}<br><br>
                            </span>
                        </div>
                        <div>
                            <b-collapse id="collapse-1">
                                <b-row class="my-4">
                                    <b-col md="6">
                                        <b-img-lazy v-bind:src="product.img_0" class="img-fluid"></b-img-lazy>
                                    </b-col>
                                    <b-col md="6">
                                        <b-img-lazy v-bind:src="product.img_1" class="img-fluid"></b-img-lazy>
                                    </b-col>
                                </b-row>
                                <b-row class="my-4">
                                    <b-col md="12" class="img-fluid">
                                        <b-img-lazy v-bind:src="product.img_2" class="img-fluid"></b-img-lazy>
                                    </b-col>
                                </b-row>
                                <b-row class="my-4">
                                    <b-col md="12" class="img-fluid">
                                        <b-img-lazy v-bind:src="product.img_3" class="img-fluid"></b-img-lazy>
                                    </b-col>
                                </b-row>
                            </b-collapse>
                        </div>
                        <div>
                            <!--                            <b-button class="w-100" v-b-toggle.collapse-1 variant="danger" @click="change" v-show="show">{{msg}}</b-button>-->
                            <template v-if="show">
                                <b-button class="w-100" v-b-toggle.collapse-1 variant="danger" @click="show = !show">
                                    显示更多内容
                                </b-button>
                            </template>
                            <template v-else>
                                <b-button class="w-100" v-b-toggle.collapse-1 variant="danger" @click="show = !show">
                                    显示更少内容
                                </b-button>
                            </template>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div>
            <b-row>
                <b-col md="3">
                    <div class="text-left text-white h5">
                        <span>配置</span>
                    </div>
                </b-col>
                <b-col md="9">
                    <div class="text-left">
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span class="text-left">最低配置</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50 ">
                                    <span class="text-left">推荐</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>操作系统</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.spec[0].os}}</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>操作系统</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.spec[0].os}}</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>处理器</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.spec[0].cpu}}</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>处理器</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.spec[0].cpu}}</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>显卡</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.spec[0].gpu}}</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>显卡</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.spec[0].gpu}}</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>内存</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.spec[0].ram}}</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>内存</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.spec[0].ram}}</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="12">
                                <div class="text-white-50">
                                    <span>支持的语言</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product.supported_languages}}</span>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </div>

    </b-container>
</template>

<script>
    import {addCartItems, getProductDetailById} from "@/apis/api";
    import HomeCarousel from "@/components/HomeCarousel";

    export default {
        name: "DetailContent",
        components: {HomeCarousel},
        data() {
            return {
                back: '商城',
                show: true,
                msg: '显示更多内容',
                product: {
                    spec: [{}]
                },
                carouselData: []
            }
        },
        mounted() {
            this.getDetail()
        },
        methods: {
            getDetail() {
                getProductDetailById(this.$route.params.id).then(resp => {
                    if (resp.status == 200) {
                        resp.data.logo_img = require('../assets/' + resp.data.logo_img)
                        resp.data.img_0 = require('../assets/' + resp.data.img_0)
                        resp.data.img_1 = require('../assets/' + resp.data.img_1)
                        resp.data.img_2 = require('../assets/' + resp.data.img_2)
                        resp.data.img_3 = require('../assets/' + resp.data.img_3)
                        let dd=new Date(resp.data.release_date)
                        resp.data.release_date=dd.getFullYear()+"年"+dd.getMonth()+"月"+dd.getDate()+"日"
                        this.product = resp.data
                        this.carouselData = [
                            {id: 1, imgSrc: this.product.img_0,Gname:''},
                            {id: 2, imgSrc: this.product.img_1,Gname:''},
                            {id: 3, imgSrc: this.product.img_2,Gname:''},
                            {id: 4, imgSrc: this.product.img_3,Gname:''}]

                    } else if (resp.status == 404) {
                        //todo 以后加个404页面
                    }
                })
            },
            addToCart(){
                let add=JSON.stringify({product_id:this.product.id,quantity:1})
                addCartItems({add:add}).then(resp=>{
                    if(resp.status==403)
                        alert('请先登录')
                    if(resp.status==200){
                        alert('添加成功')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>