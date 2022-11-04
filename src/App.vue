<template>
  <div class="nav">
    <div class="header"><span class="title">Vue</span>Movie</div>
    <nav class="">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  
  <router-view/>
</template>

<script >

export default {
  
}
</script>

<style>
#app {
  font-family: 'Permanent Marker', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title{
    color: #82A99A;
}

.header{
    color: white;
    font-size: 30px;
    padding: 5px;
   margin: auto;
    
}
.nav{
    background-color: #313C4D;
    color: white;
   
}

nav {
  
  padding: 40px;
  margin: auto;
 
}

nav a {
  
  font-weight: bold;
  color: white;
  
}

nav a.router-link-exact-active {
  color: #42b983;
}

body{
  margin: 0 ;
  padding: 0;
  height: 2000px;
 
}
</style>
