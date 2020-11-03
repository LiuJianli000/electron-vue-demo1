<template>
  <div id="app">
    <menu-bar></menu-bar>
    <div class="appContainer">
      <close-op></close-op>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import CloseOpVue from './components/Layout/CloseOp.vue'
  import MenuBarVue from './components/Layout/MenuBar.vue'

  export default {
    name: 'electron-vue',
    components: {
      'close-op': CloseOpVue,
      'menu-bar': MenuBarVue
    }
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

    .appContainer {
      width: 100%;
      height: 100vh;

      .main {
        overflow-y: scroll;
        height: calc(100vh - 36px);

        &::-webkit-scrollbar {
          width: 0;
        }
      }
    }
  }
</style>
