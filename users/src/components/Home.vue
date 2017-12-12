<template>
    <main >
        <section id="intro-section" class="top-container">

            <div class="text-image" data-0="top:0px;" data-500="top:-150px;">
                <article>
                        <h2 class="center">Tournoi d'hiver</h2>
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                        <div class="center">
                        <a href="" class="button">Participer</a>
                        </div>
                </article>
                <aside>
                    <img src="/static/imgs/ordi2.jpeg"/>
                </aside>
            </div>
        </section>
        <div class="scroll" data-0="top:0px;" data-500="top:-200px;">
        <section id="month-exercise" class="white-container">

            <h2 class="center">Exercice du mois</h2>
            <br/>
            <div class="center">
                    <a href="" class="button">Participer</a>
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
                <h2 class="center">Les tags</h2>
                <li>#tournoi</li>
                <li>#jeu</li>
                <li>#labyrinthe</li>
                <li>#snake</li>
                <li>#graph</li>
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
      exos: {}
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
    axios.get('/api/exercice?limit=3&start=0&search=')
    .then(response => {
      this.exos = response.data
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
