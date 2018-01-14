<template lang="html">
  <main>
    <div class="titre">
      <h2 class="neon">Créer un exercice</h2>
    </div>
    <div class="top container">
      <input v-model="title" placeholder="Titre" id="formTitre" class="inputbox">
    </div>
    <div class="main container">
      <div class="editor">
        <textarea class="inputbox" v-model="description"></textarea>
        <div class="separator"></div>
        <div v-html="compiledMarkdown"></div>
      </div>
    </div>
    <div class="bottom container">
      <div>
        <div class="file-input-container"> Fichier d'entrée <file-input ref="inputFile" @fileChange="fileChange('inputFile')"></file-input></div>
        <div class="file-input-container"> Fichier de sortie <file-input  ref="outputFile" @fileChange="fileChange('outputFile')"></file-input></div>
        <div id="tags" class="deroul">
          <input type="text" placeholder="tag1" id="tag" class="inputbox" v-model="tag">
          <div class="ideas-container">
            <div class="ideas">
              <div class="ele" v-for="tagEle in autoTags" @click="addTag(tagEle)">{{tagEle.tag}}</div>
            </div>
          </div>
          <div class="choices"><span class="ele" v-for="tagEle in tags" @click="deleteTag(tagEle)">{{tagEle.tag}}</span></div>
        </div>
        <input v-model="points" placeholder="0" id="formPoint" class="inputbox">
      </div>
      <button class="button bottom" @click="sendResult">Publier</button>
    </div>
  </main>
</template>

<script>
import * as marked from 'marked'
import * as axios from 'axios'
import UtilsAuth from '@/utils/UtilsAuth'
import ExtendableContentInput from '@/components/ExtendableContentInput'
import FileInput from '@/components/FileInput'

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
      tags: [], // tags del'exercice
      allTags :[], // liste des tous les tags
      tag:"", // tag en cours
      autoTags: [] // autocompletion tags
    }
  },
  mounted () {
    UtilsAuth.authRequest.get('/api/tag')
      .then(response => {
        this.allTags = response.data
      })
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.description)
    }
  },
  methods: {
    sendResult: function () {
      UtilsAuth.authRequest.post('/api/exercice', {
        title: this.title,
        description: this.description,
        inputFile: this.inputFile,
        outputFile: this.outputFile,
        points: this.points,
        creatingDate: Date.now(),
        tags: this.tags.map(o => o.id),
        groups: []
      });
    },
    deleteTag(tag)
    {
      var newTags = []
      this.tags.forEach(element => {
        if(element.id != tag.id)
          newTags.push(element)
      });
      this.tags = newTags
    },
    addTag(tag) {
      this.deleteTag(tag)
      this.tags.push(tag)
      this.tag = ""
      this.autoTags = []
    },
    fileChange (fileName) {
      let reader = new FileReader()
      reader.onload = this.readFile.bind(this, fileName)
      reader.readAsText(this.$refs[fileName].file)
    },
    readFile (fileName, evt) {
      if (evt.target.readyState !== 2 || evt.target.error) {
        return
      }
      this[fileName] = evt.target.result
    }
  },
  watch : {
    tag: function(newTag,oldTag) {
        if(newTag)
          this.autoTags =  this.allTags.filter(tag => tag.tag.indexOf(newTag) > -1)
    }
  },
  components: {
    'ExtendableContentInput': ExtendableContentInput,
    'FileInput': FileInput
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

/***********************/

.deroul .choices .ele
{
   display: inline-block;
   margin: 5px;
   min-width: 100px;
   border-radius: 0px 30px 0px 30px;
   padding: 5px 10px;
   border : 1px solid #E120F0!important;
   box-shadow: 0 0 10px #E120F0 inset, 0 0 10px #E120F0;

}

.deroul .ideas-container
{
  position: relative;
  margin: auto;
  /*width: 350px;*/
}

.deroul .ideas
{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  background: #530080;
  border : 1px solid #00F3F9!important;
  border-radius: 0px 0px 5px 5px;

  font-size: 20px;
  color:#00FE00;
}

.deroul .ideas .ele:hover
{
  background-color: #350a42;
}

.deroul input {
  width: 100%;
}

#tags .choices
{
  margin-top: 10px;
}

.top.container > input {
  width: 100%;
}

.bottom.container {
  min-height: 10%;
  height: auto;
}

.bottom.container > div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  width: 100%;
  margin-bottom: 25px;
}

.file-input-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

</style>
