<template lang="html">
  <main>
    <div id="titre">
      <h2 v-bind:class="{ neon: isNeon, activeT: isActiveT }">{{firstnameT}} {{nameT}}</h2>
    </div>

    <form ref="test" id="test" v-bind:class="{ active: isActive }">
      <div >
        <p>Prénom : <input v-model="firstname" id="formFirstName" class="inputbox"> </p>
      </div>
      <div >
        <p>Nom : <input v-model="name" id="formName" class="inputbox"> </p>
      </div>
      <button class="button bottom" @click="sendResult" v-bind:class="{ active: isActive }">Valider</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      firstname: 'Kornakh',
      firstnameT: 'Kornakh',
      name: 'Zhardrazh',
      nameT: 'Zhardrazh',
      verouiller: 0,
      supprimer: 0,
      isActive: false,
      isActiveT: false,
      isNeon: true,
    }
  },
  methods: {
    sendResult () {
      this.isActive = !this.isActive;
      setTimeout(() => this.changeTitle(), 1000);
      setTimeout(() => this.deactivateValidation(), 3000);


    },
    changeTitle(){
      this.isNeon = !this.isNeon;
      this.isActiveT = !this.isActiveT
      this.firstnameT = "Modification";
      this.nameT = "Enregistrée";
    },
    deactivateValidation(){
      this.isNeon = !this.isNeon;
      this.isActive = !this.isActive
      this.isActiveT = !this.isActiveT;
      this.firstnameT = this.firstname;
      this.nameT = this.name;
    }
  }

}

</script>

<style lang="css">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:auto;
  position:relative;
}
input{
  height: 1.8em;
  font-size: 27px;
  outline:0;
  border:0;
  padding-bottom: -50px;
  /*border-bottom: 1px solid #00FE00;*/
}
.inputbox{
  background-color: #1f0030;
  color: #00FE00;
}
.bottom{
  position:absolute;
  align-self: center;
  border : 3px solid #E120F0!important;
  bottom:-23px;
}
.bottom:hover{
  color : #00F3F9;
  text-shadow: 2px 2px 5px #E120F0, -2px -2px 5px #E120F0, -2px 2px 5px #E120F0, 2px -2px 5px #E120F0;
  border : 3px solid #00F3F9!important;
  box-shadow: 0 0 10px #00F3F9 inset, 0 0 10px #00F3F9;
  text-decoration: none;
  cursor:pointer;
}
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
.activeT{
  text-align: center;
  color : #00FE00;
  text-shadow: 0px 0px 5px #00FE00;
  font-size: 35px;
  font-family: neonsregular;
}
</style>
