<template>
    <div class="browse_content">
        <b-container>
            <b-row>
                <b-col md="9">
                    <!--游戏数-->
                    <b-row>
                        <b-col><h6 class="text-left">{{total}} 款游戏</h6></b-col>
                    </b-row>
                    <!--游戏展示-->
                    <b-row class="cards_wrapper">
                        <game-card
                                v-for="card in cards"
                                v-bind:key="card.id"
                                v-bind:name="card.name"
                                v-bind:img-src="card.imgSrc"
                                v-bind:price="card.price"
                                v-bind:subtitle="card.subtitle"
                        ></game-card>
                    </b-row>
                </b-col>
                <!--筛选器-->
                <b-col md="3">
                    <div class="filters_wrapper">
                        <header>
                            <h6>筛选器</h6>
                            <hr class="filters_line"/>
                        </header>
                        <!--TAG-->
                        <b-button v-b-toggle.collapse-0>
                            分类
                        </b-button>
                        <b-collapse id="collapse-0">
                            <b-list-group flush="true" class="filters_list">
                                <b-list-group-item class="filters_item"><a href="#">动作</a></b-list-group-item>
                                <b-list-group-item class="filters_item"><a href="#">冒险</a></b-list-group-item>
                                <b-list-group-item class="filters_item"><a href="#">编辑器</a></b-list-group-item>
                                <b-list-group-item class="filters_item"><a href="#">解密</a></b-list-group-item>
                                <b-list-group-item class="filters_item"><a href="#">角色扮演</a></b-list-group-item>
                                <b-list-group-item class="filters_item"><a href="#">设计</a></b-list-group-item>
                            </b-list-group>
                        </b-collapse>
                        <hr class="filters_line"/>
                        <!--特色-->
                        <b-button v-b-toggle.collapse-1>
                            特色
                        </b-button>
                        <b-collapse id="collapse-1">
                            <b-list-group flush="true" class="filters_list">
                                <b-list-group-item class="filters_item"><a href="#">单人游戏</a></b-list-group-item>
                                <b-list-group-item class="filters_item"><a href="#">多人游戏</a></b-list-group-item>
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

    export default {
        name: "BrowseContent",
        data() {
            return {
                selected: null,
                total: 0,
                cards: [
                    {
                        id: 1,
                        name: 'Shenmue 3',
                        price: 59,
                        imgSrc: require('../assets/img/game-card/Shenmue 3.jpg'),
                        subtitle: 'subtitle'
                    },
                    {
                        id: 2,
                        name: 'Fortnite',
                        price: 59,
                        imgSrc: require('../assets/img/game-card/Fortnite.jpg'),
                        subtitle: 'subtitle'
                    },
                    {
                        id: 3,
                        name: 'Shenmue 3',
                        price: 59,
                        imgSrc: 'https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640',
                        subtitle: 'subtitle'
                    },
                    {
                        id: 4,
                        name: 'Shenmue 3',
                        price: 59,
                        imgSrc: 'https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640',
                        subtitle: 'subtitle'
                    }
                ]
            }
        },
        components: {
            GameCard
        }
    }
</script>

<style scoped>
    h6 {
        color: ghostwhite;
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