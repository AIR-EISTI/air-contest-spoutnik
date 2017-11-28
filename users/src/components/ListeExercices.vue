<template>
  <main>
      <input type="search"/>
      <section>
            <ul class="tags horizontal">
                <li>#tournoi</li>
                <li>#jeu</li>
                <li>#labyrinthe</li>
                <li>#snake</li>
                <li>#graph</li>
            </ul>
      </section>
      <ul id="listeExercices">
          <li class="exercice">
              <h2 class="title">Super exercice avec un nom très long</h2>
              <p>
                  une petite description de l'exercice qui est suivi par un lorem ipsum.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie. c'est ainsi que l'on peut conclure ce 1er exercice avec un long texte qui nous rpend la tête n'est pas magnifique ?
              </p>
              <ul class="tags-fixe">
                <li class="tag">#snake</li>
                <li class="tag">#graph</li>
              </ul>
          </li>
          <li class="exercice">
              <h2 class="title">Super exercice avec un nom très long</h2>
              <p>
                  une petite description de l'exercice qui est suivi par un lorem ipsum.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie. c'est ainsi que l'on peut conclure ce 1er exercice avec un long texte qui nous rpend la tête n'est pas magnifique ?
              </p>
              <ul class="tags-fixe">
                <li class="tag">#snake</li>
                <li class="tag">#graph</li>
              </ul>
          </li>
          <li class="exercice">
              <h2 class="title">Super exercice avec un nom très long</h2>
              <p>
                  une petite description de l'exercice qui est suivi par un lorem ipsum.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie. c'est ainsi que l'on peut conclure ce 1er exercice avec un long texte qui nous rpend la tête n'est pas magnifique ?
              </p>
              <ul class="tags-fixe">
                <li class="tag">#snake</li>
                <li class="tag">#graph</li>
              </ul>
          </li>
          <li class="exercice">
              <h2 class="title">Super exercice avec un nom très long</h2>
              <p>
                  une petite description de l'exercice qui est suivi par un lorem ipsum.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie. c'est ainsi que l'on peut conclure ce 1er exercice avec un long texte qui nous rpend la tête n'est pas magnifique ?
              </p>
          </li>
          <li class="exercice">
              <h2 class="title">Super exercice avec un nom très long</h2>
              <p>
                  une petite description de l'exercice qui est suivi par un lorem ipsum.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie. c'est ainsi que l'on peut conclure ce 1er exercice avec un long texte qui nous rpend la tête n'est pas magnifique ?
              </p>
              <ul class="tags-fixe">
                <li class="tag">#snake</li>
                <li class="tag">#graph</li>
              </ul>
          </li>
      </ul>
      <ul id="pages">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
      </ul>

  </main>
</template>

<script>
export default {
  name: 'ListeExercices',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=search]
{
    width: 400px;
    display: block;
    margin: auto;
    border:none;
    border-radius: 0px;
    margin-top: 15px;
    height: 35px;
    border: 1px solid lightgrey;
}

#listeExercices
{
    list-style-type: none;
    margin: 0;
    padding: 0;
    max-width: 750px;
    margin: auto;


}

.exercice
{
    border:none;
    background-color: white;
    padding: 10px;
    margin-top: 15px;
    border: 1px solid lightgrey;
    border-top: 2px solid navy;
}





#pages
{
    list-style-type: none;
    display: flex;
    max-width: 750px;
    margin: auto;
    padding: 0;

}

#pages li
{
    background-color: white;
    border: 1px solid lightgray;
    padding: 5px 10px;
    margin:10px 20px 10px 0px;
}

</style>
