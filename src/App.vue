<template>
  <div id="app">
<!--    <NavBar/>-->
<!--    <Header/>-->
    <MainNav />
    <router-view/>
<!--    <MainCursor />-->
<!--    <Footer/>-->
  </div>
</template>

<script>

// import Header from "@/components/Header";
// import NavBar from "@/components/NavBar";
// import Footer from "@/components/Footer";

import MainNav from "@/components/MainNav";
//import MainCursor from "@/components/MainCursor";
export default {
  name: 'App',
  components: {
    //MainCursor,
    MainNav
    // Footer,
    // NavBar,
    // Header
  }
}
</script>

<style lang="scss">

#app {
  position: relative;
}


</style>
