<template lang="html">
  <main>
    <div id="titre">
      <h2 class="neon">Créer un exercice</h2>
    </div>

    <form>
      <div >
        <p>Titre : <input v-model="title" placeholder="Titre" id="formTitre" class="inputbox"> </p>
      </div>
      <div id="editor">
        <textarea class="inputbox"></textarea>
        <p>Preview :</p>
        <div contenteditable="true" v-model="description" v-html="compiledMarkdown"></div>
      </div>
      <extendable-content-input title="Fichier d'entrée" ref="inputFile"></extendable-content-input>
      <extendable-content-input title="Fichier de sortie" ref="outputFile"></extendable-content-input>
      <p>Tags : <input placeholder="tag1 tag2 tag3"id="tag" class="tag inputbox"></p>
      <div class="labelClass">
        <input type="checkbox" id="tournament" value="tournament" v-model="checkedTournament" class="inputbox">
        <label for="tournament">Activer mode tournois</label>
      </div>
      <div >
        <p>Nombre de points : <input v-model="points" placeholder="0" id="formPoint" class="inputbox"> </p>
      </div>
      <button class="button bottom" @click="sendResult">Publier</button>
    </form>
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
.labelClass{
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
main{
  overflow-y: auto;
}
form{
  color:  #00F3F9;
  padding: 8px 8px 8px 32px;
  border : 3px solid #E120F0!important;
  box-shadow: 0 0 10px #E120F0 inset, 0 0 10px #E120F0;
  border-radius:3px;
  border-top-left-radius:30px;
  border-bottom-right-radius:30px;
  height: 80%;
  width : 75%;
  font-size: 2em;
  text-align: center;
  margin:auto;
  position:relative;
}

.bottom{

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
