<template>
  <section class="ClientsPage">
    <CommonSlider
        :options="options"
        :slider="slider"
        :titleH2="titleH2"
        :boxWidth="boxWidth"
    />
  </section>
</template>

<script>
import CommonSlider from "@/components/CommonSlider";

export default {
  name: "ClientsPage",
  components: {CommonSlider},
  data() {
    return {
      boxWidth: "CommonSwiper-Box--width",
      titleH2: "Our clients about us",
      options: {
        loop: true,
        slidesPerView: 4,
        spaceBetween: -170,
        pagination: {
          el: '.CommonSwiper-SlideProgressBar',
          type: 'progressbar',
          progressbarFillClass: "Progress--fill"
        },
        navigation: {
          nextEl: '.CommonSwiper-ButtonNext',
          prevEl: '.CommonSwiper-ButtonPrev'
        }
      },
      slider: [
        {
          img: "delimobile.png",
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          name: "Donald Tramp",
          position: "Position",
        },
        {
          img: "perekrestok.png",
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          name: "Donald Tramp",
          position: "Position",
        },
        {
          img: "okko.png",
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          name: "Donald Tramp",
          position: "Position",
        },
        {
          img: "binomo.png",
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          name: "Donald Tramp",
          position: "Position",
        },
        {
          img: "delimobile.png",
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          name: "Donald Tramp",
          position: "Position",
        },
        {
          img: "perekrestok.png",
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          name: "Donald Tramp",
          position: "Position",
        },
        {
          img: "okko.png",
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          name: "Donald Tramp",
          position: "Position",
        },
        {
          img: "binomo.png",
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          name: "Donald Tramp",
          position: "Position",
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.ClientsPage {
  //height: 100vh;
  padding: 148px 0 136px;
  //position: relative;
  background-color: var(--color-body1);
  background-image: url(~@/assets/images/bg.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right 206px bottom;

  @media (min-height: 900px) {
    height: 100vh;
  }
}

.CommonSwiper-Box--width {
  width: 100%;
}
</style>