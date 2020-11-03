<template>
  <div id="appMenuBar">
    <el-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
  </div>
</template>

<script>
  export default {
    name: 'menuBar',
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  #appMenuBar {
    width: 66px;
    height: 100vh;
    background: #29292C;
    text-align: center;

    .el-avatar {
      margin-top: 20px;
    }
  }
</style>
