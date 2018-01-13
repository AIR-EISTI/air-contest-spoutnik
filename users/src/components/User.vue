<template>
    <main id="user">
        <nav id="userNav">
            <div class="top-container">
                <div class="pseudo">
                    Tjiho
                </div>
                <div class="infos">
                    Tom Darboux
                </div>
            </div>
            <ul>
                <li>Profile</li>
                <li>Succés</li>
            </ul>
        </nav>
        <section class="top-container">
            <profil></profil>
            <badges></badges>
        </section>
    </main>
</template>

<script>
import UserProfile from '@/components/user_template/profil.vue'
import UserBadge from '@/components/user_template/badge.vue'
export default {
  name: 'User',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:
  {
    'profil': UserProfile,
    'badges': UserBadge
  }
}
</script>

<style scoped>
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