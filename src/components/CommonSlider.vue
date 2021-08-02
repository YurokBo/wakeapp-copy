<template>
  <div class="CommonSwiper-Box"
       :class="boxWidth"
  >
    <h2 class="Title Title--h2 Title--center CommonSwiper-Title">
      {{ titleH2 }}
    </h2>
    <swiper :options="options" class="CommonSwiper">
      <!-- Parallax background element -->
      <swiper-slide
          class="CommonSwiper-Slide"
          v-for="(item, index) in slider"
          :key="index"
      >
        <div class="CommonSwiper-SlideContent" >
          <div class="CommonSwiper-SlideInner">
            <img :src="require(`@/assets/images/${item.img}`)" alt="img" class="CommonSwiper-SlideImg">
            <div class="CommonSwiper-SlideTitle">{{ item.title }}</div>
            <p class="CommonSwiper-SlideText">{{ item.text }}</p>
            <div class="CommonSwiper-SlideName">{{ item.name }}</div>
            <div class="CommonSwiper-SlidePosition">{{ item.position }}</div>
          </div>
          <div class="Bg"></div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="Buttons CommonSwiper-Buttons">
      <div class="ButtonPrev CommonSwiper-ButtonPrev" slot="button-prev">
        <img src="@/assets/images/arrow-prev.svg" alt="arrow">
      </div>
      <div class="ProgressBar CommonSwiper-SlideProgressBar">
        <!--        <div class="Progress CommonSwiper-SlideProgress"></div>-->
      </div>
      <div class="ButtonNext CommonSwiper-ButtonNext" slot="button-next">
        <img src="@/assets/images/arrow-next.svg" alt="arrow">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonSlider",
  props: {
    slider: {
      type: [Array, Object],
      required: false,
      default: () => {
      },
    },
    options: {
      type: [Array, Object],
      required: false,
      default: () => {
      },
    },
    titleH2: {
      type: String,
      required: false,
      default: ""
    },
    boxWidth: {
      type: String,
      required: false,
      default: ""
    }
  },
}
</script>

<style lang="scss">
.CommonSwiper-Box {
  width: 1232px;
  margin: 0 auto;
  position: relative;
}

.CommonSwiper-Title {
  margin-bottom: 60px;
}

.CommonSwiper {
  position: relative;

  &-Slide {

  }

  &-SlideContent {
    width: 296px;
    //height: 537px;
    height: 499px;
    overflow-y: scroll;
    background: linear-gradient(125.86deg, rgba(255, 255, 255, 0.76) -267.85%, rgba(255, 255, 255, 0) 138.29%);
    filter: drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.15));
    border-radius: 10px;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, .15);
    border: 1px solid radial-gradient(112.59% 77.66% at -46.11% -22.08%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%);
    border-image-source: radial-gradient(101.8% 83.78% at 100.41% 96.34%, rgba(255, 255, 255, 0.2) 0%, rgba(54, 20, 126, 0.75) 100%);

    opacity: 0.3;
  }

  &-SlideInner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 31px 21px 34px;
  }

  &-SlideImg {
    margin-bottom: 42px;
  }

  &-SlideTitle {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.33;
    letter-spacing: 0.05em;
  }

  &-SlideText {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.33;
  }

  &-SlideName {
    margin: 18px 0 3px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.33;
    opacity: .5;
  }

  &-SlidePosition {
    font-weight: 300;
    font-size: 10px;
    line-height: 1.33;
    opacity: .5;
  }

  &-Buttons {
    top: 107%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .swiper-slide-active, .swiper-slide-next {
    .CommonSwiper-SlideContent {
      height: 537px;
    }
  }

  .swiper-slide-next {
    position: relative;

    .CommonSwiper-SlideContent {
      opacity: 1;
    }

    .Bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(115, 12, 172, 0.4);
      filter: blur(200px);
      mix-blend-mode: normal;
      z-index: -1;
    }
  }
}
</style>