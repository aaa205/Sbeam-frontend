<template>
    <div class="col-md-3 col-sm-6 card-content text-left">
        <a href="#">
            <div>
                <b-img-lazy v-bind:src="imgSrc" class="cardImg"></b-img-lazy>
            </div>
            <div class="text-left info_box">
                <span class="card_title">{{name}}</span>
                <span class="card_subtitle">{{developer}} | {{publisher}}</span>
                <span class="card_price">US${{price}}</span>
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
            logoSrc: String,
            publisher: String,
            developer: String
        }
    }
</script>

<style scoped>
    .card-content {
        color: white;
        font-size: .88rem;
        margin-bottom: 2%;
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
    .info_box{
        margin-top: 3%;
        margin-bottom: 6%;
    }

</style>