<template>
  <div>
    <!-- 分类 -->
    <!-- "动作", "角色扮演", "射击", "战略", "解密", "体育" -->
    <b-row>
      <b-col sm="6" md="4" lg="2" class="sb-less-colpadding">
        <a href="#">
          <div class="sb-classification-item sb-class-lg sb-bgc-orange">动作</div>
        </a>
      </b-col>
      <b-col sm="6" md="4" lg="2" class="sb-less-colpadding">
        <a href="#">
          <div class="sb-classification-item sb-class-lg sb-bgc-pink">角色扮演</div>
        </a>
      </b-col>
      <b-col sm="6" md="4" lg="2" class="sb-less-colpadding">
        <a href="#">
          <div class="sb-classification-item sb-class-lg sb-bgc-purple">射击</div>
        </a>
      </b-col>
      <b-col sm="6" md="4" lg="2" class="sb-less-colpadding">
        <a href="#">
          <div class="sb-classification-item sb-class-lg sb-bgc-red">战略</div>
        </a>
      </b-col>
      <b-col sm="6" md="4" lg="2" class="sb-less-colpadding">
        <a href="#">
          <div class="sb-classification-item sb-class-lg sb-bgc-lightblue">解密</div>
        </a>
      </b-col>
      <b-col sm="6" md="4" lg="2" class="sb-less-colpadding">
        <a href="#">
          <div class="sb-classification-item sb-class-lg sb-bgc-lightgreen">体育</div>
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ClassificationBar",
  props: {
    bgSrc: String,
    classificationSrc: String
  }
};
</script>

<style scoped>
.sb-classification-item {
  width: 100%;
}
.sb-class-lg {
  border: 3px #121212 solid;
}
.sb-less-colpadding {
    padding: 2px;
}
@media screen and (min-width: 480px) {
  .sb-carousel-size {
    height: 300px;
  }
  .sb-class-lg {
    line-height: 4em;
  }
}
@media screen and (min-width: 768px) {
  .sb-carousel-size {
    height: 400px;
  }
  .sb-class-lg {
    line-height: 6em;
  }
}
@media screen and (min-width: 992px) {
  .sb-carousel-size {
    height: 500px;
  }
  .sb-class-lg {
    line-height: 8em;
  }
}
@media screen and (min-width: 1200px) {
  .sb-carousel-size {
    height: 600px;
  }
  .sb-class-lg {
    line-height: 10em;
  }
}
</style>