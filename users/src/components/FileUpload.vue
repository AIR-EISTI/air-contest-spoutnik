<template lang="html">
  <div class="upload">
    <input :id="inputId" type="file" v-on:change="fileChange">
    <div class="progress">
      <div></div>
    </div>
    <label :for="inputId" class="button">
      <img src="/static/icons/IcoMoon/SVG/049-folder-open.svg" width="16px">
      <span>{{ file === null ? 'Chosir un fichier' : file.name }}</span>
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
    }
  },
  name: 'FileUpload'
}
</script>

<style lang="css">
.upload input[type="file"] {
  display: none;
}

.upload label img {
  filter: invert(100%);
}

.upload label {
  cursor: pointer;
  width: auto;
  overflow: hidden;
  margin-top: 0;
}
.upload label > span {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
}
.upload {
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload .progress {
  flex-grow: 1;
  background-color: #edf9ff;
  height: 5px;
  margin: 0 10px;
}

.upload .progress > div {
  background-color: navy;
  height: 100%;
  width: 50%;
}
</style>
