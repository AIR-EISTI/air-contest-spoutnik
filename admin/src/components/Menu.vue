<template lang="html">
  <nav id="menu">
    <div class="side-menu">
    <router-link :to="{name: 'Admin'}"><h1 class="neon">Administration</h1></router-link>
    <div class="links neon">
        <router-link :to="{name: 'Users'}" class="item">Users</router-link>
        <router-link :to="{name: 'Exercices'}" class="item">Exercices</router-link>
        <router-link :to="{name: 'Tournois'}" class="item">Tournois</router-link>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="css">
  #menu{
    z-index: 5;
  }
  .side-menu{
    height: 100%;
    width: 300px;
    background-color:black;
    overflow-x: hidden;
    border-right: 2px solid #00FE00;
    box-shadow: 0 0 10px #00FE00;
  }
  .item{
    color : #00F3F9;
    text-shadow: 0px 0px 5px #00F3F9;
    text-decoration: none;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    display: block;
  }

  .item:hover{
    color : #00F3F9;
    text-shadow: 2px 2px 5px #E120F0, -2px -2px 5px #E120F0, -2px 2px 5px #E120F0, 2px -2px 5px #E120F0;
    text-decoration: none;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    display: block;
  }

  .links{
    border : 1px solid #E120F0!important;
    box-shadow: 0 0 10px #E120F0 inset, 0 0 10px #E120F0;
    border-top-left-radius:30px;
    margin-right : 10px;
    margin-left: 10px;
  }
  h1{
    color : #00FE00;
    text-decoration: none;
    font-size: 30px;
    display: block;
    text-align: center;
  }
  a{
    text-decoration: none;
  }
</style>
