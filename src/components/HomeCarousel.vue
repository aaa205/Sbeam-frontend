<template>
  <div class="sb-carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      controls
      background="#000"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide :img-src="imgSrc[0]" class="sb-carousel-size"></b-carousel-slide>
      <b-carousel-slide :img-src="imgSrc[1]" class="sb-carousel-size"></b-carousel-slide>
      <b-carousel-slide :img-src="imgSrc[2]" class="sb-carousel-size"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: [
        require("../assets/img/game-detail/Red Dead Redemption 2-2.jpg"),
        require("../assets/img/game-detail/Fortnite-0.jpg"),
        require("../assets/img/game-detail/The Outer Worlds-0.jpg")
      ]
    };
  },
  name: "HomeCarousel"
};
</script>

<style>
.sb-carousel {
  margin: 20px 0;
}
@media screen and (min-width: 480px) {
  .sb-carousel-size {
    height: 100px;
    
  }
}
@media screen and (min-width: 768px) {
  .sb-carousel-size {
    height: 200px;
    
  }
}
@media screen and (min-width: 992px) {
  .sb-carousel-size {
    height: 300px;
    
  }
}
@media screen and (min-width: 1200px) {
  .sb-carousel-size {
    height: 400px;
    
  }
}
</style>