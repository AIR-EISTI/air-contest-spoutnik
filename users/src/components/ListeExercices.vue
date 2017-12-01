<template>
  <main>
      <form id="search">
        <input type="search"/>
        <img src="/static/icons/IcoMoon/SVG/135-search.svg"/>
      </form>
      
      <section>
            <ul class="tags horizontal">
                <li style="border-color:lightblue;">#tournoi</li>
                <li style="border-color:darkorchid;">#graph</li>
                <li style="border-color:lightgreen;">#labyrinthe</li>
                <li style="border-color:orange;">#jeu</li>            
                
                <li style="border-color:lightseagreen;">#snake</li>
                 <li style="border-color:red;">#tournoi</li>
                <li style="border-color:darkorchid;">#graph</li>
                <li style="border-color:green;">#labyrinthe</li>
                <li style="border-color:lightsalmon;">#jeu</li>            
                
                <li style="border-color:lightseagreen;">#snake</li>
                <li style="border-color:green;">#labyrinthe</li>
                <li style="border-color:lightsalmon;">#jeu</li>            
                
                <li style="border-color:lightseagreen;">#snake</li>
                <li style="border-color:green;">#labyrinthe</li>
                <li style="border-color:lightsalmon;">#jeu</li>            
                
                <li style="border-color:lightseagreen;">#snake</li>
                
            </ul>
      </section>
      <ul id="listeExercices">
          <router-link :to="{name: 'Exercice',params: { id: exo.id }}" v-for="exo in exos">
            <li class="exercice white-container">
                <h2 class="title">{{exo.title}}</h2>
                <p>
                    {{exo.description}}
                </p>
                <ul class="tags-fixe">
                    <li class="tag">#snake</li>
                    <li class="tag">#graph</li>
                </ul>
            </li>
          </router-link>
      </ul>
      <ul id="pages" class="center-container">
          <li><img src="/static/icons/IcoMoon/SVG/288-backward2.svg"/></li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li><img src="/static/icons/IcoMoon/SVG/289-forward3.svg"/></li>
      </ul>

  </main>
</template>

<script>
import * as axios from 'axios'
export default {
  name: 'ListeExercices',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      exos: {}
    }
  },
  mounted () {
    axios.get(`/api/exercice`)
      .then(response => {
        this.exos = response.data
        console.log(this.exos)
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.$router.push('/404')
        }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a
{
    text-decoration: none;
    color:black;
}
#search
{
    width: 500px;
    display: block;
    margin: auto;
    position: relative;
    display: flex;
    margin-top: 25px;
    border-bottom:4px solid black;
    margin-bottom: 15px;
    max-width: calc(100vw - 40px);
}

#search input[type=search]
{
    width: 100%;
    border:none;
    border-radius: 0px;
    margin: 0;
    height: 38px;
    background-color: transparent;
    border-right: none;
    
}

#search img
{
    height: 28px;
    width: 28px;
    padding: 5px;
    border-left: none;
}

#listeExercices
{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    justify-content: center;

}

.exercice
{
    width: 300px;
    min-width: 300px;;
    max-height: 300px;
    margin: 15px;
    max-width: 500px;;
    display: flex;
    flex-direction: column;
}

.exercice:nth-child(odd)
{
    flex:1;
}

.exercice:nth-child(even)
{
    flex:1;
}   
/*
.exercice:nth-child(4n)
{
    
    flex: 1 !important;
}

.exercice:nth-child(4n -1)
{
    
    flex: 2 !important;
}*/

.exercice p
{
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1; 
}

.exercice .tags-fixe
{
    flex-shrink: 0;
}



#pages
{
    list-style-type: none;
    display: flex;
    max-width: 750px;
    margin: auto;
    padding: 0;
    justify-content: center;
}

#pages li
{
    background-color: white;
    border: 1px solid lightgray;
    padding: 5px 10px;
    margin:10px 20px 10px 0px;
    display: flex;

}

#pages li img
{
    width: 20px;
    height: 20px;
}

#search_button
{

}

</style>
