<template lang="html">
  <main>
    <div id="titre">
      <h2 class="neon">Fichiers</h2>
    </div>
    <div class="top main container">
      <ul v-if="uploads.length">
        <li v-for="(upload, index) in uploads" :key="upload.id">
          <div>
            <a :href="`/files/${upload.id}-${upload.filename}`">{{upload.id}}-{{upload.filename}}</a>
            <img src="/src/assets/icons/IcoMoon/SVG/272-cross.svg" alt="supprimer" class="imgNeonRed unselectable" @click="deleteUpload(index)">
          </div>
        </li>
      </ul>
      <p v-else>
        Aucun fichier uploadés..
      </p>
    </div>
    <div class="bottom container">
      <form>
        <p>
          Ajouter un nouveau fichier :
        </p>
        <file-input @fileChange="fileChange"></file-input>
        <button class="button bottom" @click="uploadFile">Ajouter</button>
      </form>
    </div>
  </main>
</template>

<script>
import * as axios from 'axios'
import FileInput from '@/components/FileInput'

export default {
  name: 'FileUpload',
  components: {
    'FileInput': FileInput
  },
  data () {
    return {
      uploads: [],
      file: null
    }
  },
  mounted () {
    axios.get(`/api/upload`)
      .then((response) => {
        this.uploads = response.data
      })
  },
  methods: {
    fileChange (file) {
      this.file = file
    },
    uploadFile () {
      if (this.file === null)
        return;
      let data = new FormData()
      data.append('file', this.file)
      axios.post(`/api/upload`, data)
        .then((response) => {
          this.uploads.push(response.data)
        })
    },
    deleteUpload(index) {
      axios.delete(`/api/upload/${this.uploads[index].id}`)
        .then((response) => {
          this.$delete(this.uploads, index)
        })
    }
  }
}
</script>

<style lang="css" scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  border : 3px solid #00F3F9!important;
  box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
  border-bottom-left-radius:15px;
  border-top-right-radius:15px;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 5px;
}

ul li div {
  display: flex;
  align-items: center;
}

ul li div a {
  flex-grow: 1;
}

ul li div img {
  margin-right: 15px;
}

.imgNeonRed:hover{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 5px #e20000);
  box-shadow: 0 0 5px #e20000 inset, 0 0 5px #e20000;
  cursor:pointer;
  transition-timing-function: cubic-bezier(0,.5,1,.58);
  transition-duration: 0.10s ;
}

.imgNeonRed{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 5px #00F3F9);
  border : 3px solid #000000!important;
  box-shadow: 0 0 5px #00F3F9 inset;
  transition-timing-function: cubic-bezier(0,.5,1,.58);
  transition-duration: 0.3s ;
}

.bottom.container form {
  display: flex;
  width: 100%;
  align-items: center;
}

.bottom.container form p {
  margin-right: 20px;
}
</style>
