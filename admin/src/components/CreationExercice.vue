<template lang="html">
  <main>
    <div class="titre">
      <h2 class="neon">Créer un exercice</h2>
    </div>
    <div class="top container">
      <label>Titre : <input v-model="title" placeholder="Titre" id="formTitre" class="inputbox"></label>
    </div>
    <div class="main container">
      <div class="editor">
        <textarea class="inputbox" v-model="description"></textarea>
        <div class="separator"></div>
        <div contenteditable="true" v-html="compiledMarkdown"></div>
      </div>
    </div>
    <div class="bottom container">
      Tags : <input placeholder="tag1 tag2 tag3"id="tag" class="tag inputbox">
      Nombre de points : <input v-model="points" placeholder="0" id="formPoint" class="inputbox">
      <button class="button bottom" @click="sendResult">Publier</button>
    </div>
  </main>
</template>

<script>
import * as marked from 'marked'
import * as axios from 'axios'
import ExtendableContentInput from '@/components/ExtendableContentInput'

export default {
  name: 'CreationExercice',
  data () {
    return {
      title: '',
      description: '',
      content: '',
      inputFile: '',
      outputFile: '',
      points: 0,
      creatingDate: 0,
      checkedTournament: false,
      tags: []
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.description)
    }
  },
  methods: {
    sendResult: function () {
      axios.post('/api/exercice', {
        title: this.title,
        description: this.description,
        inputFile: this.$refs.inputFile.fileContent,
        outputFile: this.$refs.outputFile.fileContent,
        points: this.points,
        tournament: this.checkedTournament,
        creatingDate: Date.now(),
        tags: [],
        groups: []
      });
    }
  },
  components: {
    'ExtendableContentInput': ExtendableContentInput,
  }
}
</script>

<style  scoped lang="css">
.editor {
  display: flex;
  height: 100%;
}

.editor * {
  flex: 1;
}

.editor .separator {
  height: 100;
  flex: 0;
  border: 2px solid #E120F0!important;
  box-shadow: 0 0 10px #E120F0 inset, 0 0 10px #E120F0;
  border-radius: 5px;
}

.editor textarea {
  border: none;
}

.labelClass{
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
main{
  overflow-y: auto;
}

input{
  height: 1.8em;
  font-size: 27px;
  outline:0;
  border:0;
  padding-bottom: -50px;
  border-bottom: 1px solid #00FE00;
}

input::placeholder {
    color: #00FE00;
    opacity: 0.7;
}
.inputbox{
  background-color: #1f0030;
  color: #00FE00;
}

textarea{
  background-color: #350a42;
}
</style>
