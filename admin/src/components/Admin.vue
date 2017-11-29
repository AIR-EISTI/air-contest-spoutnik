<template lang="html">
  <main>
    <div id="titre">
      <h2 class="neon">Bienvenue dans votre page administrateur </h2>
    </div>
    <div id="infos">
      <router-link :to="{name: 'Users'}">
        <div id="nbUsers">
          <p>Nombre d'utilisateurs</p>
          <p class="nombre">0</p>
        </div>
      </router-link>
      <router-link :to="{name: 'Exercices'}">
        <div id="nbExercies">
          <p>Nombre d'exercices</p>
          <p class="nombre">0</p>
        </div>
      </router-link>
    </div>
  </main>
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
  h2{
    text-align: center;
    color : #00F3F9;
    text-shadow: 0px 0px 5px #00F3F9;
    font-size: 35px;
    font:Neons,calibri;
  }
  main{
    background-color: #1f0030;
    overflow-y: scroll;
  }
  #infos{
    display:flex;
    justify-content:space-around;
    padding-top: 50px;
  }
  #infos a{
    color:  #00F3F9;
    padding: 8px 8px 8px 32px;
    border : 1px solid #E120F0!important;
    box-shadow: 0 0 10px #E120F0 inset, 0 0 10px #E120F0;
    border-top-left-radius:30px;
    border-bottom-right-radius:30px;
    height: 267px;
    width : 35%;
    font-size: 35px;
    text-align: center;
  }

  .nombre {
    font-size: 45px;
    text-shadow: 2px 2px 5px #E120F0, -2px -2px 5px #E120F0, -2px 2px 5px #E120F0, 2px -2px 5px #E120F0;
    font-family: neonsregular;
  }
</style>
