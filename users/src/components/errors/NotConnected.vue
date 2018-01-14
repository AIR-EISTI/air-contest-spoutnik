<template lang="html">
  <div class="center-container">
    <h2>Vous devez vous connecter</h2>
    <img src="/static/imgs/4012.jpg">
    <div class="center">
      <a href="/api/token?redirectClientURI=http://localhost:8082/oauth" class="button">Se connecter</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotConnected'
}
</script>

<style lang="css" scoped>
img {
  width: 100%;
  display: inline-block;
}
h2 {
  text-align: center;
  border-bottom: 1px solid gray;
}
</style>
