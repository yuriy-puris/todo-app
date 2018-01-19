import Vue from 'vue'
import Router from 'vue-router'
// import ListAccounts from '../components/ListAccounts'

Vue.use(Router)
const ListAccounts = { template: '<p>о нас</p>' }

export default new Router({
  routes: [
    {
      path: '/item-accounts',
      name: 'ListAccounts',
      component: ListAccounts
    }
  ]
})
