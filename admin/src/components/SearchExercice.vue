<template lang="html">
  <main>
    <div id="titre">
      <h2 class="neon">Liste des exercices</h2>
    </div>
    <div class="top container">
      <input type="search" class="inputField" v-on:keyup="searchAction" v-model="searchValue"/>
      <img src="/src/assets/icons/IcoMoon/SVG/135-search.svg" class="imgNeonSearch unselectable" @click="searchAction"/>
    </div>
    <div class="main container">
      <div v-for="(exo, index) in exos" :key="exo.id" >
        <div :class="{ deleted: isDeleted==index, exo: isDeleted!=index}" class="exoItem">

          <div class="titreExo">{{exo.title}}</div>
          <div class="number-point small-info"><span class="nbPoints">{{exo.points}}</span> Points</div>
          <div class="date small-info">{{exo.creatingDate | date}}</div>


          <div class="infosDescription">
              {{exo.description}}
          </div>

          <div class="infosTag">
            <ul class="tags-fixe">
                <li class="tag" v-for="tag in exo.tags" :key="tag.id">#{{tag.tag}}</li>
            </ul>
          </div>
          <div class="infosGroupe" >
            <ul class="group-fixe">
                <li class="groupLi" v-for="group in exo.groups" >{{group.name}}</li>
            </ul>
          </div>
          <div class="icons">
            <div v-on:click="selectage(exo, index)"  class="icons1 unselectable" v-bind:class="{imgNeonGreen: (selectedExos.includes(exo.id)), imgNeonEmpty: !(selectedExos.includes(exo.id))}"><img src="/src/assets/icons/IcoMoon/SVG/273-checkmark.svg" class="unselectable"  v-bind:class="{imgNeonGreenPic: (selectedExos.includes(exo.id)), imgNeonEmptyPic: !(selectedExos.includes(exo.id)) }"></div>
            <div class="icons2">
              <img src="/src/assets/icons/IcoMoon/SVG/006-pencil.svg" alt="modifier" class="imgNeon unselectable">
              <img src="/src/assets/icons/IcoMoon/SVG/272-cross.svg" alt="supprimer" v-on:click="deletage(exo, index)" class="imgNeonRed unselectable">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom container"  v-bind:class="{ active: isActive }">

    <form id="groupForm">
      <div id="selectionGroup">
        <div id="groupName">
          <select class="inputField" v-model="selected" v-on:change="changeSelection()">
            <option disabled value="">Nom du groupe</option>
            <option v-for="(group, index) in listGroup" :value="group.value">
              {{group.text}}
            </option>
          </select>

        </div>
        <div id="description">
          {{groupSelected && groupSelected.description||'description'}}
        </div>
        <div id="pts">
          <span class="nbPoints">{{groupSelected && groupSelected.points||'0'}}</span> points
        </div>
        <div id="tournois">
          <div  v-bind:class="{isHidden: groupSelected.endDate+0<Math.floor(Date.now()), isHidden: !(groupSelected.endDate)}">
            Tournois Actif <br/>
            {{groupSelected.publicationDate | date}} - {{groupSelected.endDate | date}}
          </div>
        </div>
      </div>
      <button class="button bottom" @click="addExercice" v-bind:class="{ active: isActive }">Ajouter</button>
    </form>

    </div>
  </main>
</template>


<script>
import * as axios from 'axios'
import * as moment from 'moment'
import UtilsAuth from '@/utils/UtilsAuth'
import 'moment/locale/fr'

function debounce (func, wait) {
  let timeoutId = null
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(func.bind(this, ...arguments), wait)
  }
}

