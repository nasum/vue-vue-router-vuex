<template>
  <div>
    <ul>
      <li>
        <a href="#top">TOP</a>
      </li>
      <li>
        <a href="#todo">TODO</a>
      </li>
      <li>
        <a href="#doing">DOING</a>
      </li>
      <li>
        <a href="#done">DONE</a>
      </li>
    </ul>
  </div>
</template>

<style>
</style>

<script>
  export default {
    data: function(){
      return {
        state: "top"
      }
    }
  }
</script>
