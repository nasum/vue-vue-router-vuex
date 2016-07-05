<template>
  <form>
    <input type="text" v-model="text">
    <input type="submit" @click="addItem">
  </form>
</template>

<style lang="sass" scoped>
</style>

<script>
  import Item from '../model/Item.js';

  export default {
    props: ["text","items"],
    methods: {
      addItem: function(){
        this.items.push(new Item(this.text));
        this.text="";
      }
    }
  }
</script>
