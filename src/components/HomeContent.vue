<template>
  <div>
    <b-container>
      <home-carousel></home-carousel>
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
          <games-jumbotron></games-jumbotron>
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
  components: {
    GameCard,
    BigGameCard,
    ClassificationBar,
    GamesJumbotron,
    HomeCarousel
  },
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
    };
</script>

<style scoped>
    .row-title {
        color: white;
        font-size: 1.17em;
        margin-top: 3%;
    }
</style>