<template lang="html">
  <main>
    
    <h2 class="neon">Les tags</h2>
    
    <div class="main top container">
        <span class="tag" v-for="tagEle in tags" :style="`border-color: #${tagEle.color}`" @click="deleteTag(tagEle)">{{tagEle.tag}}</span>
    </div>
    <div class="bottom container">
      <input v-model="title" placeholder="Titre" id="formTitre" class="inputbox">
      <input class="jscolor" value="ab2567" v-model="color" >
      <button class="button bottom" @click="sendResult">Publier</button>
    </div>
  </main>
</template>


<script>
import "@/utils/jscolor.min.js"
import UtilsAuth from '@/utils/UtilsAuth'
export default {
  name: 'Tag',
  data () {
    return {
      isNeon: true,
      tags:[],
      color:"ab2567",
      titre:"",
    }
  },
  mounted () {
    UtilsAuth.authRequest.get('/api/tag')
      .then(response => {
        this.tags = response.data
      })
  },
  methods: {
    sendResult: function () {
      var newTag = {
        tag: this.title,
        color:this.color
      }
      console.log(newTag)
      UtilsAuth.authRequest.post('/api/tag', newTag)
      .then(response => {
        this.tags.push(newTag)
      });
      
    },
  }
}

</script>

<<style scoped>
  .tag
  {
    display:inline-block;
    border: 3px solid #00F3F9;
    box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    margin: 15px;
    height: 130px;
    width: 130px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    text-transform: uppercase;
    opacity: 0.7;
  }

  .bottom.container
  {
    display:flex;
  }
  #formTitre
  {
    height: 1.8em;
    font-size: 27px;
    outline: 0;
    border: 0;
    border-bottom-width: 0px;
    border-bottom-style: none;
    border-bottom-color: currentcolor;
    padding-bottom: -50px;
    border-bottom: 1px solid #00FE00;
    flex:1;
    background-color:transparent;
    color:#00FE00;
    vertical-align:middle;
    align-self: flex-end;
    margin-bottom:5px;
  }

  .jscolor
  {
    border-color:#00FE00;
    outline: 0;
    border: 3px solid #00F3F9;
    vertical-align:middle;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
  }

</style>

