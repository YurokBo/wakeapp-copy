<template>
  <div class="HomeSwiper-Box">
    <swiper :options="options" class="HomeSwiper">
      <swiper-slide
          class="HomeSwiper-Slide"
          v-for="(item, i) in slider"
          :key="i"
          :style="{
            backgroundImage: `url('${item.img}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }"
      >
        <div class="HomeSwiper-SlideContent">
          <div class="HomeSwiper-SlideSub">{{ item.sub }}</div>
          <h2 class="Title Title--h2 HomeSwiper-SlideTitle">{{ item.title }}</h2>
          <p class="HomeSwiper-SlideText">{{ item.text }}</p>
        </div>
<!--        <img :src="item.img" alt="img" class="HomeSwiper-SlideImg">-->
      </swiper-slide>
      <div class="HomeSwiper-SlidePagination" slot="pagination"></div>
      <div class="Buttons HomeSwiper-Buttons">
        <div class="ButtonPrev HomeSwiper-ButtonPrev" slot="button-prev">
          <img src="@/assets/images/arrow-prev.svg" alt="arrow">
        </div>
        <div class="ProgressBar HomeSwiper-SlideProgressBar">
          <div class="Progress Progress--fill HomeSwiper-SlideProgress"></div>
        </div>
        <div class="ButtonNext HomeSwiper-ButtonNext" slot="button-next">
          <img src="@/assets/images/arrow-next.svg" alt="arrow">
        </div>
      </div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: "HomeSlider",
  components: {},
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
  },
  data() {
    return {
      count: 0,
    }
  },
  mounted() {
    let progress = document.querySelector('.Progress')
    let total = document.querySelector('.HomeSwiper-SlidePaginationTotal').innerHTML
    let current = document.querySelector('.HomeSwiper-SlidePaginationCurrent').innerHTML
    this.count = (+current / +total) * 100
    return progress.style.width = `${this.count}` + '%'
  },
  /*methods: {
    checkProgress() {
      let progress = document.querySelector('.progress')
      // let total = document.querySelector('.HomeSwiper-SlidePaginationTotal').innerHTML
      this.current = document.querySelector('.HomeSwiper-SlidePaginationCurrent').innerHTML

      console.log(+this.current)
      // console.log(+total)

      progress.style.width = `${this.count}` + '%'
    }
  }*/
}
</script>

<style lang="scss">

.HomeSwiper-Box {
  height: 100%;
}

.HomeSwiper {
  height: 100%;

  &-Slide {
    //padding: 370px 105px 400px 208px;
    position: relative;
  }

  &-SlideContent {
    position: absolute;
    z-index: 2;
    max-width: 380px;
    width: 100%;
    top: 50%;
    left: 14%;
    transform: translate(0, -50%);
  }

  &-SlideSub {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.25em;
    font-variant: small-caps;
  }

  &-SlideTitle {
    margin-bottom: 43px;
  }

  &-SlideText {
    font-weight: 300;
    font-size: 27px;
    line-height: 1.3;
    letter-spacing: 0.05em;
  }

  &-SlideImg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &-SlidePagination {
    display: flex;
    align-items: flex-start;
    position: absolute;
    z-index: 2;
    bottom: 50%;
    left: 84%;
    font-weight: 500;
    font-size: 20px;
  }

  &-SlidePaginationCurrent {
    margin-right: 16px;
    font-weight: 900;
    font-size: 55px;
    line-height: .85;
  }

  &-SlidePaginationTotal {
    font-variant: small-caps;
  }

  &-Buttons {
    top: 90%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

</style>