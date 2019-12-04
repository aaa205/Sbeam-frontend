<template>
    <div>
        <b-container>
            <home-carousel></home-carousel>
            <!--新发布游戏-->
            <b-row>
                <b-col>
                    <h6 class="row-title text-left">新发布游戏</h6>
                </b-col>
            </b-row>
            <b-row>
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
            <!--每周免费游戏-->
            <b-row>
                <b-col>
                    <h6 class="row-title text-left">每周免费游戏</h6>
                </b-col>
            </b-row>
            <b-row>
                <big-game-card class="sb-game-card">
                    <img src alt/>
                </big-game-card>
                <big-game-card class="sb-game-card">
                    <img src alt/>
                </big-game-card>
            </b-row>
            <!-- 预购（巨幕） -->
            <b-row>
                <b-col>
                    <h6 class="row-title text-left">预购</h6>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col>
                            <games-jumbotron></games-jumbotron>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <!-- 热门分类 -->
            <b-row>
                <b-col>
                    <h6 class="row-title text-left">热门分类</h6>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <classification-bar></classification-bar>
                </b-col>
            </b-row>

            <!-- Games -->
            <b-row>
                <b-col>
                    <h6 class="row-title text-left">Games</h6>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <games-jumbotron></games-jumbotron>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import GameCard from "@/components/GameCard";
    import BigGameCard from "@/components/BigGameCard";
    import ClassificationBar from "@/components/ClassificationBar";
    import GamesJumbotron from "@/components/GamesJumbotron";
    import HomeCarousel from "@/components/HomeCarousel";
    import {getIndex} from "@/apis/api";

    export default {
        name: "HomeContent",
        components: {GameCard, BigGameCard, ClassificationBar, GamesJumbotron, HomeCarousel},
        data() {
            return {
                cards: [],
                imgSrc: [
                    require("../assets/img/game-logo/Metro Exodus.png"),
                    require("../assets/img/game-logo/Borderlands 3.png"),
                    require("../assets/img/game-logo/Fortnite.png")
                ],
                bgSrc: [require("../assets/img/game-logo/Fortnite.png")],
                classificationSrc: ["#"],
                classificationText: ["动作", "角色扮演", "射击", "战略", "解密", "体育"]
            };
        },
        mounted(){
          this.getIndexData()
        },
        methods: {
            getIndexData() {
                getIndex().then(resp => {
                    if (resp.status != 200)
                        window.console.log(resp.data)
                    //转换图片路径
                    let res = resp.data
                    for (let i = 0, l = res.length; i < l; i++) {
                        res[i].card_img = require('../assets/' + res[i].card_img)
                        res[i].logo_img = require('../assets/' + res[i].logo_img)
                    }
                    res[0].logo_img = ''//id:1游戏的logo图是黑底，不放了
                    this.cards = res
                })
            }
        }
    };
</script>

<style scoped>
    .row-title {
        color: white;
        font-size: 1.17em;
        margin-top: 3%;
    }
</style>