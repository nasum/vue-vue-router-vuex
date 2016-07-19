<template>
  <form>
    <input type="text" v-model="text"><input type="submit" @click="addItem">
  </form>
</template>

<style lang="sass" scoped>
  form{
    height: 25px;
    border-bottom: 1px solid #0F0F0F;
  }
</style>

<script>
  import Item from '../model/Item.js';

  export default {
    props: ["text", "items"],
    methods: {
      addItem: function(){
        this.items.push(new Item(this.text));
        this.text = "";
      }
    }
  }
</script>
