<template>
  <div>
    <b-container>
      <home-carousel></home-carousel>
      <!-- <b-carousel>
                <b-carousel-slide
                        caption="First slide"
                        img-src="https://picsum.photos/1024/480/?image=10"
                        content-visible-up="sm"
                ></b-carousel-slide>
      </b-carousel>-->

      <!-- 轮播图 -->
      <!-- <div class="sb-carousel">
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
      </div> -->

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
          <big-game-card class="sb-game-card">
            <img src alt />
          </big-game-card>
        </b-col>
        <b-col>
          <big-game-card class="sb-game-card">
            <img src alt />
          </big-game-card>
        </b-col>
      </b-row>
      <!-- 预购（巨幕） -->
      <b-row>
        <b-col>
          <h6 class="row-title text-left">预购</h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <games-jumbotron></games-jumbotron>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- 热门分类 -->
      <b-row>
        <b-col>
          <h6 class="row-title text-left">热门分类</h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <classification-bar></classification-bar>
        </b-col>
      </b-row>

      <!-- Games -->
      <b-row>
        <b-col>
          <h6 class="row-title text-left">Games</h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <games-jumbotron></games-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard";
import BigGameCard from "@/components/BigGameCard";
import ClassificationBar from "@/components/ClassificationBar";
import GamesJumbotron from "@/components/GamesJumbotron";
import HomeCarousel from "@/components/HomeCarousel";
export default {
  name: "HomeContent",
  components: { GameCard, BigGameCard, ClassificationBar, GamesJumbotron, HomeCarousel },
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
      ],
      bgSrc: [require("../assets/img/game-logo/Fortnite.png")],
      classificationSrc: ["#"],
      classificationText: ["动作", "角色扮演", "射击", "战略", "解密", "体育"]
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