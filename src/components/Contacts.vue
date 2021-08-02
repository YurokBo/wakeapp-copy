<template>
  <div class="Contacts">
    <div class="Contacts-Contact"
         v-for="item in contacts"
         :key="item.title"
    >
      <div class="Contacts-ContactTitle">
        {{ item.title }}
      </div>
      <a :href="`${item.href}${item.contact}`" class="Contacts-ContactName">
        {{ item.contact }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    contacts: {
      type: [Array, Object],
      required: false,
      default: () => {
      },
    },
  }
}
</script>

<style lang="scss">
.Contacts {
  display: grid;
  grid-template-columns: repeat(2, 268px);
  grid-gap: 25px 51px;

  &-ContactTitle {
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.33;
    letter-spacing: 0.05em;
  }

  &-ContactName {
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;
  }
}

</style>