<template lang="html">
  <div class="input-file">
    <input :id="inputId" type="file" v-on:change="fileChange">
    <label :for="inputId" class="button">
      <img src="/static/icons/IcoMoon/SVG/049-folder-open.svg" width="16px">
      <span>{{ file === null ? 'Choisir un fichier' : file.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      file: null,
      inputId: 'file-upload-' + Math.floor(Math.random() * 100)
    }
  },
  methods: {
    fileChange (event) {
      this.file = event.target.files[0]
      this.$emit('fileChange', this.file)
    }
  },
  name: 'FileInput'
}
</script>

<style lang="css" scoped>
input[type="file"] {
  display: none;
}

label {
  cursor: pointer;
  width: auto;
  overflow: hidden;
  margin-top: 0;
}

label > span {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
}

label img {
  filter: invert(100%);
}
</style>
