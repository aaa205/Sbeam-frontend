<template>
    <b-container>
        <b-row>
            <b-col md="9">
                <b-row>
                    <b-col md="3">
                        <div class="text-left text-white">
                            <span>190款游戏</span>
                        </div>
                    </b-col>
                    <b-col class="text-right" md="5" offset-md="4">
                        <div>
                            <span class="text-white-50 col-2">排列方式：</span>
                            <b-form-select v-model="selected" class="col-4">
                                <option :value="null">发行日期</option>
                                <option value="abc">按字母排序</option>
                            </b-form-select>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="3">
                <b-card no-body class="mb-0">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                        <b-button block href="#">
                            筛选器
                        </b-button>
                    </b-card-header>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" md="9">
                <b-row>
                    <b-col cols="6" md="3">
                        <a href="#">
                            <div>
                                <b-img-lazy v-bind:src="imgSrc" class="cardImg"></b-img-lazy>
                            </div>
                            <div class="text-left">
                                <span class="card-title">{{name}}</span><br>
                                <span class="card-subtitle">{{subtitle}}</span><br>
                                <span class="card-title">US${{price}}</span>
                            </div>
                        </a>
                    </b-col>
                    <b-col cols="6" md="3">
                        <a href="#">
                            <div>
                                <b-img-lazy v-bind:src="imgSrc" class="cardImg"></b-img-lazy>
                            </div>
                            <div class="text-left">
                                <span class="card-title">{{name}}</span><br>
                                <span class="card-subtitle">{{subtitle}}</span><br>
                                <span class="card-title">US${{price}}</span>
                            </div>
                        </a>
                    </b-col>
                    <b-col cols="6" md="3">
                        <a href="#">
                            <div>
                                <b-img-lazy v-bind:src="imgSrc" class="cardImg"></b-img-lazy>
                            </div>
                            <div class="text-left">
                                <span class="card-title">{{name}}</span><br>
                                <span class="card-subtitle">{{subtitle}}</span><br>
                                <span class="card-title">US${{price}}</span>
                            </div>
                        </a>
                    </b-col>
                    <b-col cols="6" md="3">
                        <a href="#">
                            <div>
                                <b-img-lazy v-bind:src="imgSrc" class="cardImg"></b-img-lazy>
                            </div>
                            <div class="text-left">
                                <span class="card-title">{{name}}</span><br>
                                <span class="card-subtitle">{{subtitle}}</span><br>
                                <span class="card-title">US${{price}}</span>
                            </div>
                        </a>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" md="3">
                <div role="tablist">
                    <b-card no-body class="mb-0">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.group-1 variant="info">
                                分类
                            </b-button>
                        </b-card-header>
                        <b-collapse id="group-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-list-group>
                                    <b-list-group-item button>动作</b-list-group-item>
                                    <b-list-group-item button>冒险</b-list-group-item>
                                    <b-list-group-item button>编辑器</b-list-group-item>
                                    <b-list-group-item button>解密</b-list-group-item>
                                    <b-list-group-item button>竞速</b-list-group-item>
                                    <b-list-group-item button>角色扮演</b-list-group-item>
                                    <b-list-group-item button>射击</b-list-group-item>
                                    <b-list-group-item button>战略</b-list-group-item>
                                    <b-list-group-item button>生存</b-list-group-item>
                                </b-list-group>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-0">
                        <b-card-header header-tag="header" class="p-0" role="tab">
                            <b-button block href="#" v-b-toggle.group-2 variant="info">
                                特色
                            </b-button>
                        </b-card-header>
                        <b-collapse id="group-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-list-group>
                                    <b-list-group-item button>单人游戏</b-list-group-item>
                                    <b-list-group-item button>多人游戏</b-list-group-item>
                                    <b-list-group-item button>Windows</b-list-group-item>
                                    <b-list-group-item button>OSX</b-list-group-item>
                                </b-list-group>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Browse",
        props: {
            id: Number,
            name: String,
            price: Number,
            imgSrc: String,
            subtitle: String
        },
        data(){
            return {
                selected:null
            }
        }
    }
</script>

<style scoped>

</style>