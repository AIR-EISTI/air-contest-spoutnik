<template>
    <main >
        <section id="intro-section" class="top-container">

            <div class="text-image" data-0="top:0px;" data-500="top:-150px;">
              <article>
                    <h2 class="center">{{firstGroup.name}}</h2>
                    <div class="infos">
                        <div class="number-point normal-info">{{firstGroup.points}} points</div>
                        <div class="date normal-info">{{firstGroup.endDate | date}}</div>
                    </div>
                    <p>{{firstGroup.description}}</p>
                    <div class="center">
                      <router-link class="button" :to="{name: 'Groupe',params: { id: firstGroup.id }}">
                        Participer
                      </router-link>
                    </div>
              </article>
              <aside>
                  <img src="/static/imgs/ordi2.jpeg"/>
              </aside>
            </div>
        </section>
        <div class="scroll" data-0="top:0px;" data-500="top:-200px;">
        <section id="month-exercise" class="white-container">
            <h2 class="title center">{{firstExo.title}}</h2>
            <div class="infos">
                <div class="number-point small-info">{{firstExo.points}}</div>
                <div class="date small-info">{{firstExo.creatingDate | date}}</div>
            </div>
            <p>
                {{firstExo.description}}
            </p>
            <ul class="tags-fixe">
                <li class="tag" v-for="tag in firstExo.tags" :key="tag.id">#{{tag.tag}}</li>
            </ul>
            <div class="center">
              <router-link class="button" :to="{name: 'Exercice',params: { id: firstExo.id }}">
                Résoudre
              </router-link>
            </div>
        </section>
        <section >
            <h2 class="center">Les autres exercices</h2>
            <ul id="listeExercices">
                <router-link :to="{name: 'Exercice',params: { id: exo.id }}" v-for="exo in exos" :key="exo.id">
                    <li class="exercice white-container">
                        <h2 class="title">{{exo.title}}</h2>
                        <div class="infos">
                            <div class="number-point small-info">{{exo.points}}</div>
                            <div class="date small-info">{{exo.creatingDate | date}}</div>
                        </div>
                        <p>
                            {{exo.description}}
                        </p>
                        <ul class="tags-fixe">
                            <li class="tag" v-for="tag in exo.tags" :key="tag.id">#{{tag.tag}}</li>
                        </ul>
                    </li>
                </router-link>
                <router-link :to="{name: 'ListeExercices'}">
                  <li class="exercice plus white-container">
                    <a href="" class="button">En voir plus ></a>
                  </li>
                </router-link>
            </ul>
        </section>
        <section>
            <ul class="tags horizontal">
                <li v-for="tag in tags" :key="tag.key" :style="`border-color: #${tag.color}`">#{{tag.tag}}</li>
            </ul>
        </section>
        </div>
    </main>
</template>

<script>
import * as axios from 'axios'
import * as moment from 'moment'
import 'moment/locale/fr'
import * as skrollr from 'skrollr'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      exos: [],
      firstExo:{},
      tags: [],
      firstGroup:{}
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
    axios.get('/api/exercice?limit=4&start=0&search=')
    .then(response => {
      this.exos = response.data
      this.firstExo = this.exos.shift()
    }),
    axios.get('/api/group?limit=8&start=0&search=')
    .then(response => {
      this.firstGroup = response.data.pop()
    }),
    axios.get('/api/tag')
    .then(response => {
      this.tags = response.data
    })
    skrollr.init()
  }
}
</script>

<style scoped>

#intro-section
{
    background-color: cornflowerblue;
    background-image: url("/static/imgs/fond5.jpg");
    background-size: cover;
    color:white;
    background-attachment: fixed;
    min-height: calc(100vh - 130px);
    padding-bottom: 50px;
}

#intro-section .text-image
{
    position: relative;
}

#intro-section p
{
  font-size: 1.2em;
}

#listeExercices
{
    max-width:none;
}

#listeExercices .plus
{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border:none;
    background-color: transparent;
    box-shadow: none;
}

#listeExercices .plus .button
{
    background-color:lightsteelblue;
    color:black;
}


a
{
    text-decoration: none;
}

#month-exercise
{
    height: 500px;
    width: 1000px;
    max-width: calc(100vw - 50px);
    margin: auto;
    margin-bottom: 30px;
}

.scroll
{
    position: relative;
}
</style>
