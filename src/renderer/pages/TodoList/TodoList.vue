<template>
  <div id="todolist">
    <el-input 
      placeholder="请输入内容"
      v-model="input"
    ></el-input>
    <el-button type="primary" @click="handleAdd">Add</el-button>
    <ul>
      <li 
        v-for="(item, index) in list" 
        :key="index"
        @click="handleDele(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'

  export default {
    name: 'todolist',
    data () {
      return {
        input: ''
      }
    },
    mounted: function () {
      this.fetchList()
    },
    computed: {
      ...mapState('todolist', ['list'])
    },
    methods: {
      ...mapMutations('todolist', ['addItem', 'deleItem']),
      ...mapActions('todolist', ['fetchList']),

      handleAdd: function () {
        this.addItem(this.input)
        this.input = ''
      },
      handleDele: function (index) {
        this.deleItem(index)
      }
    }
  }
</script>

<style scoped lang="scss">
  #todolist {
    padding: 20px;

    .el-input {
      width: 360px;
    }

    .el-button {
      margin-left: 10px;
    }

    ul {
      list-style: none;
      width: 360px;
      margin-top: 10px;

      li {
        padding: 8px;
        border: 1px solid #ddd;
        
        &:not(:last-child) {
          border-bottom: 0;
        }
      }
    }
  }
</style>
