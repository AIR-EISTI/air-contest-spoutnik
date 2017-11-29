<template lang="html">
  <main class="exercice center-container">
    <div class="enonce">
      <h1>
        {{title}}
        <span class="date" :title="dateEnd | dateTitle">fin {{dateEnd | date}}</span>
        <span class="state">{{state}}</span>
      </h1>
      <div v-html="description"></div>
    </div>
    <div class="resultat white-container">
      <h2>Résultats</h2>
      <a :href="inputFile">Télécharger le jeu de données.</a>
      <extendable-content-input title="Sortie du programme" ref="output"></extendable-content-input>
      <extendable-content-input title="Code du programme" ref="code"></extendable-content-input>
      <button class="button" @click="sendResult">Envoyer</button>
    </div>
  </main>
</template>

<script>
import ExtendableContentInput from '@/components/ExtendableContentInput'
import * as moment from 'moment'
import 'moment/locale/fr'
import * as axios from 'axios'
export default {
  data () {
    return {
      inputFile: '',
      title: '',
      dateStart: 0,
      dateEnd: 0,
      description: '',
      state: ''
    }
  },
  components: {
    'ExtendableContentInput': ExtendableContentInput
  },
  mounted () {
    moment.locale('fr')
    axios.get(`/api/exercice/${this.$route.params.id}?markup=html`)
      .then(response => {
        this.description = response.data.description
        this.dateStart = response.data.dateStart
        this.dateEnd = response.data.dateEnd
        this.title = response.data.title
        this.inputFile = response.data.inputFile
        this.state = response.data.state
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.$router.push('/404')
        }
      })
  },
  methods: {
    sendResult () {
      console.log({
        exercice: this.$route.params.id,
        output: this.$refs.output.fileContent,
        code: this.$refs.code.fileContent
      })
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
  name: 'Exercice'
}
</script>

<style lang="css">

.exercice .resultat h2 {
  margin-top: 0;
}

.exercice .enonce span.date, .exercice .enonce span.state {
  font-weight: normal;
  font-size: 0.7rem;
  display: inline-block;
  margin-left: 10px;
  padding: 5px;
  position: relative;
  top: -0.45rem
}

.exercice .enonce span.date {
  background-color: beige;
}

.exercice .enonce span.state {
  background-color: #a1dea1;
}

.exercice h2, .exercice h1 {
  border-bottom: solid 1px lightgray;
}

.exercice a, .exercice a:visited {
  color: #234cff;
}

</style>
