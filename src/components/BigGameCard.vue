<template>
    <div>
        <a href="#">
            <b-img-lazy class="big-card-img"
                        src="https://cdn1.epicgames.com/undefined/offer/EGS_PLAUSIBLE_CONCEPT_BAD_NORTH_G1_DESCRIPTION-2560x1440-6a9c3b1a0ada38c498fa3b93a28b5d1f.jpg?h=480&resize=1&w=854">
            </b-img-lazy>
            <div class="status-bar text-center"><span class="card-title">现在免费</span></div>
            <div class="text-left">
                <span class="card-title">AAA</span><br>
                <span class="card-subtitle">description</span>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "BigGameCard",
        props:{
            imgSrc:String,
            href:String,
            title:String,
            subtitle:String
        }
    }
</script>

<style scoped>
    .status-bar {
        background: #0078f2;
    }

    .big-card-img {
        border-style: none;
        border-width: 0;
        max-height: 100%;
        max-width: 100%;
    }

</style>