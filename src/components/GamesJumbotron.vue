<template>
  <div class="sb-jumbotron sb-bgc-grey">
    <b-jumbotron class="sb-jb-bg1" header="《Fortnite》" lead="探索诡异、狂野、古怪而又离奇的《Fortnite》世界。">
      <p></p>
      <b-button href="#">立即预购</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "GamesJumbotron",
  props: {
    bgSrc: String
  }
};
</script>

<style>
.sb-jumbotron {
  text-align: left;
  color: white;
}
.sb-jb-bg1 {
  background: url("https://cdn2.unrealengine.com/Diesel%2Fstore%2FEG_Store_BrowseAll_Breaker_580x433-580x433-ac4c6fdf4254128f5d8a4ce9ad7e000191814e5a.png") no-repeat right;
  background-size: auto 100%;
}
</style>