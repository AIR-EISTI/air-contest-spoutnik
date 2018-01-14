<template lang="html">
  <main>
    <div id="titre">
      <h2 class="neon">Bienvenue sur votre page d'exercices </h2>
    </div>
    <div class="infos">
      <router-link :to="{name: 'CreationExercice'}">
        <div id="creerExo">
          <p>Créer un exercice</p>
          <img src="/src/assets/icons/IcoMoon/SVG/037-file-empty.svg" alt="créer un exercice" class="imgNeon">
        </div>
      </router-link>
      <router-link :to="{name: 'SearchExercice'}">
        <div id="rechercherExo">
          <p>Rechercher un exercice</p>
          <img src="/src/assets/icons/IcoMoon/SVG/135-search.svg" alt="rechercher un exercice" class="imgNeon">
        </div>

      </router-link>
    </div>
    <div class="infos">
      <router-link :to="{name: 'NewGroup'}">
        <div id="creerGroup">
          <p>Créer un groupe</p>
          <img src="/src/assets/icons/IcoMoon/SVG/204-link.svg" alt="créer un groupe" class="imgNeon">
        </div>
      </router-link>
      <router-link :to="{name: 'Tag'}">
        <div id="creerTag">
          <p>Créer un tag</p>
          <img src="/src/assets/icons/IcoMoon/SVG/205-flag.svg" alt="Créer un tag" class="imgNeon">
        </div>

      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Exercices'
}
</script>

<style lang="css">

.infos{
  display:flex;
  justify-content:space-around;
  padding-top: 50px;
}
.infos a{
  color:  #00F3F9;
  padding: 8px 8px 8px 32px;
  border : 1px solid #E120F0!important;
  box-shadow: 0 0 10px #E120F0 inset, 0 0 10px #E120F0;
  border-top-left-radius:30px;
  border-bottom-right-radius:30px;
  height: 267px;
  width : 35%;
  font-size: 35px;
  text-align: center;
}
.imgNeon{
  width : 90px;
  height: 100px;
  filter: drop-shadow( 0px 0px 5px #00F3F9);
}

</style>
