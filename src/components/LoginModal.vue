<template>
  <container>
      <modal v-if="showModal" @close="closeModal" cascade class="text-left">
        <form id="loginform" class="needs-validation"  @submit.prevent="loginUser">
          <modal-header class="primary-color white-text">
            <h4 class="title"><fa class="fa fa-user" />User Login</h4>
          </modal-header>
          <modal-body class="grey-text">
            <input type="text" id="name" placeholder="name"  v-model="loginInfo.name" class="form-control" required/>
            <div class="invalid-feedback">
              Please enter your email address.
          </div>
          <br/>
          <input type="email" id="emailAddress" placeholder="email address"  v-model="loginInfo.emailAddress" class="form-control" required/>
            <div class="invalid-feedback">
              Please enter your email address.
          </div>
          <br/>
          <input type="password" id="password" placeholder="password"  v-model="loginInfo.password" class="form-control" required />
            <div class="invalid-feedback">
              Please enter a pasword.
          </div>
            <div class="red-text" id="validationMsg" v-show="showAlert"> {{ validationMsg }} </div>
          </modal-body>
          <modal-footer>
            <btn color="secondary" @click.native="closeModal">Close</btn>
            <btn color="primary" @click.native="addUser(loginInfo)" v-show="showAddUser">Add User</btn>
            <btn color="primary" type="submit" >Submit</btn>
          </modal-footer>
        </form>
      </modal>
  </container>
</template>

<script>
import { Container, Btn, Fa, Modal, ModalHeader, ModalBody, ModalFooter } from 'mdbvue';


export default {
  name: 'LoginModal',
  components: {
    Container,
    Btn,
    Fa,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  },
  props:[
    'showModal',
    'loggedIn'
  ],
  data() {
    return {
      showAlert: false,
      validationMsg: '',
      showAddUser: false,
      alertObj: {
            alert: true,
            alertText: true
      },
      loginInfo: {
        name: '',
        emailAddress: '',
        password: '',
        roles: ['USER']
      }
    }
  },
  methods: {
    // eslint-disable-next-line
     closeModal: function(event){
       this.$emit('closeLoginModal');
     },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>