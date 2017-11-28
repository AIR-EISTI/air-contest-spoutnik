<template lang="html">
  <nav id="menu">
    <div class="side-menu">
    <router-link :to="{name: 'Admin'}"><h1>Administation</h1></router-link>
    <div class="links">
        <router-link :to="{name: 'Users'}" class="item">Users</router-link>
        <router-link :to="{name: 'Exercices'}" class="item">Exercices</router-link>
        <router-link :to="{name: 'Tournois'}" class="item">Tournois</router-link>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="css">
  .side-menu{
    height: 100%;
    width: 250px;
    background-color:black;
    overflow-x: hidden;
    border-right: 2px solid #00FE00;
  }
  .item{
    color : #00F3F9;
    text-decoration: none;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    display: block;

  }
  .links{
    border : 1px solid #E120F0!important;
    border-top-left-radius:30px;
  }
  h1{
    color : #00FE00;
    text-decoration: none;
    font-size: 35px;
    display: block;
    text-align: center;
  }
  a{
    text-decoration: none;
  }
</style>
