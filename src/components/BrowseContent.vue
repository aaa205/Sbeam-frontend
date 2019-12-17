<template>
    <div class="browse_content">
        <b-container>
            <b-row>
                <b-col md="9">
                    <!--游戏数-->
                    <b-row>
                        <b-col><h6 class="text-left bro-title">{{this.cards.length}} 款游戏</h6></b-col>
                    </b-row>
                    <!--游戏展示-->
                    <b-row class="cards_wrapper">
                        <game-card
                                v-for="card in cards"
                                v-bind:id="card.id"
                                v-bind:key="card.id"
                                v-bind:name="card.name"
                                v-bind:img-src="card.card_img"
                                v-bind:logo-src="card.logo_img"
                                v-bind:price="card.price"
                                v-bind:developer="card.developer"
                                v-bind:publisher="card.publisher"
                        ></game-card>
                    </b-row>
                </b-col>
                <!--筛选器-->
                <b-col md="3">
                    <div class="filters_wrapper">
                        <header>
                            <h6 class="bro-title">筛选器</h6>
                            <hr class="filters_line"/>
                        </header>
                        <!--TAG-->
                        <div v-b-toggle.collapse-0>
                            <h6 class="bro-title">分类</h6>
                        </div>
                        <b-collapse id="collapse-0">
                            <b-list-group flush class="filters_list">
                                <router-link to="/browse?kw=a">
                                    <b-list-group-item class="filters_item">动作</b-list-group-item>
                                </router-link>
                                <a href="#">
                                    <b-list-group-item class="filters_item">冒险</b-list-group-item>
                                </a>
                                <a href="#">
                                    <b-list-group-item class="filters_item">编辑器</b-list-group-item>
                                </a>
                                <a href="#">
                                    <b-list-group-item class="filters_item">解密</b-list-group-item>
                                </a>
                                <a href="#">
                                    <b-list-group-item class="filters_item">角色扮演</b-list-group-item>
                                </a>
                                <a href="#">
                                    <b-list-group-item class="filters_item">设计</b-list-group-item>
                                </a>
                            </b-list-group>
                        </b-collapse>
                        <hr class="filters_line"/>

                        <!--特色-->
                        <div v-b-toggle.collapse-1>
                            <h6 class="bro-title">特色</h6>
                        </div>
                        <b-collapse id="collapse-1">
                            <b-list-group flush class="filters_list">
                                <a href="#">
                                    <b-list-group-item class="filters_item">单人游戏</b-list-group-item>
                                </a>
                                <a href="#">
                                    <b-list-group-item class="filters_item">多人游戏</b-list-group-item>
                                </a>
                            </b-list-group>
                        </b-collapse>
                        <hr class="filters_line"/>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import GameCard from "@/components/GameCard";
    import {getGameCards} from "@/apis/api";

    export default {
        name: "BrowseContent",
        data() {
            return {
                cards: []
            }
        },
        mounted: function () {
            this.searchGameCards()
        },
        watch:{
          '$route'(){
              //路由变化时重新获取数据
              this.searchGameCards()
          }
        },
        methods: {
            searchGameCards() {
                getGameCards({kw: this.$route.query.kw}).then(resp => {
                    if (resp.status != 200)
                        window.console.log(resp.data)
                    //转换图片路径
                    let res = resp.data
                    for (let i = 0, l = res.length; i < l; i++) {
                        res[i].card_img = require('../assets/' + res[i].card_img)
                        res[i].logo_img = require('../assets/' + res[i].logo_img)
                        //这张图有问题，不用
                        if(res[i].id==1)
                            res[i].logo_img=''
                    }
                    this.cards = res
                })
            }
        },
        components: {
            GameCard
        }
    }
</script>

<style scoped>
    .bro-title {
        color: white;
    }

    .browse_content {
        margin-top: 6%;
        margin-bottom: 5%;
    }

    .cards_wrapper {
        margin-top: 2%;
    }

    .filters_wrapper {
        text-align: left;
    }

    .filters_line {
        background-color: #dbdbdb;
        height: 1px;
        border: none;


    }

    .filters_list {
        font-size: 13px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        color: #bcbcbc;
    }

    .filters_item {
        background-color: transparent;
    }
</style>