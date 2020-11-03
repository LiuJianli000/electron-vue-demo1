<template>
  <div id="closeOp">
    <i class="el-icon-minus" @click="handleMin"></i>
    <i class="el-icon-full-screen" @click="handleMax"></i>
    <i class="el-icon-close" @click="handleClose"></i>
  </div>
</template>

<script>
  import { ipcRenderer } from 'electron'

  export default {
    name: 'closeOp',
    computed: {
    },
    methods: {
      handleMin: function () {
        ipcRenderer.send('win-min')
      },
      handleMax: function () {
        ipcRenderer.send('win-max')
      },
      handleClose: function () {
        ipcRenderer.send('win-close')
      }
    }
  }
</script>

<style scoped lang="scss">
  #closeOp {
    display: flex;
    justify-content: flex-end;
    -webkit-app-region: drag;
    -webkit-user-select: none;

    i {
      padding: 5px 10px;
      -webkit-app-region: no-drag;

      &:not(:last-child):hover {
        background: #ccc;
      }
      &:last-child:hover {
        background: red;
      }
    }
  }
</style>>
