<template>
  <main class="back-grey center">
      <section id="login-section">
        <p class="subtitle">Utilisez votre compte Air-eisti</p>
        <form>
            <div class="line">
                <label>Username:</label>
                <input type="text" placeholder="username">
            </div>
            <div class="line">
                <label>Password:</label>
                <input type="password" placeholder="password">
            </div>
            <div class="line">
                <input type="submit" value="Connection">
            </div>
        </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>