export default {
  name: 'SearchExercice',
  data () {
    return {
      exos: {},
      listGroup: [],
      objGroup:{},
      arrayGroup: [],
      item: {
        value: '',
        text: ''
      },
      searchText: '',
      desc:"",
      selectedExos: [],
      selectedExosIndex:[],
      selected:'',
      groupSelected:{},
      isDeleted: -1,
      searchValue: "",
      isActive: false,
      isActiveT: false,
      isNeon: true,
    }
  },

  mounted () {
    UtilsAuth.authRequest.get("api/exercice").then(response => {
      this.exos = response.data
      //this.selectedExos.push(-1)
    })
    UtilsAuth.authRequest.get("api/group").then(response => {
      this.objGroup=response.data
      var bidule = {}
      var superArray = []
      this.objGroup.forEach(function(group){
        console.log(group.id+" "+group.name)
         bidule = {value : group.id, text : group.name+""}
         superArray.push(bidule)
      })
      this.listGroup=superArray;

    })
  },

  methods: {
    deactivateValidation(){
      this.isActive = !this.isActive;
      this.selectedExos = []
      this.selected = ""
      this.groupSelected = {}
      UtilsAuth.authRequest.get("api/exercice").then(response => {
        this.exos = response.data
      })
    },
    searchAction : debounce(function () {
      this.getResult(this.searchValue)
    }, 500),
    getResult (search) {
      UtilsAuth.authRequest.get(`/api/exercice?search=` + search)
      .then(response => {
        this.exos = response.data
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.$router.push('/404')
        }
      })
    },
    changeSelection: function (){
      UtilsAuth.authRequest.get("api/group/"+this.selected).then(response => {
        this.groupSelected = response.data
      })
    },
    addExercice: function () {
      if(this.selected){

        var groupNb = this.selected
        var exoEnCours
        this.selectedExos.forEach(function(exoNb){
          UtilsAuth.authRequest.get("api/exercice/"+exoNb).then(response => {
            exoEnCours = response.data
            var groupePourri = []
            exoEnCours.groups.forEach(function(groupeee){
              groupePourri.push(Number(groupeee.id))
            })
            groupePourri.push(groupNb)
            var uniqueGroup = []
            for ( var i = 0; i < groupePourri.length; i++ ) {
                var current = groupePourri[i];
                if (uniqueGroup.indexOf(current) < 0) uniqueGroup.push(current);
            }
            if(uniqueGroup!=exoEnCours.groups){
              UtilsAuth.authRequest.put('/api/exercice/'+exoNb, {
                title: exoEnCours.title,
                description: exoEnCours.description,
                inputFile: exoEnCours.inputFile,
                outputFile: exoEnCours.outputFile,
                points: exoEnCours.points,
                tournament: exoEnCours.tournament,
                creatingDate: exoEnCours.creatingDate,
                tags: exoEnCours.tags,
                groups: uniqueGroup
              });
              UtilsAuth.authRequest.get("api/exercice/"+exoNb).then(response => {
                newGroups: response.data
              });
            }

            uniqueGroup = []
            groupePourri = []

          })

        })
        this.isActive = !this.isActive;
        setTimeout(() => this.deactivateValidation(), 1500);
      }

    },
    deletage : function(exo, index){

      axios.delete("api/exercice/"+exo.id)
      this.isDeleted = index
      setTimeout(() => this.deletageCSS(index), 1000)
    },
    deletageCSS : function(index){
      this.$delete(this.exos,index)
      this.isDeleted=-1
    },
    selectage: function(exo, index){
      if (!this.selectedExos.includes(exo.id)){
        this.selectedExos.push(exo.id)
        this.selectedExosIndex.push(index)
      }else{
        var indexSearched = this.selectedExos.indexOf(exo.id);
        this.selectedExos.splice(indexSearched, 1)
        var indexSearchedIndex = this.selectedExos.indexOf(index);
        this.selectedExosIndex.push(indexSearchedIndex)
      }
    }
  },
  computed: {
    // Filtering the suggestion based on the input
    matches () {
      return this.suggestions.filter((obj) => {
        return obj.city.indexOf(this.value) >= 0
      })
    },

    openSuggestion () {
      return this.selection !== '' &&
             this.matches.length !== 0 &&
             this.open === true
    }

  },
  filters: {
    date: function (value) {
        return `${moment(value).format('LL')}`
    },
    dateTitle: function (value) {
      return moment(value).format('LLL')
    }
  }
}
</script>

