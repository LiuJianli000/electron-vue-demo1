<template>
  <div id="count">
    <h1>{{ count }}</h1>
    <el-button @click="handleAdd(1)" circle>+1</el-button>
    <el-button @click="handleMinus(1)" circle>-1</el-button>
    <el-button @click="handleAsyncAdd(5)" circle>async</el-button>
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

<style scoped lang="scss">
 #count {
   text-align: center;

   h1 {
     font-size: 64px;
     margin-top: 100px;
   }

   .el-button {
     margin-top: 50px;
     height: 60px;
     width: 60px;
   }
 }
</style>