<template>
  <div>
    <table class="table-list" v-show="isVisibleTableList">
      <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Second Name
        </th>
        <th>

        </th>
      </tr>
      </thead>
      <tbody>
      <ItemAccount
        v-for="account in accounts"
        :account.sync="account"
        v-on:delete-account="deleteAccount"
        v-on:edit-account="editeAccount"
        v-on:complete-account="completeAccount"
        v-bind:complete="done"
      />
      </tbody>
    </table>
    <EditForm
      v-show="isEditing"
      v-bind:accountName="accountName"
      v-bind:accountSecondName="accountSecondName"
      v-on:change-account="changeAccount"
      v-on:visible-table="visibleTable"
    />
  </div>
</template>

<script>
  import ItemAccount from './ItemAccount'
  import EditForm from './EditForm'

  export default {
    name: 'ListAccounts',
    props: ['accounts'],
    data() {
      return {
        isEditing: false,
        accountName: '',
        accountSecondName: '',
        done: false,
        index:'',
        isVisibleTableList: true,
        complete: ''
      }
    },
    components: {
      ItemAccount,
      EditForm
    },
    methods: {
      deleteAccount(account) {
        const KEY = "APP_TODO_KEY"
        const accountIndex = this.accounts.indexOf(account)
        this.accounts.splice(accountIndex, 1)
        const returnObj = JSON.parse(localStorage.getItem(KEY))
        returnObj.splice(account, 1)
        localStorage.setItem(KEY, JSON.stringify(returnObj))
      },
      //event on button edit and link data to change form
      editeAccount(account) {
        this.isVisibleTableList = false
        this.isEditing = true
        const editIndex = this.accounts.indexOf(account)
        this.index = editIndex
        this.accountName = this.accounts[editIndex].data.title
        this.accountSecondName = this.accounts[editIndex].data.balance
      },
      //event on submit change form
      changeAccount(title) {
        this.accounts[this.index].data.title = title.title
        this.accounts[this.index].data.balance = title.balance
        const KEY = "APP_TODO_KEY"
        const returnObj = JSON.parse(localStorage.getItem(KEY))
        returnObj[this.index].data.title = title.title
        returnObj[this.index].data.balance = title.balance
        localStorage.setItem(KEY, JSON.stringify(returnObj))
      },
      completeAccount(account) {
        const KEY = "APP_TODO_KEY"
        const completeIndex = this.accounts.indexOf(account.account)
        this.index = completeIndex
        const returnObj = JSON.parse(localStorage.getItem(KEY))
        returnObj[this.index].data.done = account.done
        localStorage.setItem(KEY, JSON.stringify(returnObj))
      },
      visibleTable() {
        this.isVisibleTableList = true
        this.isEditing = false
      },
    },
  }
</script>

<style>
  .table-list {
    width: 100%;
    text-align: left;
  }
</style>
