<template>
  <main>
      <form id="search">
        <input type="search" v-model="searchValue"/>
        <img src="/static/icons/IcoMoon/SVG/135-search.svg" @click="searchAction()"/>
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
                <div class="infos">
                    <div class="number-point small-info">{{exo.points}}</div>
                    <div class="date small-info">{{exo.creatingDate | date}}</div>
                </div>
                <p>
                    {{exo.description}} dqzdq dqzdzqd zqdzqd zqdzqdq dzqdqdzq zqdqzdqzdzqdqdqzd qzdqdzzqd zqdqdzqdq
                </p>
                <ul class="tags-fixe">
                    <li class="tag">#snake</li>
                    <li class="tag">#graph</li>
                </ul>
            </li>
          </router-link>
      </ul>
      <ul id="pages" class="center-container">
          <li><img src="/static/icons/IcoMoon/SVG/288-backward2.svg" @click="previousPage()"/></li>
          <li v-for="idPage in pages" @click="changePage(idPage)">{{idPage}}</li>
          <li><img src="/static/icons/IcoMoon/SVG/289-forward3.svg" @click="nextPage()"/></li>
      </ul>

  </main>
</template>

<script>
import * as axios from 'axios'
import * as moment from 'moment'
import 'moment/locale/fr'
export default {
  name: 'ListeExercices',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      exos: {},
      numberExos: 0,
      numberPage: 0,
      limit: 8,
      pages: [],
      searchValue: '',
      pageVisible: 1
    }
  },
  mounted () {
    axios.get(`/api/exercice/quantity`)
      .then(response => {
        this.numberExos = response.data.quantity
        this.numberPage = Math.ceil(this.numberExos / this.limit)
        this.pages = [...Array(this.numberPage).keys()].map(x => ++x)
        // create an array [1,2,..,number pages]
      })
    axios.get('/api/exercice?limit=' + this.limit + '&start=1&search=')
      .then(response => {
        this.exos = response.data
        console.log(this.exos)
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.$router.push('/404')
        }
      })
  },
  filters: {
    date: function (value) {
      if (moment().add(1, 'day').isAfter(moment(value))) {
        return `${moment(value).fromNow()}`
      } else {
        return `le ${moment(value).format('LL')}`
      }
    },
    dateTitle: function (value) {
      return moment(value).format('LLL')
    }
  },
  methods: {
    changePage (id) {
      this.pageVisible = id
      let start = ((id - 1) * this.limit) + 1
      axios.get('/api/exercice?limit=' + this.limit + '&start=' + start + '&search=')
      .then(response => {
        this.exos = response.data
        scroll(0, 0)
      })
    },
    nextPage () {
      this.changePage(this.pageVisible + 1)
    },
    previousPage () {
      this.changePage(this.pageVisible - 1)
    },
    searchAction () {
      axios.get('/api/exercice?limit=' + this.limit + '&start=1&search=')
      .then(response => {
        this.exos = response.data
        console.log(this.exos)
      })
    }
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
    cursor: pointer;

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
