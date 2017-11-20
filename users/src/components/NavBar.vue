<template>
    <nav id="navbar" v-bind:class="{ noVisible: noVisible }">
        <img class="hamburger" src="/static/icons/IcoMoon/SVG/190-menu.svg" @click="displayMenu"/>
        <div class="content-menu">
        <router-link :to="{name: 'Home'}"><h1>Air-contest</h1></router-link>
        <ul>
            <a href="#"><li>Listes des exercices</li></a>
            <a href="#"><li>Les tournois</li></a>
            <router-link :to="{name: 'Login'}"><li>Login</li></router-link>
        </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      noVisible: false
    }
  },
  methods: {
    displayMenu () {
      this.noVisible = !this.noVisible
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
