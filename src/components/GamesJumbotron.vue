<template>
  <div class="sb-jumbotron sb-bgc-grey">
    <b-jumbotron
      :style="{background: 'url( '+ jumbotronData.bgImgSrc +')'+'no-repeat right', 'background-size': 'auto 100%'}"
      class="sb-jb-bg"
      :header="jumbotronData.header"
      :lead="jumbotronData.lead"
    >
      <p></p>
      <b-button href="#">{{jumbotronData.btnText}}</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "GamesJumbotron",
  props: {
    jumbotronData: Object
  }
};
</script>
<style>
.sb-jumbotron {
  text-align: left;
  color: white;
}
@media screen and (min-width: 480px) {
  .sb-jb-bg {
    height: 380px;
    line-height: 4em;
    background-size: auto 100%;
  }
}

@media screen and (min-width: 768px) {
  .sb-jb-bg {
    height: 450px;
    line-height: 7em;
    background-size: auto 100%;
  }
}

@media screen and (min-width: 992px) {
  .sb-jb-bg {
    height: 450px;
    line-height: 7em;
    background-size: auto 100%;
  }
}

@media screen and (min-width: 1200px) {
  .sb-jb-bg {
    height: 450px;
    line-height: 7em;
    background-size: auto 100%;
  }
}
</style>