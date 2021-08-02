<template>
  <div class="MainCursor" @mousemove="circle">
    <div class="MainCursor-Outer">
      <div class="MainCursor-Animation"></div>
    </div>
    <div class="MainCursor-Inner"></div>
  </div>
</template>

<script>
import {mouseMove} from "@/utils/script";

export default {
  name: "MainCursor",
  methods: {
   circle() {window.addEventListener('mousemove', mouseMove)}
  },
  // mounted(){
  //   window.addEventListener('mousemove',mouseMove);
  // },

  // destroyed: function() {
  //   window.removeEventListener('mousemove', mouseMove);
  // }
}
</script>

<style scoped lang="scss">
.MainCursor {
  position: absolute;
  z-index: 10000;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);

  &-Outer {
    position: fixed;
    pointer-events: none;
    width: 32px;
    height: 32px;
    border: 2px solid var(--color-border);
    border-radius: 50%;
    transform: translate(-50%, -50%);

    i {
      font-size: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  &-Inner {
    position: fixed;
    width: 4px;
    height: 4px;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 1px);
    background: var(--color-text-main2);
  }

  &-Animation {
    position: absolute;
    top: -10px;
    left: -10px;
    height: 56px;
    width: 56px;
    -webkit-animation: circ-anim .7s linear infinite;
    animation: circ-anim .7s linear infinite;
    display: none;
    border-width: 0px;
    border-radius: 50%;
    border-top: 2px solid #fff;
    border-right: 2px solid transparent;
  }

  @-webkit-keyframes circ-anim {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes circ-anim {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>