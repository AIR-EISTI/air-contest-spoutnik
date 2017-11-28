<template>
  <div id="app">
    <menus></menus>
    <router-view/>
  </div>
</template>

<script>
import Menus from '@/components/Menu.vue'

export default {
  name: 'app',
  components:
  {
    'menus': Menus
  }
}
</script>

<style>
</style>
