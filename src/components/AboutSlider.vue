<template>
  <div class="AboutSlider-Box">
    <swiper :options="options" class="AboutSlider">
      <swiper-slide
          class="AboutSlider-Slide"
      >
        <h2 class="Title Title--h2 Title--center AboutSlider-Title">
          {{ slider.slide1.title }}
        </h2>
        <div class="AboutSlider-SlideContent">
          <BaseTabs
              class="AboutSlider-Tab"
              :items="tabs"
              :current-item="activeItem"
              @choose-tab="onChooseTab"
          />
          <div class="AboutSlider-SlideItem"
               v-for="(item, i) in slider.slide1.items[activeItem].items"
               :key="i"
          >
            <div class="Bg"></div>
            <div class="AboutSlider-SlideItemTitle">
              {{ item.title }}
            </div>
            <p class="AboutSlider-SlideItemText">
              {{ item.text }}
            </p>
            <div class="AboutSlider-SlideItemIcons">
              <img v-for="(icon, index) in item.icons"
                   :key="index"
                   :src="require(`@/assets/images/${icon}`)"
                   alt="icon"
                   class="AboutSlider-SlideItemIcon"
              >
            </div>
            <div class="AboutSlider-SlideItemList">
              <div class="AboutSlider-SlideItemItem"
                   v-for="(item, index) in item.items"
                   :key="index"
              >
                <div class="AboutSlider-SlideItemItemTitle">{{ item.title }}</div>
                <div class="AboutSlider-SlideItemItemContent">
                  <img :src="require(`@/assets/images/${item.icon}`)"
                       alt="icon"
                       class="AboutSlider-SlideItemItemContentIcon">
                  <div class="AboutSlider-SlideItemItemContentDigit">
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
          class="AboutSlider-Slide"
      >
        <h2 class="Title Title--h2 Title--center AboutSlider-Title">
          {{ slider.slide2.title }}
        </h2>
        <div class="AboutSlider-SlideContent">
          <div class="AboutSlider-SlideContentList">
            <div class="AboutSlider-SlideItemItem"
                 v-for="(item, i) in slider.slide2.items.items"
                 :key="i"
            >
              <div class="AboutSlider-SlideItemItemTitle">{{ item.title }}</div>
              <div class="AboutSlider-SlideItemItemContent">
                <img :src="require(`@/assets/images/${item.icon}`)"
                     alt="icon"
                     class="AboutSlider-SlideItemItemContentIcon">
                <div class="AboutSlider-SlideItemItemContentDigit">
                  {{ item.text }}
                </div>
              </div>
            </div>
            <ul class="AboutSlider-SlideContentUl">
              <li class="AboutSlider-SlideContentLi"
                  v-for="(item, i) in slider.slide2.items.text"
                  :key="i"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="AboutSlider-SlideContentBox">
            <swiper
                :options="sliderInner"
                class="AboutSlider-SlideContentSlider">
              <swiper-slide class="AboutSlider-SlideContentSlide"
                            v-for="(img, i) in slider.slide2.img"
                            :key="i"
              >
                <img :src="require(`@/assets/images/${img}`)" alt="image" class="AboutSlider-SlideContentSlideImg">
              </swiper-slide>
            </swiper>
            <div class="AboutSlider-Button AboutSlider-ButtonInnerPrev" slot="button-prev">
              <img src="@/assets/images/arrow-prev.svg" alt="arrow">
            </div>
            <div class="AboutSlider-Button AboutSlider-ButtonInnerNext" slot="button-next">
              <img src="@/assets/images/arrow-next.svg" alt="arrow">
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="AboutSlider-Button AboutSlider-ButtonPrev" slot="button-prev">
      <img src="@/assets/images/arrow-prev-big.svg" alt="arrow">
    </div>
    <div class="AboutSlider-Button AboutSlider-ButtonNext" slot="button-next">
      <img src="@/assets/images/arrow-next-big.svg" alt="arrow">
    </div>
  </div>
</template>

<script>
import BaseTabs from "@/components/BaseTabs";

export default {
  name: "AboutSlider",
  components: {BaseTabs},
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
      activeItem: 'wakeAppNetwork',
      tabsSectionIsActive: true,
      sliderInner: {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.AboutSlider-ButtonInnerNext',
          prevEl: '.AboutSlider-ButtonInnerPrev',
        }
      }
    }
  },
  computed: {
    tabs() {
      return Object.entries(this.slider.slide1.items).map(item => (
          {
            name: item[1].title,
            value: item[0],
          }
      ));
    },
  },
  methods: {
    onChooseTab(e) {
      this.activeItem = e;
      this.tabsSectionIsActive = false;
    },
  },
}
</script>

<style lang="scss">
.AboutSlider-Box {
  max-width: 1326px;
  //max-width: 1086px;
  width: 100%;
  //margin: 0 auto;
  padding: 0 120px;
  /*position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);*/
}

.AboutSlider {

  &-Title {
    margin-bottom: 105px;
  }

  &-SlideContent {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-SlideItem {
    width: 376px;
    //width: 100%;
    padding: 32px 26px 10px 38px;
    background: linear-gradient(178.99deg, rgba(255, 255, 255, 0.08) -14.63%, rgba(255, 255, 255, 0) 99.24%);
    backdrop-filter: blur(11.4786px);
    border-radius: 10px;
    font-weight: 300;
    letter-spacing: 0.05em;
  }

  &-SlideItemTitle {
    margin-bottom: 26px;
    font-size: 27px;
  }

  &-SlideItemText {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1.33;
  }

  &-SlideItemIcons {
    display: flex;
    align-items: center;
    margin-bottom: 45px;
  }

  &-SlideItemIcon {
    margin-right: 21px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-SlideItemList {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &-SlideItemItem {
    margin: 0 16px 16px 0;
    padding: 9px 14px;
    border: 1px solid;
    border-image-source: radial-gradient(101.8% 83.78% at 100.41% 96.34%, rgba(255, 255, 255, 0.2) 0%, rgba(54, 20, 126, 0.75) 100%),
    radial-gradient(112.59% 77.66% at -46.11% -22.08%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%);
    border-radius: 10px;
  }

  &-SlideItemItemTitle {
    margin-bottom: 3px;
    font-size: 14px;
  }

  &-SlideItemItemContent {
    display: flex;
    align-items: center;
  }

  &-SlideItemItemContentIcon {
    margin-right: 14px;
  }

  &-SlideItemItemContentDigit {
    font-size: 28px;
  }

  &-Button {
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    z-index: 1;
  }

  &-ButtonPrev {
    left: 0;
  }

  &-ButtonNext {
    right: 0;
  }

  &-Button--disabled {
    opacity: 0;
  }

  &-SlideContentList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 408px;
    margin-right: 72px;
    padding: 60px 0 0 130px;
  }

  &-SlideContentBox {
    width: 350px;
    position: relative;
  }

  &-SlideContentUl {
    margin-top: 29px;
    padding-left: 20px;
  }

  &-SlideContentLi {
    margin-bottom: 34px;
    list-style-type: disc;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-ButtonInnerPrev {
    left: 0;
  }

  &-ButtonInnerNext {
    right: 0;
  }

}


</style>