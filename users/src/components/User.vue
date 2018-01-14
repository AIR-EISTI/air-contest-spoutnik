<template>
    <main id="user">
        <nav id="userNav">
            <div class="top-container">
                <div class="pseudo">
                    {{username}}
                    <span class="logout center" @click="logout()"><img src="/static/icons/IcoMoon/SVG/183-switch.svg"/></span>
                </div>
                <div class="infos">
                    {{firstname}} {{surname}}
                </div>
            </div>
            <ul>
                <li>Profil</li>
                <li>Succès</li>
            </ul>
        </nav>
        <section class="top-container">
            <profil :username="username" :firstname="firstname" :surname="surname"></profil>
            <badges></badges>
        </section>
    </main>
</template>

<script>
import UserProfile from '@/components/user_template/profil.vue'
import UserBadge from '@/components/user_template/badge.vue'
import * as axios from 'axios'
export default {
  name: 'User',
  data () {
    return {
      username: '',
      firstname: '?',
      surname: '?'
    }
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/401')
      location.reload()
    } else {
      let headers = {'Accept': 'application/json', 'AUTHORIZATION': 'Bearer ' + localStorage.getItem('token')}
      axios.get(`/api/me`, {headers: headers})
        .then(response => {
          this.username = response.data.username
          this.firstname = response.data.firstname
          this.surname = response.data.surname
        })
        .catch(e => {
          if (e.response.status === 401) {
            this.$router.push('/401')
          }
        })
    }
  },
  components: {
    'profil': UserProfile,
    'badges': UserBadge
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
      location.reload()
    }
  }
}
</script>

<style scoped>
    .logout img
    {
        color:red;
        margin-right: 5px;
        height: 20px;
    }
    #user
    {
        display: flex;
        flex-direction: row;
        background-image: url("/static/imgs/fond-user1.jpg");
        background-size: cover;
        background-attachment: fixed;
    }

    #userNav
    {
        flex: 0;
        padding: 0px 50px;
        font-size: 1.6em;
        min-width: 150px;;
    }

    #userNav .pseudo
    {
        font-weight: 800;
        font-size: 1.2em;
    }

    #userNav .infos
    {
        font-size: 0.7em;

    }

    #userNav ul
    {
        list-style-type: none;
        padding: 0;
    }

    #userNav li
    {
        padding: 10px 0px;
        color:rgb(160,160,160);
        text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    }

    section
    {
        flex:1;
    }

    @media (max-width: 800px) {
        main
        {
            display: block;
        }
        #userNav
        {
            padding-top: 60px;
            width: auto;
            text-align: center;
        }

        #userNav ul
        {
            display: none;

        }

        .top-container
        {
            padding-top: 0px;
        }

        h2
        {
            margin-top: 5px;
        }
    }
</style>
