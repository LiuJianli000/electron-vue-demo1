<template>
  <div id="count">
    <h1>{{ count }}</h1>
    <button @click="handleAdd(1)">+1</button>
    <button @click="handleMinus(1)">-1</button>
    <button @click="handleAsyncAdd(5)">async +1</button>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'

  export default {
    name: 'count',
    computed: {
      ...mapState('counter', ['count'])
    },
    methods: {
      ...mapMutations('counter', ['add', 'minus']),
      ...mapActions('counter', ['asyncAdd']),

      handleAdd: function (num) {
        this.add(num)
      },
      handleMinus: function (num) {
        this.minus(num)
      },
      handleAsyncAdd: function (num) {
        this.asyncAdd(num)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

</style>
