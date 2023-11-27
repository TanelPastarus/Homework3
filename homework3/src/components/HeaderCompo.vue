<template>
     <header class="header">
        <p class="nav">
          <router-link to="/">Home</router-link>|<router-link to="/signup">Sign Up</router-link>
        </p>
    </header>
 
  <router-view/>
</template>


<script>
export default {
name: "HeaderCompo",
data: function() {
return {

}},

}
</script>

<style scoped>
.header {
    display: flex;
    width: 100%;
    padding-top: .5em;
    padding-right: .5em;
    padding-bottom: .5em;
    border: 1px solid #646174;
    background-color: #a2ccea;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
}

.nav a.router-link-exact-active {
  color: gray;
}

.nav {
    margin-top: 5px;
}

.nav a {
    padding: 10px 15px;
    text-align: left;
    display: inline;
    font-size: .99em;
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
}

/* Pseudo-class selector */
.nav a:hover {
    background-color: #7ebeb6;
    color: #092747;
}

</style>