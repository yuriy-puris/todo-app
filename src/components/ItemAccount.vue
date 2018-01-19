<template>
  <tr :class='{"complete": done === true || account.data.done === true}'>
    <td>
      {{ account.data.title }}
    </td>
    <td>
      {{ account.data.balance }}
    </td>
    <td>
      <button
        class="btn-edit"
        v-on:click="editAccount(account)"
        ref="btnEdit"
        :disabled="done === true || account.data.done === true">
        Edit
      </button>
      <button
        class="btn-complete"
        v-on:click="completeAccount(account)"
        v-show="account.data.done === false && done === false"
        ref="btnComplete">
        Complete
      </button>
      <button
        class="btn-rework"
        v-on:click="refreshAccount(account)"
        v-show="account.data.done === true || done === true"
        ref="btnComplete">
        Rework
      </button>
      <button
        class="btn-delete"
        v-on:click="deleteAccount(account)">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>

  export default {
    name: 'itemAccount',
    props: ['account', 'complete'],
    data() {
      return {
        isEditing: false,
        name: '',
        balance: '',
        done: false
      }
    },
    methods: {
      deleteAccount(account) {
        this.$emit('delete-account', account)
      },
      editAccount(account) {
        const title = account.title
        const balance = account.balance
        const done = this.done
        this.$emit('edit-account', account)
      },
      completeAccount(account) {
        const done = !this.done
        this.done = !this.done
        this.$emit('complete-account', {
          account,
          done
        })
      },
      refreshAccount(account) {
        account.data.done = false
        const done = false
        this.done = false
        this.$emit('complete-account', {
          account,
          done
        })
      },
    },
  }
</script>

<style>
  table {
    border-collapse: collapse;
    border-spacing: 0;
    background-color: white;
    color: #363636;
    margin-bottom: 1.5rem;
    width: 100%;
    text-align: left;
  }
  tr.complete {
    background: #ede8e8;
  }
  tr.complete td:not(:last-child) {
    text-decoration: line-through;
  }
  th, tbody td {
    border: 1px solid #ddd;
    padding: 10px;
  }
  td:first-child {
    width: 20%;
  }
  td:nth-child(2) {
    width: 30%;
  }
  .btn-edit {
    background: #42a6e0;
  }
  .btn-delete {
    background: #69b190;
  }
  .btn-complete {
    background: #d23030;
  }
  button[disabled] {
    opacity: .25;
  }
  .btn-rework {
    background: #ff755f;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
