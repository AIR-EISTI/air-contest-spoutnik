<template>
  <main>
      <form id="search" class="top-container">
        <input type="search" v-model="searchValue"/>
        <img src="/static/icons/IcoMoon/SVG/135-search.svg" @click="searchAction"/>
      </form>
      <div class="top-container center-big-container">
        <h2>Tournois en cours</h2>
        <div class="grid-1">
          <router-link :to="{name: 'Groupe',params: { id: group.id }}" class="text-image tournoi white-container" v-for="group in tournaments" :key="group.id">
            <article>
                      <h2 class="center">{{group.name}}</h2>
                      <div class="infos">
                          <div class="number-point normal-info">{{group.points}} points</div>
                          <div class="date normal-info">{{group.endDate | date}}</div>
                      </div>
                      <p>{{group.description}}</p>
            </article>
            <aside>
                <img :src="group.imageUrl"/>
            </aside>
          </router-link>
        </div>
      </div>
      <div class="center-big-container">

        <h2>Les Autres Groupes</h2>
        <div class="grid-2">
          <router-link :to="{name: 'Groupe',params: { id: group.id }}" :style="`background-image:url('${group.imageUrl}')`" v-for="group in groups" :key="group.id">
            <div class="white-container tournoi background">

              <article>
                      <h2 class="center">{{group.name}}</h2>
                      <div class="infos">
                          <div class="number-point normal-info">{{group.points}} points</div>
                          <div class="date normal-info">{{group.endDate | date}}</div>
                      </div>
                      <p>{{group.description}}</p>
              </article>
            </div>
          </router-link>
        </div>
      </div>
      <ul id="pages" class="center-big-container">
          <li><img src="/static/icons/IcoMoon/SVG/288-backward2.svg"/></li>
          <li v-for="idPage in pages">{{idPage}}</li>
          <li><img src="/static/icons/IcoMoon/SVG/289-forward3.svg"/></li>
      </ul>

  </main>
</template>

<script>
import * as moment from 'moment'
import * as axios from 'axios'
import 'moment/locale/fr'
export default {
  name: 'ListeGroups',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      groups: [],
      tournaments: [],
      numberGroups: 0,
      numberPage: 8,
      limit: 8,
      pages: [],
      searchValue: '',
      pageVisible: 1
    }
  },
  mounted () {
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
      axios.get('/api/group?limit=' + this.limit + '&start=' + start + '&search=')
      .then(response => {
        this.sortGroups(response.data)
        scroll(0, 0)
      })
    },
    getResult (search) {
      axios.get(`/api/group/quantity?search=` + search)
      .then(response => {
        this.numberGroups = response.data.quantity
        this.numberPage = Math.ceil(this.numberGroups / this.limit)
        this.pages = [...Array(this.numberPage).keys()].map(x => ++x)
        // create an array [1,2,..,number pages]
      })
      axios.get('/api/group?limit=' + this.limit + '&start=0&search=' + search)
      .then(response => {
        this.sortGroups(response.data)
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.$router.push('/404')
        }
      })
    },
    sortGroups (listGroups) {
      this.groups = []
      this.tournaments = []
      listGroups.forEach(element => {
        if (moment().add(1, 'day').isAfter(moment(element.endDate))) {
          this.groups.push(element)
        } else {
          this.tournaments.push(element)
        }
      })
    },
    searchAction () {
      this.getResult(this.searchValue)
    }
  }
}
</script>

<style scoped>

  a
  {
      text-decoration: none;
      color:black;
  }

  .white-container:hover
  {
    border-color: navy !important;

  }

 .tournoi
 {
   margin-bottom: 0px;
   min-height: 300px;
 }



 .grid-2 *
 {
   background-size: cover;
   position: relative;
 }

.grid-2 .background
{

  background-color: rgba(255,255,255,0.9);
}



</style>
