<template>
  <main>
      <form id="search" class="top-container">
        <input type="search" v-model="searchValue"/>
        <img src="/static/icons/IcoMoon/SVG/135-search.svg" @click="searchAction"/>
      </form>

      <section>
            <ul class="tags horizontal">
                <li v-for="tag in tags" :key="tag.key" :style="`border-color: #${tag.color}`">#{{tag.tag}}</li>
            </ul>
      </section>
      <ul id="listeExercices" class="center-big-container">
          <router-link :to="{name: 'Exercice',params: { id: exo.id }}" v-for="exo in exos" :key="exo.id">
            <li class="exercice white-container">
                <h2 class="title">{{exo.title}}</h2>
                <div class="infos">
                    <div class="number-point small-info">{{exo.points}}</div>
                    <div class="date small-info">{{exo.creatingDate | date}}</div>
                </div>
                <p class="description">
                    {{exo.description}}
                </p>
                <ul class="tags-fixe" >
                    <li class="tag" v-for="tag in exo.tags" :key="tag.id">#{{tag.tag}}</li>
                    <li class="tag" v-if="! exo.tags.length">no tags</li>
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
      pageVisible: 1,
      tags: []
    }
  },
  mounted () {
    axios.get('/api/tag')
      .then(response => {
        this.tags = response.data
      })
    this.getResult('')
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
      let start = ((id - 1) * this.limit)
      axios.get('/api/exercice?limit=' + this.limit + '&start=' + start + '&search=&markup=txt')
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
    getResult (search) {
      axios.get(`/api/exercice/quantity?search=` + search)
      .then(response => {
        this.numberExos = response.data.quantity
        this.numberPage = Math.ceil(this.numberExos / this.limit)
        this.pages = [...Array(this.numberPage).keys()].map(x => ++x)
        // create an array [1,2,..,number pages]
      })
      axios.get('/api/exercice?limit=' + this.limit + '&start=0&search=' + search + '&markup=txt')
      .then(response => {
        this.exos = response.data
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.$router.push('/404')
        }
      })
    },
    searchAction () {
      this.getResult(this.searchValue)
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

#search_button
{

}

</style>
