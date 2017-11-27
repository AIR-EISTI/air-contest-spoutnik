<template lang="html">
  <div class="upload">
    <input id="output-file" type="file">
    <div class="progress">
      <div></div>
    </div>
    <label for="output-file" class="button">
      <img src="/static/icons/IcoMoon/SVG/201-upload3.svg" width="16px">
      Chosir un fichier
    </label>
  </div>
</template>

<script>
export default {
  name: 'FileUpload'
}
</script>

<style lang="css">
.upload input[type="file"] {
  display: none;
}

.upload label img {
  filter: invert(100%)
}

.upload label {
  cursor: pointer;
  width: auto;
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
