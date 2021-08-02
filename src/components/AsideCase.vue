<template>
  <transition name="slide-right">
    <div class="AsideCase" v-show="asideIsOpen">
      <div class="AsideCase-Header">
        <router-link to="/" class="MainNav-LogoLink">
          <!--      <img :src="require(`@/assets/images/${logo}`)" alt="logo" class="MainNav-Logo">-->
        </router-link>
        <button class="AsideCase-BtnClose" @click.prevent="toggleAside">
          <img :src="require(`@/assets/images/${close}`)"
               alt="burger"
               class="AsideCase-Close"
             >
        </button>
        <div class="CasePage-Card"
             v-for="(info,i) in asideInfo"
             :key="i"
        >
          <div class="AsideCase-Title">
            {{ info.card.title }}
          </div>
          <p class="AsideCase-Text">  {{ info.card.text }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {toggleAside, toggleNav} from "@/utils/script";

export default {
  name: "AsideCase",
  props: {
    asideInfo: {
      type: [Array, Object],
      required: false,
      default: () => {
      },
    }
  },
  data() {
    return {
      burger: 'burger.svg',
      returnArrow: '',
      asideIsOpen: false,
      close: 'close.svg',
    }
  },
  methods: {
    toggleNav,
    toggleAside,
  }
}
</script>

<style lang="scss">

</style>