<template>
    <div class="center-big-container">
        <h2>Profile</h2>
        <div class="grid-2">
            <div class="white-container">
                <h3>Infos personelles...</h3>
                <div class="line-info">
                    <div>Nom :</div>
                    <div>{{surname}}</div>
                </div>
                <div class="line-info">
                    <div>Prenom :</div>
                    <div>{{firstname}}</div>
                </div>
                <div class="line-info">
                    <div>Authentifié par:</div>
                    <div>Lpmng</div>
                </div>
            </div>
            <div class="white-container">
                <h3>Quelques statistiques...</h3>
                <div class="line-info">
                    <div>Exercices résolus :</div>
                    <div> ?</div>
                </div>
                <div class="line-info">
                    <div>Points</div>
                    <div> ?</div>
                </div>
                <div class="line-info">
                    <div>Groupes résolu en entier :</div>
                    <div> ?</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      firstname:'',
      surname:''
    }
  },
  mounted () {
      console.log(localStorage.getItem('token'));
    var headers = {'Accept':'application/json','AUTHORIZATION':'Bearer '+localStorage.getItem('token')}
    axios.get(`/api/me`, {headers : headers})
      .then(response => {
        this.username = response.data.username
        this.firstname = response.data.firstname
        this.surname = response.data.surname
      })
  },
}
</script>

<style scoped>
    .line-info
    {
        width: 100%;
        padding: 7px 0px;
    }

    .line-info > *
    {
        display: inline-block;
    }

    .line-info > :first-child
    {
        min-width: 230px;
        font-weight: 800;
        font-size: 1.1em;
        color:black;
    }

    h3
    {
        color:cornflowerblue;
        font-size: 1.3em;
        margin: 10px 0px;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    }
</style>