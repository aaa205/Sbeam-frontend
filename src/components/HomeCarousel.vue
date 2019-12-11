<template>
  <div class="sb-carousel">
    <b-carousel id="carousel-1" :interval="10000" controls style="text-shadow: 1px 1px 2px #333;">
      <b-carousel-slide
        v-for="(CarouselItem, index) in CarouselData"
        :key="index"
        :img-src="CarouselItem.imgSrc"
        class="sb-carousel-size"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    CarouselData: Array
  },
  data() {
    return {}
  },
  name: "HomeCarousel"
};
</script>

<style scoped>
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