<template>
  <section class="HomePage">
    <HomeSlider :options="options" :slider="slider"/>
  </section>
</template>

<script>
import HomeSlider from "@/components/HomeSlider";

export default {
  name: "HomePage",
  components: {HomeSlider},
  data() {
    return {
      options: {
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        /*scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },*/
        pagination: {
          el: '.HomeSwiper-SlidePagination',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass, i, total) {
            return '<span class="' + 'HomeSwiper-SlidePaginationCurrent' + '">'+ i +' </span>' +
                ' / ' +
                '<span class="' + 'HomeSwiper-SlidePaginationTotal' + '">'+ total +' </span>';
          },
          currentClass: 'HomeSwiper-SlidePaginationCurrent',
          totalClass: 'HomeSwiper-SlidePaginationTotal',
          formatFractionCurrent: function(number) {
            if (number < 10) {
              number = '0' + number;
            }
            return number;
          },
          formatFractionTotal: function(number) {
            if (number < 10) {
              number = '0' + number;
            }
            return number;
          },
        },
        navigation: {
          nextEl: '.HomeSwiper-ButtonNext',
          prevEl: '.HomeSwiper-ButtonPrev'
        }
      },
      slider: [
        {
          sub: "We are",
          title: "WakeApp",
          text: "an international performance agency working only with high-quality traffic",
          img: require("@/assets/images/home-bg-1.png")
        },
        {
          sub: "More than",
          title: "1 billion impressions",
          text: "in the WakeApp in-app network",
          img: require("@/assets/images/home-bg-2.png")
        },
        {
          sub: "We do not only work with advertising platforms",
          title: "We create advertising platforms",
          text: "Learn more about wake up networking.",
          img: require("@/assets/images/home-bg-3.png")
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.HomePage {
  height: 100vh;
  background-color: var(--color-body1);
  @media (min-height: 900px) {
    height: 100vh;
  }
}
</style>