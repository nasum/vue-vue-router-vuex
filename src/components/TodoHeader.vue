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
    display: table;
    table-layout: fixed;
    text-align: center;
    width: 100%;
    background-color: #F0F0F0;
    list-style: none;
    padding: 0px;
    margin: 0px;
    border-top: 1px solid #0F0F0F;
    border-bottom: 1px solid #0F0F0F;
    li {
      display: table-cell;
      width: auto;
      border-left: 1px solid #0F0F0F;

      &:first-child {
        border-left: 0px;
      }

      a {
        text-decoration: none;
        color: #0F0F0F;
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
