<template>
    <nav id="navbar">
        <a href="index.html"><h1>Air-contest</h1></a>
        <ul>
            <a href="#"><li>Listes des exercices</li></a>
            <a href="#"><li>Les tournois</li></a>
            <router-link :to="{name: 'UserIndex'}">
            <a router-link :to="{name: 'Login'}"><li>Login</li></a>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
