<template>
  <main>
      <div class="top-container center-big-container">
        <h2>Tournois en cours</h2>
        <div class="grid-1">
        <div class="text-image tournoi white-container">
          <article>
                  <h2 class="center">Tournoi d'hiver</h2>
                  <div class="infos">
                      <div class="number-point normal-info">50 points</div>
                      <div class="date normal-info">depuis 3j</div>
                  </div>
                  <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années...</p>
          </article>
          <aside>
              <img src="/static/imgs/ordi2.jpeg"/>
          </aside>
        </div>
        <div class="text-image tournoi white-container">
          <article>
                  <h2 class="center">Tournoi d'hiver</h2>
                  <div class="infos">
                      <div class="number-point normal-info">50 points</div>
                      <div class="date normal-info">depuis 3j</div>
                  </div>
                  <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 </p>
          </article>
          <aside>
              <img src="/static/imgs/ordi2.jpeg"/>
          </aside>
        </div>
        </div>
      </div>
      <div class="center-big-container">
       
        <h2>Les Autres Groupes</h2>
        <div class="grid-2">
          <div style="background-image:url('/static/imgs/ordi2.jpeg')">
            <div class="white-container tournoi background">
              
              <article>
                      <h2 class="center">Tournoi d'hiver</h2>
                      <div class="infos">
                          <div class="number-point normal-info">50 points</div>
                          <div class="date normal-info">depuis 3j</div>
                      </div>
                      <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 </p>
              </article>
            </div>
          </div>
          <div style="background-image:url('/static/imgs/ordi2.jpeg')">
            <div class="white-container tournoi background">
              
              <article>
                      <h2 class="center">Tournoi d'hiver</h2>
                      <div class="infos">
                          <div class="number-point normal-info">50 points</div>
                          <div class="date normal-info">depuis 3j</div>
                      </div>
                      <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 </p>
              </article>
            </div>
          </div>
          <div style="background-image:url('/static/imgs/ordi2.jpeg')">
            <div class="white-container tournoi background">
              
              <article>
                      <h2 class="center">Tournoi d'hiver</h2>
                      <div class="infos">
                          <div class="number-point normal-info">50 points</div>
                          <div class="date normal-info">depuis 3j</div>
                      </div>
                      <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 </p>
              </article>
            </div>
          </div>
          <div style="background-image:url('/static/imgs/ordi2.jpeg')">
            <div class="white-container tournoi background">
              
              <article>
                      <h2 class="center">Tournoi d'hiver</h2>
                      <div class="infos">
                          <div class="number-point normal-info">50 points</div>
                          <div class="date normal-info">depuis 3j</div>
                      </div>
                      <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 </p>
              </article>
            </div>
          </div>
        </div>
      </div>

  </main>
</template>

<script>
import * as moment from 'moment'
import 'moment/locale/fr'
export default {
  name: 'ListeGroups',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
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
  }
}
</script>

<style scoped>
 .tournoi
 {
   margin-bottom: 0px;
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

</style>