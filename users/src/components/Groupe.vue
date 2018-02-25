<template>
  <main>
    <!-- group description-->
    <div class="text-image tournoi">
        <article>
                      <h2 class="center">{{group.name}}</h2>
                      <div class="infos">
                          <div class="number-point normal-info">{{group.points}} points</div>
                          <div class="date normal-info">{{group.publicationDate | date}}</div>
                      </div>
                      <p class="description">{{group.description}}</p>
        </article>
        <aside>
            <img :src="group.imageUrl"/>
        </aside>
    </div>
    <!-- exercices-->
    <ul id="listeExercices" class="center-big-container">
        <router-link :to="{name: 'Exercice',params: { id: exo.id }}" v-for="exo in exercices" :key="exo.id">
          <li class="exercice white-container">
              <h2 class="title">{{exo.title}}</h2>
              <div class="infos">
                  <div class="number-point small-info">{{exo.points}}</div>
                  <div class="date small-info">{{exo.creatingDate | date}}</div>
              </div>
              <p class="description">
                  {{exo.description}}
              </p>
              <ul class="tags-fixe" v-if="exo.tags">
                  <li class="tag" v-for="tag in exo.tags" :key="tag.id">#{{tag.tag}}</li>
                  <li class="tag" v-if="! exo.tags.length">no tags</li>
              </ul>
          </li>
        </router-link>
    </ul>
  </main>
</template>

<script>
import * as axios from 'axios'
import * as moment from 'moment'
import 'moment/locale/fr'
export default {
  name: 'Groupe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      group: {},
      exercices: []
    }
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
  mounted () {
    moment.locale('fr')
    axios.get(`/api/group/${this.$route.params.id}?markup=html`)
      .then(response => {
        this.group = response.data
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.$router.push('/404')
        }
      })
    axios.get(`/api/exercice?group=${this.$route.params.id}`)
      .then(response => {
        this.exercices = response.data
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.exercice = []
        }
      })
  }
}
</script>
<style scoped>

   a
{
    text-decoration: none;
    color:black;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
