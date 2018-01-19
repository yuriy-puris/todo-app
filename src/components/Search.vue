<template>
  <div class="search-form">
    <div class="field">
      <input type='text' v-on:keyup="searchTodo" v-model="search" ref="search" placeholder="Name todo..."/>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['accounts'],
    data() {
      return {
        search: ''
      }
    },
    methods: {
      searchTodo() {
        const searchData = this.search
        this.$emit('search-data', searchData)
      }
    }
  }
</script>

<style>
  .search-form {
    float: right;
  }
</style>
