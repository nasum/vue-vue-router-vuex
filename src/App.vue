<template>
  <div id="app" class="app">
    <todo-header></todo-header>
    <div class="contents">
      <add-to-do :text="inputText" :items="items"></add-to-do>
      <router-view :items.sync="items"></router-view>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .app {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import AddToDo    from './components/AddToDo.vue';

  export default {
    data: function(){
      return {
        inputText: "",
        items: []
      }
    },
    components: {
      TodoHeader: TodoHeader,
      AddToDo:    AddToDo
    }
  }
</script>
