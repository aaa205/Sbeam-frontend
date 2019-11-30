<template>
    <div class="col-md-3 col-sm-6 card-content text-left">
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
    </div>
</template>

<script>
    export default {
        name: "GameCard",
        props: {
            id: Number,
            name: String,
            price: Number,
            imgSrc: String,
            subtitle: String
        }
    }
</script>

<style scoped>
    .card-content {
        color: white;
        font-size: .88rem;
    }

    h5 {
        color: white;
    }

    .cardImg {
        border-style: none;
        border-width: 0;
        max-height: 100%;
        max-width: 100%;
        background-position: center;
        clip: rect(80px 80px 690px 833px);
    }

</style>