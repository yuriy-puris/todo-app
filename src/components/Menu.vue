<template>
  <transition name="fade">
    <li
      v-on:click="editAccount(account)">
      {{ account.data.title }}
    </li>
  </transition>
</template>

<script>

  export default {
    props: ['account'],
    methods: {
      editAccount(account) {
        this.$emit('trigger-edit', account)
      },
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
