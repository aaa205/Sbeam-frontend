<template>
    <b-container>
        <div>
            <b-row class="my-5 text-left" >
                <b-col md="4" >
                    <span class="text-white-50">
                        返回{{back}}
                    </span>
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
            <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;">
                <b-carousel-slide v-bind:img-src="product.img_0"></b-carousel-slide>
                <b-carousel-slide v-bind:img-src="product.img_1"></b-carousel-slide>
                <b-carousel-slide v-bind:img-src="product.img_2"></b-carousel-slide>
                <b-carousel-slide v-bind:img-src="product.img_3"></b-carousel-slide>
            </b-carousel>
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
                            <span>US${{product.price}}+</span>
                        </div>
                        <div class="mt-2">
                            <b-button href="#" class="w-50" variant="danger">购买</b-button>
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
                                    <span>{{product_spec[0].os}}</span>
                                    <span>{{product_spec[1].os}}</span>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="my-5">
                        <div class="text-left text-white">
                            <h6>《{{product.name}}》</h6>
                        </div>
                        <div class="text-left text-info">
                            <span>
                                {{product.description}}<br><br>
                                {{product.description}}<br><br>
                                {{product.description}}<br><br>
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
                                <b-button class="w-100" v-b-toggle.collapse-1 variant="danger" @click="show = !show">显示更多内容</b-button>
                            </template>
                            <template v-else>
                                <b-button class="w-100" v-b-toggle.collapse-1 variant="danger" @click="show = !show">显示更少内容</b-button>
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
                                <div class="text-white-50 text-center">
                                    <span>最低配置</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50 text-center">
                                    <span>推荐</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>操作系统</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product_spec[0].os}}</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>操作系统</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product_spec[1].os}}</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>处理器</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product_spec[0].cpu}}</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>处理器</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product_spec[1].cpu}}</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>显卡</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product_spec[0].gpu}}</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>显卡</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product_spec[1].gpu}}</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>内存</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product_spec[0].ram}}</span>
                                </div>
                            </b-col>
                            <b-col md="6">
                                <div class="text-white-50">
                                    <span>内存</span>
                                </div>
                                <div class="text-white">
                                    <span>{{product_spec[1].ram}}</span>
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
    export default {
        name: "DetailContent",
        data(){
            return {
                back:'商城',
                show :true,
                msg :'显示更多内容',
                product:{
                    id:1,
                    name:'荒野大镖客：救赎2',
                    description :'Rockstar Games出品的史诗般的开放世界游戏《荒野大镖客：救赎2》不仅好评如潮，也是主机世代评分最高的游戏，PC版更是添加了全新故事模式内容，并进行了视觉效果升级等各项改进。',
                    price :99.99,
                    release_date:'2019年11月09日',
                    developer:'Rockstar Games',
                    is_single_player:true,
                    is_multi_player:false,
                    is_could_save:true,
                    supported_languages:'英语,法语,意大利语,德语,西班牙语,葡萄牙语（巴西）,日语,简体中文,繁体中文',
                    publisher :'Rockstar Games',
                    card_img:require('../assets/img/game-card/Death Stranding.jpg'),
                    img_0:require('../assets/img/game-detail/Death Stranding-0.jpg'),
                    img_1:require('../assets/img/game-detail/Death Stranding-1.jpg'),
                    img_2:require('../assets/img/game-detail/Death Stranding-2.jpg'),
                    img_3:require('../assets/img/game-detail/Death Stranding-3.jpg'),
                    logo_img:require('../assets/img/game-logo/Borderlands 3.png')
                },
                product_spec:[
                    {
                        product_id :1,
                        os_id:0,
                        os:'Win 10、8和7 SP1+（64位）',
                        cpu :'Intel Core i3/AMD Phenom II X3',
                        gpu :'NvidiaGeForce GTX 660/AMD Radeon R9 270',
                        ram :'8 GB内存'
                    },
                    {
                        product_id :1,
                        os_id:0,
                        os:'Win 10、8和7 SP1+（64位）',
                        cpu :'Intel Core i5 3GHz/AMD FX系列3.2GHz',
                        gpu :'Nvidia GeForce GTX 1060/AMD Radeon R9 390X',
                        ram :'16 GB内存'
                    },
                    {
                        product_id :1,
                        os_id:1,
                        os:'Mac OSX 10.11 64位',
                        cpu :'Intel Core i3',
                        gpu :'Radeon Pro 555',
                        ram :'8 GB内存'
                    },
                    {
                        product_id :1,
                        os_id:1,
                        os:'Mac OSX 10.11 64位',
                        cpu :'Intel Core i5',
                        gpu :'AMD Radeon Pro Vega 64',
                        ram :'16 GB内存'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>