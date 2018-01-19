<template>
  <div class="edit-form" v-show="isEditing">
    <h1>{{accountName}}</h1>
    <div class='field'>
      <input type='text' v-bind:value="accountName" ref="accountName" />
    </div>
    <div class='field'>
      <input type='text' v-bind:value="accountSecondName" ref="accountSecondName" />
    </div>
    <button class='btn-submit' v-on:click="sendForm">Submit</button>
    <button class='btn-close' v-on:click="closeForm">Cancel</button>
  </div>
</template>
<script>
  export default {
    props: ['accountName', 'accountSecondName'],
    data() {
      return {
        isEditing: true,
      }
    },
    methods: {
      closeForm() {
        this.isEditing = false
        this.$emit('visible-table')
      },
      sendForm() {
        if(this.accountName.length > 0 && this.accountSecondName.length) {
          const title = this.$refs.accountName.value
          const balance = this.$refs.accountSecondName.value
          this.$emit('change-account', {
            title,
            balance
          })
        }
        this.closeForm()
      },
    }
  }
</script>

<style>
  .edit-form {
    float: left;
    text-align: left;
  }
</style>
