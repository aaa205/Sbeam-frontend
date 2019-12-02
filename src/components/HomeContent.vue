<template>
    <div>
        <b-container>
            <b-carousel>
                <b-carousel-slide
                        caption="First slide"
                        img-src="https://picsum.photos/1024/480/?image=10"
                        content-visible-up="sm"
                ></b-carousel-slide>
            </b-carousel>
            <!--新发布游戏-->
            <b-row>
                <b-col>
                    <h6 class="row_title text-left">新发布游戏</h6>
                </b-col>
            </b-row>
            <b-row>
                <game-card
                        v-for="card in cards"
                        v-bind:key="card.id"
                        v-bind:name="card.name"
                        v-bind:img-src="card.imgSrc"
                        v-bind:price="card.price"
                        v-bind:subtitle="card.subtitle"
                        v-bind:logo-src="card.logoSrc"
                ></game-card>
            </b-row>
            <!--每周免费游戏-->
            <b-row>
                <b-col><h6 class="row_title text-left">每周免费游戏</h6></b-col>
            </b-row>
            <b-row>
                <big-game-card></big-game-card>
                <big-game-card></big-game-card>
            </b-row>
            <!--大图推荐-->

            <!--热门分类-->
            <b-row>
                <b-col class="row_title text-left">热门分类</b-col>
            </b-row>
            <b-row>

            </b-row>
            <!--商城目录-->
            <!--网页底-->
        </b-container>
    </div>

</template>

<script>
    import GameCard from "@/components/GameCard";
    import BigGameCard from "@/components/BigGameCard";
    export default {
        name: "HomeContent",
        components: {GameCard, BigGameCard},
        data() {
            return {
                carousel: null,
                cards: [
                    {
                        id: 1,
                        name: 'Shenmue 3',
                        price: 59,
                        imgSrc: require('../assets/img/game-card/Shenmue 3.jpg'),
                        subtitle: 'subtitle',
                        logoSrc: require('../assets/img/game-logo/Shenmue 3.png')
                    },
                    {
                        id: 2,
                        name: 'Fortnite',
                        price: 59,
                        imgSrc: require('../assets/img/game-card/Fortnite.jpg'),
                        subtitle: 'subtitle',
                        logoSrc: require('../assets/img/game-logo/Fortnite.png')
                    },
                    {
                        id: 3,
                        name: 'Shenmue 3',
                        price: 59,
                        imgSrc: 'https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640',
                        subtitle: 'subtitle',
                        logoSrc: require('../assets/img/game-logo/Borderlands 3.png')
                    },
                    {
                        id: 4,
                        name: 'Shenmue 3',
                        price: 59,
                        imgSrc: 'https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640',
                        subtitle: 'subtitle',
                        logoSrc: require('../assets/img/game-logo/Rainbow Six Siege.png')
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>