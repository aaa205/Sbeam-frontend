<template>
  <div>
    <b-container>
      <!-- <b-carousel>
                <b-carousel-slide
                        caption="First slide"
                        img-src="https://picsum.photos/1024/480/?image=10"
                        content-visible-up="sm"
                ></b-carousel-slide>
      </b-carousel>-->

      <!-- 轮播图 -->
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" :src="imgSrc[0]" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" :src="imgSrc[1]" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" :src="imgSrc[2]" alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!--新发布游戏-->
      <b-row>
        <b-col>
          <h6 class="row-title text-left">新发布游戏</h6>
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
        ></game-card>
      </b-row>
      <!--每周免费游戏-->
      <b-row>
        <b-col>
          <h6 class="row-title text-left">每周免费游戏</h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <big-game-card></big-game-card>
        </b-col>
        <b-col>
          <big-game-card></big-game-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard";
import BigGameCard from "@/components/BigGameCard";
export default {
  name: "HomeContent",
  components: { GameCard, BigGameCard },
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "Shenmue 3",
          price: 59,
          imgSrc:
            "https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640",
          subtitle: "subtitle"
        },
        {
          id: 2,
          name: "Shenmue 3",
          price: 59,
          imgSrc:
            "https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640",
          subtitle: "subtitle"
        },
        {
          id: 3,
          name: "Shenmue 3",
          price: 59,
          imgSrc:
            "https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640",
          subtitle: "subtitle"
        },
        {
          id: 4,
          name: "Shenmue 3",
          price: 59,
          imgSrc:
            "https://cdn1-epicgames-1251447533.file.myqcloud.com/undefined/offer/Shenmue3_portraitpromo-1280x1420-1e524e5b26f65dfb4dcd44d3a7821419.jpg?h=854&resize=1&w=640",
          subtitle: "subtitle"
        }
      ],
      imgSrc: [
        require("../assets/img/game-logo/Metro Exodus.png"),
        require("../assets/img/game-logo/Borderlands 3.png"),
        require("../assets/img/game-logo/Fortnite.png")
      ]
    };
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