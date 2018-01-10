<template>
    <div class="center-big-container">
        <h2>Profile</h2>
        <div class="grid-2">
            <div class="white-container">
                <h3>Infos personelles...</h3>
                <div class="line-info">
                    <div>Nom :</div>
                    <div>Darboux</div>
                </div>
                <div class="line-info">
                    <div>Prenom :</div>
                    <div>Tom</div>
                </div>
                <div class="line-info">
                    <div>Mail :</div>
                    <div>tom.darboux@laposte.net</div>
                </div>
            </div>
            <div class="white-container">
                <h3>Quelques statistiques...</h3>
                <div class="line-info">
                    <div>Exercices résolus :</div>
                    <div>14</div>
                </div>
                <div class="line-info">
                    <div>Points</div>
                    <div>178</div>
                </div>
                <div class="line-info">
                    <div>Groupes résolu en entier :</div>
                    <div>2</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
    .line-info
    {
        width: 100%;
        padding: 7px 0px;
    }

    .line-info > *
    {
        display: inline-block;
    }

    .line-info > :first-child
    {
        min-width: 220px;
        font-weight: 800;
        font-size: 1.1em;
        color:black;
    }

    h3
    {
        color:cornflowerblue;
        font-size: 1.3em;
        margin: 10px 0px;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    }
</style>