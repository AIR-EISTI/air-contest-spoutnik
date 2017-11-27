<template lang="html">
  <main class="exercice">
    <div class="enonce">
      <h1>Super exercice</h1>
      <h2>What is Lorem Ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <h2>Where does it come from?</h2>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </p>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </p>
      <pre>
      </pre>
    </div>
    <div class="resultat">
      <h2>Résultats</h2>
      <a href="#d">Télécharger le jeu de données.</a>
      <extendable-content-input title="Sortie du programme"></extendable-content-input>
      <button class="button">Envoyer</button>
    </div>
  </main>
</template>

<script>
import ExtendableContentInput from '@/components/ExtendableContentInput'
export default {
  components: {
    'ExtendableContentInput': ExtendableContentInput
  }
}
</script>

<style lang="css" scoped>
.exercice > div {
  margin: 0 auto;
  max-width: 750px;
}

.exercice .resultat {
  padding: 10px;
  background: white;
}

.exercice .resultat h2 {
  margin-top: 0;
}

.exercice h2, .exercice h1 {
  border-bottom: solid 1px lightgray;
}

.exercice a, .exercice a:visited {
  color: #234cff;
}

</style>