<style scoped lang="css">
.active{

  text-shadow: 2px 2px 5px #E120F0, -2px -2px 5px #E120F0, -2px 2px 5px #E120F0, 2px -2px 5px #E120F0;
  border : 3px solid #00FE00!important;
  box-shadow: 0 0 10px #00FE00 inset, 0 0 10px #00FE00;
  transition-timing-function: cubic-bezier(0,.5,1,.58);
  transition-duration: 1s ;
}
.active:hover{
  text-shadow: 2px 2px 5px #E120F0, -2px -2px 5px #E120F0, -2px 2px 5px #E120F0, 2px -2px 5px #E120F0;
  border : 3px solid #00FE00!important;
  box-shadow: 0 0 10px #00FE00 inset, 0 0 10px #00FE00;
}
.unselectable{
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.imgNeonSearch{
  margin-top: 12px;
  margin-left: 7px;
  height: 60%;
  display: inline-block;
  filter: drop-shadow( 0px 0px 5px #00F3F9);
  vertical-align: middle;

  /* top: 50%; /* poussé de la moitié de hauteur du référent */
  /*transform: translateY(-50%); /* tiré de la moitié de sa propre hauteur */
}
.imgNeonSearch:hover{

  filter: drop-shadow( 0px 0px 8px #00F3F9);
  cursor: pointer;

}

.imgNeon{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 5px #00F3F9);
  border : 3px solid #000000!important;
  box-shadow: 0 0 5px #00F3F9 inset;
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
.imgNeonEmpty{
  width : 30px;
  height: 30px;
  border : 3px solid #000000!important;
  box-shadow: 0 0 5px #00F3F9 inset, 0 0 2px #00F3F9;
  cursor:pointer;
  transition-timing-function: cubic-bezier(0,.5,1,.58);
  transition-duration: 0.3s ;
  overflow:hidden;
}
.imgNeonEmptyPic{
  margin:-1px;
  padding:1px;
  opacity: 0;
}
.imgNeonGreenPic{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 5px #00FE00);
  cursor:pointer;
  transition-timing-function: cubic-bezier(0,.5,1,.58);
  transition-duration: 0.3s ;
}
.imgNeonGreen{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 5px #00FE00);
  border : 3px solid #000000!important;
  box-shadow: 0 0 5px #00FE00 inset;
  cursor:pointer;
  transition-timing-function: cubic-bezier(0,.5,1,.58);
  transition-duration: 0.3s ;
}
.imgNeon:hover{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 5px #00F3F9);
  box-shadow: 0 0 5px #00F3F9 inset, 0 0 5px #00F3F9;
  cursor:pointer;
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

.deleted{
  color:#000000;
  border : 3px solid #000000!important;
  box-shadow: 0 0 0px #000000 inset, 0 0 0px #000000;
  border-bottom-left-radius:15px;
  border-top-right-radius:15px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 0;
  display: flex;
  transition: box-shadow 0.3s ease-in-out;
}
.deleted .imgNeonEmpty{
  filter: drop-shadow( 0px 0px 0px #000000);
  box-shadow: 0 0 0px #000000 inset, 0 0 0px #000000;
  transition: box-shadow 0.3s ease-in-out;
}
.deleted .imgNeon{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 0px #000000);
  box-shadow: 0 0 0px #000000 inset, 0 0 0px #000000;
  transition: box-shadow 0.3s ease-in-out;
}
.deleted .imgNeonRed{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 0px #000000);
  box-shadow: 0 0 0px #000000 inset, 0 0 0px #000000;
  transition: box-shadow 0.3s ease-in-out;
}
.deleted .imgNeon:hover{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 0px #000000);
  box-shadow: 0 0 0px #000000 inset, 0 0 0px #000000;
  transition: box-shadow 0.3s ease-in-out;
}
.deleted .imgNeonRed:hover{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 0px #000000);
  box-shadow: 0 0 0px #000000 inset, 0 0 0px #000000;
  transition: box-shadow 0.3s ease-in-out;
}



::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}



#groupForm{
  display:flex;
  flex:1;
}
#selectionGroup{
  display:flex;
  width: 100%;
  /* border : 3px solid #00F3F9!important;
  box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
  border-radius: 5px; */
  align-items: stretch;
  flex-grow: 0;
  height:85px;
  overflow: hidden;
  flex:1;
}
#blocker{
  width:5%;
}
#groupName{
  grid-column: 1;
  flex:1;
  flex-grow: 0;
}

#description{
  border : 3px solid #00F3F9!important;
  /* width:50%; */
  margin-left:5px;
  flex-shrink: 0;
  box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
  border-radius: 5px;
  flex-grow: 0;
  flex: 3 50%;
  overflow: hidden;
  text-overflow: ellipsis;
}
#pts{

  flex-shrink: 0;
  flex-grow: 0;
  flex: 1 10%;
  padding-left: 10px;
  overflow: hidden;
}
#tournois{
  width:15%;
  flex: 2 25%;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 20px;
  overflow: hidden;
}
.exo{
  border : 3px solid #00F3F9!important;
  box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
  border-bottom-left-radius:15px;
  border-top-right-radius:15px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 0;
  display: flex;
  height: 110px;
  overflow: hidden;
}
.infos1{
  display: flex;
  flex-direction: column;
}
.search{
  /*width: 10%!important;*/
  height: 10px!important;
}

.inputField{
   background: #530080;
   border : 3px solid #00F3F9!important;
   box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
   border-radius: 5px;
   overflow: hidden;
   font-size: 20px;
   position: relative;
   padding: 5px;
   outline:0;
   color:#00FE00;
   text-shadow: 0.5px 0.5px 1px #00FE00,
               -0.5px -0.5px 1px #00FE00,
               -0.5px 0.5px 1px #00FE00,
                0.5px -0.5px 1px #00FE00;
}

input{
  display: inline-block;
  width: 95%;
  height: 70%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
select{
  height: 40px;
  width: 268px;
}

.exoItem{
  display: flex;
  flex-flow: row wrap;
  padding-left:5px;
  padding-right: 5px;
}

/* .exoItem > * {
  border : 3px solid #00F3F9!important;
} */

.titreExo{
  font-size: 23px;
  font-weight: bold;
  flex: 1 100%;
}
.number-point{
  flex: 1 10%;
}
.date{
  flex: 1 10%;
  padding-top: 12px;;
}
.infosDescription{
  flex:3 30%;
  height: 90%;
  overflow-y: auto;

}
.infosTag{
  flex: 1 10%;
}
.infosGroupe{
  height: 90%;
  flex: 1 10%;
  overflow-y: auto;
}
.icons{
  text-align: right;
  flex: 1 10%;
}

.icons1{
  margin-left:auto;
  margin-right:0;
}
.icons2{
  margin-left:auto;
  margin-right:0;
}
.nbPoints{
  font-size: 30px;
  text-shadow: 0.5px 0.5px 1px #00F3F9,
              -0.5px -0.5px 1px #00F3F9,
              -0.5px 0.5px 1px #00F3F9,
               0.5px -0.5px 1px #00F3F9;
}
.groupLi{
  list-style-type: none;
}
.isHidden{
  display:none;
}


</style>
