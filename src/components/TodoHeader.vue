<template>
  <div>
    <ul>
      <li>
        <a v-link="{ path: '/all' }">ALL</a>
      </li>
      <li>
        <a v-link="{ path: '/todo' }">TODO</a>
      </li>
      <li>
        <a v-link="{ path: '/doing' }">DOING</a>
      </li>
      <li>
        <a v-link="{ path: '/done' }">DONE</a>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
  ul {
    width: 500px;
    background-color: #F0F0F0;
    li {
      display: table-cell;
      width: 100px;
      border: 1px solid #0F0F0F;
      a {
        text-decoration: none;

      }
    }
  }
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
