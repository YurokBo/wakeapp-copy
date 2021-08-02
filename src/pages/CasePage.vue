<template>
  <section class="CasePage">
    <div class="CasePage-Content">
      <div class="CasePage-TabsBtns">
        <div class="CasePage-TabsBtn"
             v-for="(button, i) in buttons"
             :key="i"
        >
          <input :id="button.type"
                 class="CasePage-TabsInput"
                 type="radio"
                 v-model="selectedCategory" :value="button.type"
                 @click="asideIsOpen = false"
          >
          <label class="CasePage-TabsLabel"
                 :for="button.type">
            {{ button.name }}
          </label>
        </div>
      </div>
      <div class="CasePage-TabsContent">
        <div class="CasePage-TabsContentBox">
          <div class="CasePage-Card"
               v-for="(info,i) in filteredInfo"
               :key="i"
          >
            <img :src="require(`@/assets/images/${info.icon}`)" alt="icon" class="CasePage-CardIcon">
            <div class="CasePage-CardInfo">
              <div class="CasePage-CardTitle">
                {{ info.title }}
              </div>
              <p class="CasePage-CardText">
                {{ info.text }}
              </p>
              <button class="Btn CasePage-CardBtn">
                Go to case
              </button>
            </div>
          </div>
        </div>
      </div>
<!--      <transition name="slide-right">
        &lt;!&ndash;                <AsideCase :asideInfo="info.asideInfo" v-show="asideIsOpen"/>&ndash;&gt;
        <div class="AsideCase" v-show="asideIsOpen">
          <div class="AsideCase-Header">
&lt;!&ndash;            <router-link to="/" class="MainNav-LogoLink">
              &lt;!&ndash;      <img :src="require(`@/assets/images/${logo}`)" alt="logo" class="MainNav-Logo">&ndash;&gt;
            </router-link>&ndash;&gt;
            <button class="AsideCase-BtnClose" @click.prevent="toggleAside">
              <img :src="require(`@/assets/images/${close}`)"
                   alt="burger"
                   class="AsideCase-Close"
              >
            </button>
          </div>
          <div class="CasePage-Card"
               v-for="(info,i) in filteredInfo"
               :key="i"
          >
            <div class="AsideCase-Title">
              {{ info.asideInfo.card.title }}
            </div>
            <p class="AsideCase-Text"> {{ info.asideInfo.card.text }}</p>
          </div>
        </div>
      </transition>-->
    </div>
  </section>
</template>

<script>
import {toggleAside} from "@/utils/script";
//import AsideCase from "@/components/AsideCase";

export default {
  name: "CasePage",
  components: {/*AsideCase*/},
  data() {
    return {
      asideIsOpen: false,
      close: 'close.svg',
      buttons: [
        {name: "CPA", type: "cpa", isActive: true},
        {name: "CPI+KPI", type: "cpi-kpi", isActive: false},
        {name: "CPR", type: "cpr", isActive: false}
      ],
      cardInfo: [
        {
          type: "cpr",
          icon: "dostavista.png",
          title: "Dostavista",
          text: "fast delivery service based on crowdsourcing model. You place an order and the system matches you with the perfect courier nearby.",
          asideInfo: {
              card: {
                icon: "",
                title: "Dostavista",
                text: "fast delivery service based on crowdsourcing model. You place",
              }
            }

        },
         {
           type: "cpa",
           icon: "okko.png",
           title: "Okko",
           text: "it is an online cinema with more than 90,000 films, cartoons, TV series, sports programs and broadcasts. You can watch movies in Okko in Full HD and Ultra HD 4K legally, without ads and even without the Internet.",
           asideInfo: {
             card: {
               icon: "",
               title: "Окко",
               text: "per-minute car rental service with access from 18",
             }
           }
         },
        {
          type: "cpa",
          icon: "perekrestok.png",
          title: "Perekrestok",
          text: "Grocery store with home delivery, office delivery. Delivery of a wide range of groceries more than 50,000 products at great prices. Delivery is carried out not from store shelves, but from equipped warehouses.",
          asideInfo: {
            card: {
              icon: "",
              title: "Окко",
              text: "per-minute car rental service with access from 18",
            }
          }
        },
        {
          type: "cpa",
          icon: "binomo.png",
          title: "Binomo",
          text: " is an online trading platform that caters to clients from 133 different countries and is one of the most popular brokers for traders from India, Brazil, Indonesia, Vietnam, and Turkey.",
          asideInfo: {
            card: {
              icon: "",
              title: "Окко",
              text: "per-minute car rental service with access from 18",
            }
          }
        },
        {
          type: "cpi-kpi",
          icon: "delimobile.png",
          title: "Delimobil",
          text: "per-minute car rental service with access from 18 years old, a large fleet of vehicles and a user-friendly interface",
          asideInfo: {
            card: {
              icon: "",
              title: "Окко",
              text: "per-minute car rental service with access from 18",
            }
          }
        },
      ],
      selectedCategory: "cpa"
    }
  },
  computed: {
    filteredInfo: function () {
      let category = this.selectedCategory;

      if (category === "all") {
        return this.cardInfo;
      } else {
        return this.cardInfo.filter(function (info) {
          return info.type === category;
        });
      }
    }
  },
  methods: {
    toggleAside
  }
}
</script>

<style lang="scss">
.CasePage {
  height: 100vh;

  &-Content {
    display: flex;
    height: 100%;
  }

  &-TabsBtns {
    width: 36%;
    padding: 286px 0 0 175px;
  }

  &-TabsContent {
    width: 64%;
    padding: 116px 0 103px 103px;
    background-color: var(--color-body1);
  }

  &-TabsInput {
    display: none;
    position: absolute;
    visibility: hidden;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    z-index: -9999;
    left: -9999;
    right: -9999;
  }

  &-TabsLabel {
    font-weight: 300;
    font-size: 63px;
    line-height: 1.30;
    text-transform: uppercase;
    color: var(--color-text-main2);
  }

  input:checked + label {
    font-weight: 400;
    color: var(--color-text-active2);
  }

  &-TabsContent {

  }

  &-TabsContentBox {
    display: grid;
    grid-template-columns: repeat(2, 298px);
    grid-template-rows: minmax(300px, max-content) repeat(auto-fill, min-content);
    grid-gap: 16px;
  }

  &-Card {
    display: flex;
    align-items: flex-start;
    padding: 17px 32px 17px 15px;
    background: linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%);
    border-radius: 10px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%);
      border-radius: 10px;
      opacity: 0;
      transition: .3s;
    }

    &:hover {
      /*background: linear-gradient(125.86deg, rgba(255, 255, 255, 0.76) -267.85%, rgba(255, 255, 255, 0) 138.29%);*/
      &:before {
        opacity: 1;
      }

    }
  }

  &-CardIcon {
    max-width: 72px;
    margin-right: 20px;
  }

  &-CardInfo {
    font-size: 14px;
    line-height: 1.33;
    letter-spacing: 0.05em;
  }

  &-CardTitle {
    margin-bottom: 5px;
  }

  &-CardText {
    margin-bottom: 60px;
    font-weight: 300;
  }

  &-CardBtn {
    position: absolute;
    padding: 12px 26px;
    bottom: 17px;
  }

}


.AsideCase {
  position: absolute;
  width: 64%;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: var(--color-body1);
}
</style>