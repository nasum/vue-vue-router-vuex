<template>
  <ul>
    <li v-for="item in items | filterBy 'doing' in 'status' ">
      <item :data="item"></item>
    </li>
  </ul>
</template>

<style>
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
