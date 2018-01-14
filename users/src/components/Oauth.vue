<template>
  <main class="top-container">
    <h2 class="center">Welcome {{username}} </h2>
  </main>
</template>

<script>
export default {
  name: 'Oauth',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username : ''
    }
  },
  mounted () {
    localStorage.setItem('monChat', this.$route.query['tokenContest'])
    localStorage.setItem('username', this.$route.query['username'])
    this.username = this.$route.query['username']
  }
}
</script>