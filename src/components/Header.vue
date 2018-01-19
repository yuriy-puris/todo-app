<template>
  <div class="header">
    <div class="menu">
      <div class="title-accounts">List</div>
      <ul class="menu-accounts">
        <Menu
          v-for="account in accounts"
          v-on:trigger-edit="triggerEdit"
          :account.sync="account"
        />
      </ul>
    </div>
  </div>
</template>

<script>
  import EditForm from './EditForm'
  import Menu from './Menu'
  export default {
    props: ['accounts'],
    data() {
      return {
        isVisibleTableList: true,
        isEditing: true,
        index: null,
      }
    },
    components: {
      Menu
    },
    methods: {
      triggerEdit(account) {
        const accountIndex = this.accounts.indexOf(account)
        const tr = document.querySelectorAll('.table-list tbody > tr')[accountIndex]
        tr.querySelector('.btn-edit').click()
      }
    }
  }
</script>

<style>
  ul {
    padding: 0
  }
  ul, li {
    list-style-type: none
  }
  li {
    margin: 0 0 30px;
  }
  .logo {
    margin: 0 0 130px;
    display: inline-block;
  }
  .menu {
    font-weight: 600;
    margin: 148px 0 0;
  }
  .title-accounts {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 24px;
  }
  .menu-accounts {
    color: #b7b7b7;
  }
  .menu-accounts li {
    cursor: pointer;
  }
</style>
