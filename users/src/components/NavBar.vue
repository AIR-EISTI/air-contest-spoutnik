<template>
    <nav id="navbar"    v-bind:class="{ noVisible: noVisible }"
                        data-0="background-color:rgba(255,255,255,0);border-color:rgba(0,0,0,0)"
                        data-50="background-color:rgba(255,255,255,255);border-color:rgba(230,230,230,1)">
        <img class="hamburger" src="/static/icons/IcoMoon/SVG/190-menu.svg" @click="displayMenu"/>
        <div class="content-menu">
        <router-link :to="{name: 'Home'}"><h1>Air-contest</h1></router-link>
        <ul>
            <router-link :to="{name: 'ListeExercices'}">
                <li data-0="border-color:rgba(0,0,0,0)" data-50="border-color:rgba(230,230,230,1)">
                    Exercices
                </li>
            </router-link>
            <router-link :to="{name: 'ListeGroupe'}">
                <li data-0="border-color:rgba(0,0,0,0)" data-50="border-color:rgba(230,230,230,1)">
                    Tournois
                </li>
            </router-link>
            <a href="https://ppr.contest.air-eisti.fr/api/token?redirectClientURI=http://localhost:8082/oauth" v-if="!username">
                <li data-0="border-color:rgba(0,0,0,0)" data-50="border-color:rgba(230,230,230,1)" id="connect-button">
                    Connexion
                </li>
            </a>
            <router-link :to="{name: 'User'}">
            <li data-0="border-color:rgba(0,0,0,0)" data-50="border-color:rgba(230,230,230,1)" v-if="username">
                    {{username}}
            </li>
            </router-link>
        </ul>
        </div>
    </nav>
</template>

<script>
import * as skrollr from 'skrollr'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      noVisible: true,
      username: ''
    }
  },
  mounted () {
    skrollr.init()
    this.username = localStorage.getItem('username')
  },
  methods: {
    displayMenu () {
      this.noVisible = !this.noVisible
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*-- -- nav bar -- --*/

#navbar
{
    display: flex;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    z-index: 5;
    background-color: transparent;
    flex-wrap: 0;
    border-bottom: 1px solid lightgray;
    padding: 13px 0px;
}

#navbar .content-menu
{
    display: flex;
    align-items: center;
    flex-grow: 1;
}

#navbar .hamburger
{
    display: none;
}

#navbar h1
{
    margin: 0;
    flex-shrink:0;
    padding:0px 10px;
    margin-left: 40px;
}

#navbar ul
{
    margin: 0;
    list-style-type: none;
    flex-grow: 1;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    padding: 0;
}

#navbar li
{
    display: inline-block;
    padding: 10px 20px;
    min-width: 100px;
    text-align: center;
    color:black;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-right: 30px;
}

#navbar #connect-button
{
    background-color: rgb(0, 102, 255);
    color:white;
}

#navbar #connect-button:hover
{
    background-color: rgb(0, 90, 224);
}

#navbar li:hover
{
  background-color: rgba(0,0,0,0.1);
  color:black;
}

#navbar a
{
    text-decoration: none;
    color:black;
}


@media only screen and (max-width: 700px)
{
    #app
    {
        margin-top: 0px !important;
    }


    /**** *** *** *** *** NAVBAR *** *** *** *** ****/

    #navbar h1
    {
        border-bottom: 1px solid black;
        padding: 5px;
        text-align: center;
        margin: 0;
    }
    #navbar
    {
        display: block;
        height: 100vh;
        color:black;
        background-color: rgba(255,255,255,0.9) !important;
        border-right: 1px solid rgb(100,100,100) !important;
        background-image: none;
        width: 200px;
        padding:15px;
    }

    #navbar .content-menu
    {
        display: block;
    }

    #navbar ul
    {
        padding: 0;
        text-align: left;
    }

    #navbar a
    {
        color:black;
    }
    #navbar ul
    {
      display: block;
    }
    #navbar li
    {
        display: block;
        padding: 0;
        margin: 10px 0px;
        padding: 10px 5px;
        text-align: left;
        color:black;
        border: none;
        font-weight: 800;
        border-left: 1px solid rgb(150,150,150);
        padding-left: 10px;
    }

    #navbar li:hover
    {
        background-color: transparent;
        border-color: black;
    }

    #navbar.noVisible .content-menu
    {
        display: none;
    }

    #navbar .hamburger
    {
        height: 50px;
        width: 50px;
        display: block;
    }

    #navbar.noVisible
    {
        width: 50px;
        height: 50px;
        background-color: transparent !important;
        border: none !important;
    }
}


</style>
