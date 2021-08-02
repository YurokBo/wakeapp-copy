<template>
  <section class="AwardsPage">
    <CommonSlider :options="options" :slider="slider" :titleH2="titleH2"/>
  </section>
</template>

<script>
import CommonSlider from "@/components/CommonSlider";

export default {
  name: "AwardsPage",
  components: {CommonSlider},

  data() {
    return {
      titleH2: "Awards",
      options: {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 16,
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
          img: "volume-ranking.png",
          title: "AppsFlyer - Growth Index",
          text: "Performance of the top 150 media sources in H2 2019 vs. H1 2020. The comparison was calculated by combining a number of factors: install growth, number of apps growth, and growth in share of the app install pie — on a global or regional level.",
          name: "",
          position: "",
        },
        {
          img: "affieawards.png",
          title: "EFFIE Award",
          text: "The most prestigious award in marketing, which is awarded for effectiveness in the field of advertising and marketing communications. Wakeapp - is the traffic source that brought the win to STOLOTO in the Effie Award. ",
          name: "",
          position: "",
        },
        {
          img: "volume-ranking.png",
          title: "AppsFlyer - Volume ranking",
          text: "A ranking of media sources based on the total number of non-fraudulent installs each was attributed for, and, to a lesser degree the number of apps running on the platform.",
          name: "",
          position: "",
        },
        {
          img: "volume-ranking.png",
          title: "AppsFlyer - Power Ranking",
          text: "Combined number of non-fraudulent installs, the number of apps running with each media source, and the weighted retention score.",
          name: "",
          position: "",
        },
        {
          img: "volume-ranking.png",
          title: "AppsFlyer - Growth Index",
          text: "Performance of the top 150 media sources in H2 2019 vs. H1 2020. The comparison was calculated by combining a number of factors: install growth, number of apps growth, and growth in share of the app install pie — on a global or regional level.",
          name: "",
          position: "",
        },
        {
          img: "affieawards.png",
          title: "EFFIE Award",
          text: "The most prestigious award in marketing, which is awarded for effectiveness in the field of advertising and marketing communications. Wakeapp - is the traffic source that brought the win to STOLOTO in the Effie Award. ",
          name: "",
          position: "",
        },
        {
          img: "volume-ranking.png",
          title: "AppsFlyer - Volume ranking",
          text: "A ranking of media sources based on the total number of non-fraudulent installs each was attributed for, and, to a lesser degree the number of apps running on the platform.",
          name: "",
          position: "",
        },
        {
          img: "volume-ranking.png",
          title: "AppsFlyer - Power Ranking",
          text: "Combined number of non-fraudulent installs, the number of apps running with each media source, and the weighted retention score.",
          name: "",
          position: "",
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.AwardsPage {
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
</style>