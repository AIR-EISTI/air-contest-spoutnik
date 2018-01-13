<template lang="html">
  <main class="exercice center-container">
    <notification :msg="notif.msg" :type="notif.type" :date="notif.date"  @close="(notif.msg='')"></notification>
    <div class="enonce top-container">
      <h1>
        {{title}}
        <span class="date small-info" :title="creatingDate | dateTitle">créé {{creatingDate | date}}</span>
        <span class="number-point small-info">{{points}} points</span>
      </h1>
      <ul class="tags-fixe">
        <li class="tag" v-for="tag in tags" :key="tag.id">#{{tag.tag}}</li>
      </ul>
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
import Notification from '@/components/Notification'
import * as moment from 'moment'
import 'moment/locale/fr'
import * as axios from 'axios'
export default {
  data () {
    return {
      inputFile: '',
      title: '',
      creatingDate: 0,
      description: '',
      points: 0,
      tags: [],
      notif: {
        msg: '',
        type: 'info',
        date: ''
      }
    }
  },
  components: {
    'ExtendableContentInput': ExtendableContentInput,
    'Notification': Notification
  },
  mounted () {
    moment.locale('fr')
    axios.get(`/api/exercice/${this.$route.params.id}?markup=html`)
      .then(response => {
        this.description = response.data.description
        this.creatingDate = response.data.creatingDate
        this.title = response.data.title
        this.inputFile = response.data.inputFile
        this.points = response.data.points
        this.tags = response.data.tags
      })
      .catch(error => {
        if (error.request.status === 404) {
          this.$router.push('/404')
        }
      })
  },
  methods: {
    sendResult () {
      axios.post(`/api/result`, {
        output: this.$refs.output.fileContent,
        code: this.$refs.code.fileContent,
        exercice: this.$route.params.id
      })
        .then(response => {
          if (response.data.jobId) {
            this.subscribeJobEvent(response.data.jobId)
          } else {
            if (response.data.point === 100) {
              this.displayNotif('info', {msgInfo: 'Exerice réussi !'})
            } else {
              this.displayNotif('error', {msgInfo: 'Solution érronée...'})
            }
          }
        })
    },
    subscribeJobEvent (jobId) {
      this.displayNotif('info', {msgInfo: 'Execution du code...'})
      let ev = new EventSource(`/api/job/${jobId}`)
      ev.addEventListener('error', (e) => {
        ev.close()
      })
      ev.addEventListener('msg_info', (e) => {
        this.displayNotif('info', JSON.parse(e.data))
      })
      ev.addEventListener('msg_error', (e) => {
        this.displayNotif('error', JSON.parse(e.data))
      })
    },
    displayNotif (type, {msgInfo, timestamp = null}) {
      this.notif.msg = msgInfo
      this.notif.type = type
      this.notif.date = moment(timestamp).format('LT')
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
main.exercice {
  position: relative;
}
.exercice h1:first-of-type {
  margin: 7px 0;
}

.exercice .resultat h2 {
  margin-top: 0;
}

.exercice .enonce span.small-info {
  font-weight: normal;
  font-size: 0.7rem;
  display: inline-block;
  margin-left: 10px;
  padding: 5px;
  position: relative;
  top: -0.45rem
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
