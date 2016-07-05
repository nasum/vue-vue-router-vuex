<template>
  <div id="app">
    <todo-header></todo-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  export default {
    components: {
      TodoHeader: TodoHeader
    }
  }
</script>

<style>
</style>
