<template>
  <div class="BaseTabs">
    <button
      v-for="tab in items"
      :key="tab.value"
      class="BaseTabs-Tab"
      :class="{ 'BaseTabs-Tab--active': currentItem === tab.value }"
      @click="$emit('choose-tab', tab.value)"
    >
      <div class="BaseTabs-Name">
        {{ tab.name }}
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseTabs',
  props: {
    items: {
      type: Array,
      required: true,
    },
    currentItem: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss">
.BaseTabs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  //margin-bottom: 25px;
  width: 555px;
  margin-right: 90px;

  @media (min-width: $screen-m) {
    //flex-direction: column;
    //align-items: flex-start;
    //margin-bottom: 0;
    //width: auto;
  }



  &-Tab {
    margin: 0 16px 16px 0;
    padding: 16px 24px;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.03em;
    color: var(--color-text-main);
    background: linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%);
    border: 1px solid;
    border-image-source: radial-gradient(101.8% 83.78% at 100.41% 96.34%, rgba(255, 255, 255, 0.2) 0%, rgba(54, 20, 126, 0.75) 100%),
    radial-gradient(112.59% 77.66% at -46.11% -22.08%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 100px;
    transition: 0.1s ease;

    &--active {
      background: linear-gradient(125.86deg, rgba(255, 255, 255, 0.76) -267.85%, rgba(255, 255, 255, 0) 138.29%);
    }

    @media (min-width: $screen-m) {
      //margin-bottom: 19px;
      //font-size: 22px;
      //&:last-child {
      //  margin-bottom: 0;
      //}
    }
  }
}

/*.BaseTabs {
  display: flex;
  max-width: 100%;
  height: 55px;

  @media (min-width: $screen-m) {
    width: auto;
  }

  &-Tab {
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    font-weight: 700;
    text-align: center;
    color: var(--color-text-main);
    text-transform: inherit;
    background: var(--color-bg);
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.nuxt-link-exact-active,
    &--active {
      color: var(--color-main1);

      .BaseTabs-Name {
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -15px;
          z-index: 0;
          width: calc(100% + 30px);
          height: 4px;
          background: var(--color-main1);
        }
      }
    }
  }

  &-Name {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}

.BaseTabs--vertical {
  flex-direction: column;
  max-width: none;
  height: auto;

  .BaseTabs-Tab {
    justify-content: flex-start;
    height: 55px;
    margin-right: 0;
    margin-bottom: 4px;
    padding-left: 16px;

    @media (min-width: $screen-m) {
      height: 45px;
      padding-left: 20px;

      &:after {
        display: none;
      }
    }

    @media (min-width: $screen-l) {
      height: 55px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:after {
      content: '';
      position: absolute;
      right: 24px;
      padding: 2px;
      border-width: 2px 2px 0 0;
      border-style: solid;
      border-color: var(--color-text-main);
      transform: rotate(45deg);
    }
  }

  .BaseTabs-Tab.nuxt-link-exact-active,
  .BaseTabs-Tab--active {
    padding-left: 16px;
    color: var(--color-text-main);

    @media (min-width: $screen-m) {
      color: var(--color-main1);
      border-left: 4px solid var(--color-main1);
    }

    .BaseTabs-Name {
      position: relative;

      &:after {
        display: none;
      }
    }
  }
}*/
</style>
