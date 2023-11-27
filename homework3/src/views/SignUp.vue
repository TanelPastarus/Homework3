<template>
    <h1> Sign Up</h1>

<div>
    
    <form @submit.prevent ="validateForm">
    <h2>Create an account</h2>
    <label for="email">Email</label>
    <input type="email" placeholder="Email" required v-model="email">
    <label for="password">Password</label>
    <input type="password" placeholder="Password" required v-model="password">
    <div v-if="validatePassword" class="error"> {{validatePassword}}</div>
 
  
  <div class="submit">
      <button>Sign up </button>
  </div>
  </form>
  
  
  </div>
</template>

<script>

export default {
name: "SignUp", 

data: function() {
    return {
   email: '',
   password: '',
   role: '',
   terms: false,
   validatePassword:'',
  }},
  methods: {
   /* Validate password */
   validateForm(){
   console.log('signup is submitted');
   this.validatePassword = (this.password.length <8 || this.password> 15)? 'password must be between 8-15 chars':''
   console.log(this.validatePassword);
   let regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z][A-Za-z0-9_]{7,14}$/
   console.log(regex.test(this.password));
   console.log(this.password);
   this.validatePassword = regex.test(this.password)? '':
   `The password should be of a specific length (at least 8 chars and less than 15 chars), 
   it should start with an uppercase alphabet character, 
   it should include the character “_”, include at least one uppercase alphabet character, 
   include at least two lowercase alphabet characters and include at least one numeric value`
   }
  }
}
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background:  rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
display: block;
padding: 10px 6px;
width: 100%;
box-sizing: border-box;
border: none;
border-bottom: 1px solid white;
color: blue;
}

button {
background:  rgb(8, 110, 110);
border: 0;
padding: 10px 20px;
margin-top:  20px;
color: white;
border-radius: 20px;
}
h2, .submit{
    text-align: center;
}
.error{
    color: red;
    font-size: 0.8em;
    margin-top:  10px;
    text-align: center;
}
</style>