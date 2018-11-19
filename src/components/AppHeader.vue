<template>
  <div>
  <navbar class="indigo" dark style="padding: 0.1rem 1rem !important">
  <!-- Navbar brand -->
  <mdb-navbar-brand class="text-white" href="https://" style="margin-left: 4px;">
   Image Browser
  </mdb-navbar-brand>

  <navbar-collapse>
    <navbar-nav right>
     <navbar-item class="text-white" href="#/addimage"><i class="fa fa-upload" aria-hidden="true"></i> Add Images </navbar-item>
     <navbar-item class="text-white" href="#/gallery"><i class="fa fa-th" aria-hidden="true"></i> Gallery </navbar-item>

     <navbar-item icon="user" class="indigo" @click.native="toggleLoginModal" ><i class="fa fa-user"></i> {{ !isLoggedIn ? 'Login' : 'Logout' }}</navbar-item>
    </navbar-nav>
    <!-- Search form -->
  </navbar-collapse>
</navbar>

</div>
</template>
<script>
/* eslint-disable */
import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, mdbNavbarBrand, Btn, Fa } from 'mdbvue';
export default {
  name: 'AppHeader',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    mdbNavbarBrand,
  },
   data() {
      return {
          showAlert: false,
          validationMsg: '',
          showModal: false,
          showAddUser: false,
          alertObj: {
                alert: true,
                alertText: true
            },
          user: {
            name: '',
            emailAddress: '',
            password: '',
            roles: ['USER']
          },
          userJwt: '',
          userToken: '',
      }
  },
   computed: {
     isLoggedIn() {
      let loggedIn = false;
      return loggedIn;
     }
   },
   methods: {
      toggleLoginModal: function() {
        if (this.showModal === true) {
          this.showModal = false;
        } else {
          this.showModal = true;
        }
       //console.log('toggle:', this.showModal);
     },
     loginUser() {
      var value = this.loginInfo;
      // form validation
      this.validateLogin(value);
      // check to see if the user is valid
      this.validateUser(value);
      // if there is a validationMessage return so it displays
      if(this.showAlert = true){
        return;
      }
      //reset the view model login info object
      this.loginInfo = {
                emailAddress: '',
                password: '',
                roles: ['USER']
        };
    },
     validateLogin(value){
      if (!value.emailAddress) {
        this.validationMsg = "Please enter your email address";
        this.showAlert = true;
        return;
      }
      if (value.emailAddress) {
        this.showAlert = false;
        this.validationMsg = '';
      }
      if (!value.password) {
        this.validationMsg = 'Please enter a password';
        this.showAlert = true;
        return;
      }
      if (value.password.length < 5) {
        this.validationMsg = 'Invalid password, all passwords are more than 5 characters';
        this.showAlert = true;
        return
      }
      // hide the add user button
      this.showAddUser = false;
    },
    validateUser(loginValues){
      this.users.find((user, i) => {
          if (user.emailAddress === loginValues.emailAddress) {
            console.log('in validate user 2' , loginValues.emailAddress,  '-', user.emailAddress);
              let foundUser = this.users[i];
              if (foundUser.password === loginValues.password){
                return
              }
              this.validationMsg = 'Incorrect Email Address / Password combination.';
              this.showAlert = true;
             return
          }
      });
    },
    addUser(userInfo){
      this.users.push(userInfo);
    //  localLoginStorage.save(this.users);
      this.validationMsg = 'New user added. Please login with your credentials';
      this.showAlert = true;
      this.showAddUser = true;
    },
    logOutUser(){
      this.userToken = '';
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
.nav-item {
    margin-right: 1rem;
}
</style>