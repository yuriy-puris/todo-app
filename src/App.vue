<template>
  <div id="app">
    <router-link to="/item-accounts">About</router-link>
    <router-view></router-view>
    <Header
      v-bind:accounts='accounts'
    />
    <div class="content">
      <CreateAccount
        v-on:create-account="createAccount"
        v-on:close-table="closeTable"
        v-on:visible-table="visibleTable"
      />
      <Search
        v-on:search-data="searchData"
      />
      <ListAccounts
        v-bind:accounts='accounts'
        v-show="isVisible"
      />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import ListAccounts from './components/ListAccounts'
  import CreateAccount from './components/CreateAccount'
  import Search from './components/Search'
  export default {
    name: 'app',
    data() {
      return {
        accounts: [],
        arr_lib: [],
        isVisible: true,
        isEditing: false,
      }
    },
    components: {
      Header,
      ListAccounts,
      CreateAccount,
      Search
    },
    methods: {
      createAccount(data) {
        this.accounts.push({
          data
        })
        this.toStorage(this.accounts)
      },
      closeTable() {
        this.isVisible = false
      },
      visibleTable() {
        this.isVisible = true
      },
      toStorage(data) {
        const KEY = 'APP_TODO_KEY'
        const STORAGE_VALUE = []
        data.forEach((item) => {
          STORAGE_VALUE.push(item)
        })
        localStorage.setItem(KEY, JSON.stringify(STORAGE_VALUE))
      },
      searchData(searchData) {
        const search_arr = JSON.parse(localStorage.getItem("APP_TODO_KEY"))
        const val = searchData.trim().toLowerCase();
        if (val.length > 0) {
          this.accounts = search_arr.filter(i => i.data.title.toLowerCase().match(val));
        } else {
          this.accounts = search_arr
        }
      },
    },
    beforeMount() {
      const returnObj = JSON.parse(localStorage.getItem("APP_TODO_KEY"))
      if( returnObj !== 0 ) {
        returnObj.forEach((item, idx) => {
          let itm = item
          this.accounts.push(item)
        })
      }
    },
  }

</script>

<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .content {
    float: right;
    width: 75%;
    padding: 15px 20px;
  }
  .header {
    width: 25%;
    float: left;
    background: #4b4f51;
    height: 100vh;
    padding: 15px 20px;
    color: #fff;
  }
</style>
