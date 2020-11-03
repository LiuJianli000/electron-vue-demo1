<template>
  <div id="app">
    <div class="appMenuBar">

    </div>
    <div class="appContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #app {
    background: #F5F5F5;
    height: 100vh;
    display: flex;

    .appMenuBar {
      width: 66px;
      border: 1px solid red;
      height: 100vh;
    }

    .appContainer {
      width: 100%;
      height: 100vh;
    }
  }
</style>
