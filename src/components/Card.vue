<template>
  <div class="Card">
    <div class="Card-Content"
         v-for="(info,i) in filteredInfo"
         :key="i"
    >
      <img :src="require(`@/assets/images/${info.icon}`)" alt="icon" class="Card-Icon">
      <div class="Card-Info">
        <div class="Card-Title">
          {{ info.title }}
        </div>
        <p class="Card-Text">
          {{ info.text }}
        </p>
        <button class="Btn Card-Btn"
                @click.prevent="toggleAside"
                >
          Go to case
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {toggleAside} from "@/utils/script";

export default {
  name: "Card",
  props: {
    filteredInfo: {
      type: Array,
      required: false,
      default: ()=>{},
    }
  },
  methods: {
    toggleAside
  }
}
</script>

<style lang="scss">
.Card {
  display: grid;
  grid-template-columns: repeat(2,298px);
  grid-template-rows: minmax(300px, max-content) repeat(auto-fill, min-content);
  grid-gap: 16px;

  &-Content {
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

  &-Icon {
    max-width: 72px;
    margin-right: 20px;
  }

  &-Info {
    font-size: 14px;
    line-height: 1.33;
    letter-spacing: 0.05em;
  }

  &-Title {
    margin-bottom: 5px;
  }

  &-Text {
    margin-bottom: 60px;
    font-weight: 300;
  }

  &-Btn {
    position: absolute;
    padding: 12px 26px;
    bottom: 17px;
  }
}

</style>