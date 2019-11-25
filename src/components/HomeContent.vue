<template>
    <div>
        <b-container>
            <b-carousel>
                <b-carousel-slide
                        caption="First slide"
                        img-src="https://picsum.photos/1024/480/?image=10"
                        content-visible-up="md"
                ></b-carousel-slide>
            </b-carousel>
        </b-container>
        <b-row>
            <game-card
                    v-for="card in cards"
                    v-bind:key="card.id"
                    v-bind:name="card.name"
                    v-bind:img-src="card.imgSrc"
                    v-bind:price="card.price"
            ></game-card>
        </b-row>
    </div>

</template>

<script>
    import GameCard from "@/components/GameCard";

    export default {
        name: "HomeContent",
        components: {GameCard},
        data() {
            return {
                cards: [
                    {
                        id: 1,
                        name: 'Shenmu3',
                        price: 59,
                        imgSrc: 'https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>