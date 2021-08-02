<template>
  <div class="MainNav">
    <div class="Container">
        <div class="Header MainNav-Content">
          <router-link to="/" class="MainNav-LogoLink">
            <img v-if="$route.name === 'contacts' || $route.name === 'case'"
                 :src="require(`@/assets/images/${logoDark}`)" alt="logo" class="MainNav-Logo">
            <img v-else :src="require(`@/assets/images/${logo}`)" alt="logo" class="MainNav-Logo">
          </router-link>
          <button class="MainNav-BtnOpen" @click.prevent="toggleNav">
            <img v-if="$route.name === 'contacts'" :src="require(`@/assets/images/${burgerDark}`)" alt="burger" class="MainNav-Burger">
            <img v-else :src="require(`@/assets/images/${burger}`)" alt="burger" class="MainNav-Burger">
          </button>
        </div>
      <transition name="slide-right">
        <div class="MainNav-Aside" v-show="navIsOpen">
          <div class="Container">
            <div class="Header MainNav-AsideHeader">
              <router-link to="/" class="MainNav-LogoLink">
                <img :src="require(`@/assets/images/${logo}`)" alt="logo" class="MainNav-Logo">
              </router-link>
              <button class="MainNav-BtnClose">
                <img :src="require(`@/assets/images/${close}`)"
                     alt="burger"
                     class="MainNav-Close"
                     @click.prevent="toggleNav">
              </button>
            </div>
            <div class="MainNav-AsideContent">
              <nav class="MainNav-AsideMenu">
                <router-link
                    v-for="item in navMenu"
                    :key="item.name"
                    class="MainNav-AsideLink"
                    :to="item.link"
                    @click.native="toggleNav"
                >
                  {{ item.name }}
                </router-link>
              </nav>
              <Contacts :contacts="contacts"/>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Contacts from "@/components/Contacts";
import {toggleNav} from "@/utils/script";
export default {
  name: "MainNav",
  components: {Contacts},
  data() {
    return {
      logo: 'logo.svg',
      burger: 'burger.svg',
      logoDark: 'logo-dark.svg',
      burgerDark: 'burger-dark.svg',
      close: 'close.svg',
      navIsOpen: false,
      navMenu: [
        {link: "/", name: "home"},
        {link: "/about", name: "about"},
        {link: "/awards", name: "awards"},
        {link: "/clients", name: "clients"},
        {link: "/case", name: "case"},
        {link: "/contacts", name: "contacts"},
      ],
      contacts: [
        {title: "On employment issues", href: "mailto:", contact: "contact@wakeapp.com"},
        {title: "Telephone", href: "tel:", contact: "+7 (499) 110-07-35"},
        {title: "For all questions", href: "mailto:", contact: "hr@wakeapp.com"},
        {title: "Россия, Москва, Бауманская улица, 6, стр. 2, 105005", contact: ""},
      ],
    }
  },
  methods: {
    toggleNav,
  },
}
</script>

<style scoped lang="scss">
.MainNav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  padding: 53px 0;

  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-Aside {
    position: fixed;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 53px 0;
    background-color: var(--color-bg-menu);
  }

  &-AsideHeader {
    //margin-bottom: 160px;
    padding-right: 8px;
  }

  &-AsideContent {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 95px;
    //position: absolute;
    //top: 100%;
    padding-top: 60px;
  }

  &-AsideMenu {
    display: flex;
    flex-direction: column;
    font-weight: 900;
    font-size: 63px;
    text-transform: uppercase;
  }

  &-AsideLink {
    margin-bottom: 23px;
    transition: text-shadow .3s;

    &:hover,
    &:focus {
      text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.7);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.MainNav-AsideLink.router-link-exact-active {
  text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.7);
}

</style>