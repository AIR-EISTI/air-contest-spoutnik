<template lang="html">
  <main>
    <div id="titre">
      <h2 class="neon">Bienvenue dans votre page administrateur </h2>
    </div>
    <div id="infos">
      <div id="nbUsers">
        <p>bidule</p>
      </div>
      <div id="nbExercies">
        <p>prout</p>
      </div>
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
  }
  #infos div{
    color:  #00F3F9;
    padding: 8px 8px 8px 32px;
    border : 1px solid #E120F0!important;
    box-shadow: 0 0 10px #E120F0 inset, 0 0 10px #E120F0;
    border-top-left-radius:30px;
    border-bottom-right-radius:30px;
    height: 267px;
    width : 35%;

  }
</style>
