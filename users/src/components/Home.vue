<template>
    <main >
        <section id="intro-section">
            
            <div class="text-image">
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
        <section id="month-exercise" class="white-container">
            
            <h2 class="center">Exercice du mois</h2>
            <br/>
            <div class="center">
                    <a href="" class="button">Participer</a>
            </div>
        </section>
        <section >
            <h2 class="center">Les autres exercices</h2>
            <div class="list-exo-min">
            <div class="exo-min white-container">
                <div class="title">Le labyrinthe du sorcier</div>
                <div class="description">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie.
                    
                </div>
                <div class="center">
                    <a href="" class="button">Participer</a>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div class="exo-min white-container">
                <div class="title">Le labyrinthe du sorcier</div>
                <div class="description">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie.
                </div>
                <div class="center">
                    <a href="" class="button">Participer</a>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div class="exo-min white-container">
                <div class="title">Le labyrinthe du sorcier</div>
                <div class="description">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie.
                </div>
                <div class="center">
                    <a href="" class="button">Participer</a>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div class="exo-min plus">
                    <a href="" class="button">En voir plus ></a>
            </div>
            </div>
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
    </main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>