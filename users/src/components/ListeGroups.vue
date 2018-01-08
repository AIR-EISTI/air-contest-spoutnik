<template>
  <main>
      <div class="top-container center-big-container">
        <h2>Tournois en cours</h2>
        <div class="grid-1">
          <router-link :to="{name: 'Groupe',params: { id: group.id }}" class="text-image tournoi white-container" v-for="group in tournaments" :key="group.id">
            <article>
                      <h2 class="center">{{group.name}}</h2>
                      <div class="infos">
                          <div class="number-point normal-info">{{group.points}} points</div>
                          <div class="date normal-info">{{group.publicationDate | date}}</div>
                      </div>
                      <p>{{group.description}}</p>
            </article>
            <aside>
                <img src="/static/imgs/ordi2.jpeg"/>
            </aside>
          </router-link>
        </div>
      </div>
      <div class="center-big-container">
       
        <h2>Les Autres Groupes</h2>
        <div class="grid-2">
          <router-link :to="{name: 'Groupe',params: { id: group.id }}" style="background-image:url('/static/imgs/ordi2.jpeg')" v-for="group in groups" :key="group.id">
            <div class="white-container tournoi background">
              
              <article>
                      <h2 class="center">{{group.name}}</h2>
                      <div class="infos">
                          <div class="number-point normal-info">{{group.points}} points</div>
                          <div class="date normal-info">{{group.publicationDate | date}}</div>
                      </div>
                      <p>{{group.description}}</p>
              </article>
            </div>
          </router-link>
        </div>
      </div>

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
      tournaments: []
    }
  },
  mounted () {
    this.changePage(0)
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
      // this.pageVisible = id
      // let start = ((id - 1) * this.limit)
      axios.get('/api/group')
      .then(response => {
        this.sortGroups(response.data)
        scroll(0, 0)
      })
    },
    sortGroups (listGroups) {
      listGroups.forEach(element => {
        if (moment().add(1, 'day').isAfter(moment(element.endDate))) {
          this.groups.push(element)
        } else {
          this.tournaments.push(element)
        }
      })
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

 .grid-2
 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    /*grid-template-rows: 100px 100px 100px;*/
 }

 .grid-1
 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    /*grid-template-rows: 100px 100px 100px;*/
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

@media (max-width: 800px) {
  .grid-2
  {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
      /*grid-template-rows: 100px 100px 100px;*/
  }
}

</style>