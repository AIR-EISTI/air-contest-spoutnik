<template lang="html">
  <div class="extendable">
    <h3 @click="toggleExtended"><img src="/static/icons/IcoMoon/SVG/323-circle-right.svg" :class="{extended: extended}">{{title}}</h3>
    <div :class="{notextended: !extended}">
      <file-input @fileChange="fileChange"></file-input>
      <textarea v-if="!code" placeholder="Coller le contenu" v-model="fileContent"></textarea>
      <div v-else id="editor"></div>
    </div>
  </div>
</template>

<script>
import FileInput from '@/components/FileInput'

export default {
  props: [
    'title',
    'code'
  ],
  data () {
    return {
      fileContent: '',
      extended: false,
      editor: null
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
      if (this.editor) {
        this.editor.setValue(this.fileContent)
      }
    },
    toggleExtended (evt) {
      this.extended = !this.extended
      if (this.code && this.extended && !this.editor) {
        // eslint-disable-next-line
        this.editor = ace.edit('editor')
        this.editor.setTheme('ace/theme/twilight')
        this.editor.session.setMode('ace/mode/python')
        this.editor.setValue(this.fileContent)
        this.editor.getSession().on('change', () => {
          this.fileContent = this.editor.getValue()
        })
      }
    }
  },
  mouted () {
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

.extendable .notextended {
  display: none;
}

#editor {
  height: 500px;
}
</style>
