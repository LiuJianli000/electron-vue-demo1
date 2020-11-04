import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/count',
      name: 'count',
      component: require('@/pages/Count/Count.vue').default
    },
    {
      path: '/',
      name: 'todolist',
      component: require('@/pages/TodoList/TodoList.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
