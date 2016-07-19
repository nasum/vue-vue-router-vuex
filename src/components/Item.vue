<template>
  <div>
    <button @click="changeStatus" >
      change status
    </button>
    <span class="name {{data.status}}">{{data.name}}</span>
  </div>
</template>

<style lang="sass" scoped>
  .todo {
    color: green;
  }

  .doing {
    color: yellow;
  }

  .done {
    color: blue;
  }
</style>

<script>
  export default {
    props: ["data"],
    methods: {
      changeStatus: function(){
        if(this.data.status == 'todo') {
          this.data.status = 'doing';
        } else if(this.data.status == 'doing') {
          this.data.status = 'done';
        } else if(this.data.status = 'done') {
          this.data.status = 'todo';
        }
      }
    }
  }
</script>
