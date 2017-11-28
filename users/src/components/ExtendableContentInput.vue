<template lang="html">
  <div class="extendable">
    <h3 @click="toggleExtended"><img src="/static/icons/IcoMoon/SVG/323-circle-right.svg" :class="{extended: extended}">{{title}}</h3>
    <div v-if="extended">
      <file-input @fileChange="fileChange"></file-input>
      <textarea placeholder="Coller le contenu" :value="fileContent"></textarea>
    </div>
  </div>
</template>

<script>
import FileInput from '@/components/FileInput'
export default {
  props: [
    'title'
  ],
  data () {
    return {
      fileContent: '',
      extended: false
    }
  },
  methods: {
    fileChange (file) {
      let reader = new FileReader()
      reader.onload = this.readFile
      reader.readAsText(file)
    },
    readFile (evt) {
      if (evt.target.readyState !== 2 || evt.target.error) {
        return
      }
      this.fileContent = evt.target.result
    },
    toggleExtended (evt) {
      this.extended = !this.extended
    }
  },
  components: {
    'FileInput': FileInput
  },
  name: 'ExtendableContentInput'
}
</script>

<style lang="css">
.extendable h3 {
  font-weight: normal;
  cursor: pointer;
}

.extendable h3 img {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.extendable textarea {
  width: 100%;
  min-height: 150px;
  resize: vertical;
}

.extendable img.extended {
  transform: rotate(90deg);
}
</style>
