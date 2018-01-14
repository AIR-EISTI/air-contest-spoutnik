<template lang="html">
  <main>
    <div id="titre">
      <h2 class="neon">Groupes</h2>
    </div>
    <div class="top main container">
      <ul v-if="groups.length">
        <li v-for="(group, index) in groups" :key="group.id" :class="{ deleted: isDeleted==index, exo: isDeleted!=index}" class="groupItem">
            <div class="nameGroup">{{group.name}}</div>
            <div class="number-point small-info"><span class="nbPoints">{{group.points}}</span> Points</div>

            <div class="infosDescription">
                {{group.description}}
            </div>
            <div class="tournois">
              <div  v-bind:class="{isHidden: !(group.endDate)}">
                Tournois Actif <br/>
                {{group.publicationDate | date}} - {{group.endDate | date}}
              </div>
            </div>

            <div class="icons">
              <img src="/src/assets/icons/IcoMoon/SVG/272-cross.svg" alt="supprimer" v-on:click="deletage(group, index)" class="imgNeonRed unselectable">
            </div>
        </li>
      </ul>
    </div>
    <div class="bottom container" v-bind:class="{ active: isActive }">
      <form id="zone">
        <div id="zone1">
          <span><input v-model="name" placeholder="Nom Nouveau Groupe" id="formName" class="inputbox"></span>
          <span><input v-model="image" placeholder="Image (url)" id="urlImage" class="inputbox"></span>
        </div>
        <div id="zone2">
          <textarea class="inputbox" id="formDesc" placeholder="Description" v-model="description"></textarea>
        </div>
        <div id="zone3">
          <span class="right">Fin (si tournois) <input v-model="endDate" id="datetime" type="date" class="inputbox"></span>
          <span class="right">Points <input v-model="points" placeholder="0" id="formPoints" class="inputbox"></span>
        </div>
        <button class="button bottom"  @click="addGroup" v-bind:class="{ active: isActive }">Ajouter</button>
      </form>
    </div>
  </main>
</template>

<script>
import * as axios from 'axios'
import * as moment from 'moment'
import 'moment/locale/fr'

export default {
  name: 'NewGroup',
  data () {
    return {
      groups: {},
      isDeleted: -1,
      name:"",
      description:"",
      endDate:null,
      points:0,
      image:"",
      isActive:false
    }
  },
  mounted () {
    axios.get(`/api/group`)
      .then((response) => {
        this.groups = response.data
      })
  },
  methods: {
    addGroup () {
      if (this.name === null || this.name =='')
        return;
      if(this.endDate){
        var dateFin = Date.parse(this.endDate)
        if (dateFin < Date.now()){
          dateFin = null;
        }
      }else{
        dateFin = null;
      }

      axios.post(`/api/group`,
      {
        name: this.name,
        description: this.description,
        publicationDate: Date.now(),
        endDate: dateFin,
        points: this.points
      }).then((response)=>{
        this.isActive = !this.isActive;
        setTimeout(() => this.deactivateValidation(), 1500);

      })
    },
    deactivateValidation(){
      this.isActive = !this.isActive;
      axios.get(`/api/group`)
        .then((response) => {

          this.groups = response.data
          this.name=""
          this.description=""
          this.endDate=null
          this.points=0
          this.image=""
        })
    },
    deletage : function(group, index){
      axios.delete("api/group/"+group.id)
      this.isDeleted = index
      setTimeout(() => this.deletageCSS(index), 1000)
    },
    deletageCSS : function(index){
      this.$delete(this.groups,index)
      this.isDeleted=-1
    }
  },
  filters: {
    date: function (value) {
        return `${moment(value).format('LL')}`
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

.deleted .imgNeonRed{
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
.deleted .nbPoints{
  text-shadow: 0.5px 0.5px 1px #000000,
              -0.5px -0.5px 1px #000000,
              -0.5px 0.5px 1px #000000,
               0.5px -0.5px 1px #000000;
}

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
  height: 90px;
  overflow: hidden;
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

.imgNeonRed:hover{
  width : 30px;
  height: 30px;
  filter: drop-shadow( 0px 0px 5px #e20000);
  box-shadow: 0 0 5px #e20000 inset, 0 0 5px #e20000;
  cursor:pointer;
  transition-timing-function: cubic-bezier(0,.5,1,.58);
  transition-duration: 0.10s ;
}

.groupItem{
  display: flex;
  flex-flow: row wrap;
  padding-left:5px;
  padding-right: 5px;
}


.nameGroup{
  font-size: 23px;
  font-weight: bold;
  flex: 1 100%;
}
.number-point{
  flex: 1 10%;
}
.tournois{
  flex: 3 20%;
  flex-shrink: 0;
  flex-grow: 0;
  padding-top: 12px;
}

.infosDescription{
  flex:3 30%;
  height: 90%;
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

.inputbox{
  background: #530080;
  border : 3px solid #00F3F9!important;
  box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
  border-radius: 5px;
  overflow: hidden;
  font-size: 16px;
  position: relative;
  padding: 5px;
  outline:0;
  color:#00FE00;
  font-weight: bold;
  /* text-shadow: 0.5px 0.5px 1px #00FE00,
              -0.5px -0.5px 1px #00FE00,
              -0.5px 0.5px 1px #00FE00,
               0.5px -0.5px 1px #00FE00; */
}
.inputbox::placeholder {
  color: #00FE00;
  opacity: 0.7;
}

#zone{
  display: flex;
  width:100%;
}

/* #zone > * {
  border : 3px solid #00F3F9!important;
} */
#zone1{
  flex-flow: row wrap;
  display: flex;
  flex:2 20%;
  width: 20%;
}
#zone2{
  flex: 3 50%;
  margin-right: 0;
  width:50%;
}

#zone3{
  flex-flow: row wrap;
  display: flex;
  width:30%;
  flex:1 30%;
  text-align: right;
}
#formName{
  width: 100%;
  height: 25px;
  margin:auto;
}

#formDesc{
  width: 80%;
  height: 78%;
  margin-right:10px;
  float: right;
}
#urlImage{
  width: 100%;
  margin:auto;
  height: 25px;
}

#datetime{
  width:55%;
  height: 25px;


}

#formPoints{
  height: 25px;
  width: 10%;
  margin-left:auto;
  margin-right:0;
}

.right{
  text-align: right;
  margin-left:auto;
  margin-right:0;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

.isHidden{
  display:none;
}

</style>
