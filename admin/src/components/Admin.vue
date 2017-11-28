<template lang="html">
  <main>
    <div>
      <h2 class="neon">Bienvenue dans votre page administrateur </h2>
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
  }

</style>
