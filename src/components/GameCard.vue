<template>
    <div class="col ">
        <b-img-lazy v-bind:src="imgSrc" class="cardimg"></b-img-lazy>
        <h5>{{name}}</h5>
        <h5>US${{price}}</h5>
    </div>
</template>

<script>
    export default {
        name: "GameCard",
        props: {
            id: Number,
            name: String,
            price: Number,
            imgSrc: String
        }
    }
</script>

<style scoped>
    h5 {
        color: white;
    }
    .cardimg{
        height: 60%;
        width: 40%;
    }
</style>