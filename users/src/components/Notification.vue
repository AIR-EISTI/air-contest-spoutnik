<template lang="html">
  <div :class="['notif', {active: msg}, type]">
    <span>{{msg}}</span>
    <img alt="Fermé" src="/static/icons/IcoMoon/SVG/272-cross.svg" @click="$emit('close')">
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: [
    'msg',
    'type',
    'date'
  ]
}
</script>

<style lang="css">
.notif {
  width: 75%;
  left: 12.5%;
  position: absolute;
  padding: 5px;
  top: -100px;
  opacity: 0;
  transition: top 1s, opacity 1s;
  display: flex;
}

.notif.error {
  background: #ff8c8c;
}

.notif.info {
  background: #a3edb6;
}

.notif > span {
  flex-grow: 1;
}

.notif > img {
  margin-right: 5px;
}

.notif.active {
  top: 60px;
  opacity: 1;
}

@media (max-width: 700px) {
  .notif {
    left: auto;
    right: 25px;
  }
  .notif.active {
    top: 25px;
  }
}
</style>
