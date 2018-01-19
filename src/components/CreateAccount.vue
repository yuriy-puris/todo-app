<template>
  <div class="account-edit">
    <button class="add-account" v-on:click="openForm">
      Add account
    </button>

    <div class="account-form" v-show="isCreating">
      <div class='field'>
        <label>First Name</label>
        <input v-model="titleName" type='text' />
      </div>
      <div class='field'>
        <label>Second Name</label>
        <input v-model="balanceName" type='text' />
      </div>
      <button class='btn-submit' v-on:click="sendForm">Submit</button>
      <button class='btn-close' v-on:click="closeForm">Cancel</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        titleName: '',
        balanceName: '',
        done: false,
        isCreating: false,
      }
    },
    methods: {
      openForm() {
        this.isCreating = true
        this.$emit('close-table')
      },
      closeForm() {
        this.isCreating = false
        this.$emit('visible-table')
        this.titleName = ''
        this.balanceName = ''
      },
      sendForm() {
        if(this.titleName.length > 0 && this.balanceName.length) {
          const title = this.titleName
          const balance = this.balanceName
          const done = this.done
          this.$emit('create-account', {
            title,
            balance,
            done
          })
          this.titleName = ''
          this.balanceName = ''
        }
        this.closeForm()
      },
    }
  }
</script>

<style>
  .account-edit {
    margin: 0 0 50px;
  }
  .account-edit::after {
    content: "";
    display: table;
    clear: both;
  }
  .add-account {
    font-size: 15px;
    background: #00d1b2;
    color: #fff;
    padding: 10px 15px;
    border: 1px solid transparent;
    border-radius: 3px;
    float: right;
    outline: none;
    cursor: pointer;
  }
  .account-form {
    float: left;
    text-align: left;
  }
  .field {
    margin: 0 0 20px;
  }
  .field label {
    display: block;
    margin: 0 0 10px;
  }
  input {
    border-radius: 3px;
    border: 1px solid #cecece;
    height: 30px;
    width: 100%;
    outline: none;
    padding: 5px 5px;
  }
  input:focus {
    border: 1px solid #a4dff1;
    box-shadow: inset 0px 0px 0px 1px rgba(57, 182, 255, 0.2);
  }
  button {
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 5px 10px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin: 0 15px 0 0;
    opacity: .85;
    outline: none;
    transition: opacity .3s;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    opacity: 1;
  }
  .btn-submit {
    background: #13d1b1;
  }
  .btn-close {
    background: #d11313;
  }
</style>
