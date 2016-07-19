<template>
  <ul>
    <li v-for="item in items">
      <item :data="item"></item>
    </li>
  </ul>
</template>

<style lang="sass" scoped>
  ul {
    list-style: none;
    li {
      list-style: none;
      margin-left: -20px;
    }
  }
</style>

<script>
  import Item from './Item.vue';

  export default {
    props: ["items"],
    components: {
      "item": Item
    }
  }
</script>
