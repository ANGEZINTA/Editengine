<template>
     <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <meta name="description" content="">
      <meta name="author" content="">

      <title>Topic Listing Bootstrap 5 Template</title>

      <!-- CSS FILES -->        
      <link rel="preconnect" href="https://fonts.googleapis.com">
      
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans&display=swap" rel="stylesheet">
                      
      <link href="css/bootstrap.min.css" rel="stylesheet">

      <link href="css/bootstrap-icons.css" rel="stylesheet">

      <link href="css/templatemo-topic-listing.css" rel="stylesheet">      
<!--

TemplateMo 590 topic listing

https://templatemo.com/tm-590-topic-listing

-->



</head>

<main>
  <aside id="sidebar" class="sidebar-floating">
    <div class="sidebar-logo my-2 mx-2">
      <div class="row">
        <div class="col-auto">
          <img src="../assets/logowia.png" alt="" style="width: 30px;">
        </div>
      </div>
    </div>

    <ul class="sidebar-nav">
      <li class="sidebar-item">
        <router-link to="/" class="sidebar-link" exact-active-class="active">
          <span><i class="bi bi-house-door mx-2"></i>Accueil</span>
        </router-link>
      </li>
      <li class="sidebar-item">
        <router-link to="/Home/:slug" class="sidebar-link" exact-active-class="active">
          <span><i class="bi bi-calculator mx-2"></i>Moteur de calcul</span>
        </router-link>
      </li>
      <!-- <li class="sidebar-item">
        <router-link to="/Method/:slug" class="sidebar-link" exact-active-class="active">
          <span><i class="bi bi-pen mx-2"></i>Edit</span>
        </router-link>  
      </li> -->
      <li class="sidebar-item">
        <router-link to="/Mod" class="sidebar-link" exact-active-class="active">
          <span><i class="bi bi-clipboard-data mx-2"></i>Rapport de traçabilité</span>
        </router-link>
      </li>
      <!-- Ajoutez d'autres éléments de menu ici -->
    </ul>
  </aside>

  


     <div class="container">
      <!-- Boutons pour ajouter différents types de lignes -->
                    <div class="btn  my-5" @click="ajouterText" style="background-color: #00CDD5;"><i class="bi bi-chat-fill mx-1"></i>Ajouter un texte</div>

                        <div class="btn  mx-3 my-5" @click="ajouterCalcul" style="background-color: #00CDD5;"><i class="bi bi-calculator-fill mx-1"></i>Ajouter un calcul</div>

                    <div class="btn  mx-3 my-5" @click="ajouterCondition" style="background-color: #00CDD5;"> <i class="bi bi-chevron-bar-contract"></i> une condition</div>
                        <div class="btn  mx-3 my-5" @click="ajouterIteration" style="background-color: #00CDD5;"> <i class="bi bi-infinity mx-1" ></i>Ajouter une itération</div>
                        <div class="btn btn-danger my-5" @click="ajouterErreur"><i class="bi bi-exclamation-triangle-fill mx-2"></i>Ajouter un message d'erreur</div>
  
          <div class="card bg-light">
              <!-- Liste des lignes -->
      <div v-for="(ligne, index) in lignes" :key="index" class="my-3">
        <!-- Affichage de la ligne -->
        <div v-if="ligne.type === 'text' || ligne.type === 'calc' || ligne.type === 'erreur'">
          <input type="text" v-model="ligne.text" class="form-control">
        </div>
        <div v-else-if="ligne.type === 'condition'">
          <div class="row">
            <div class="col">
              <input type="text" v-model="ligne.condition" placeholder="Condition" class="form-control ">
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <input type="text" v-model="ligne.textTrue" placeholder="Résultat si vrai" class="form-control">
            </div>
            <div class="col">
              <input type="text" v-model="ligne.textFalse" placeholder="Résultat si faux" class="form-control">
            </div>
          </div>
        </div>
        <div v-else-if="ligne.type === 'iteration'">
          <div class="row">
            <div class="col">
              <input type="text" v-model="ligne.condition" placeholder="Condition d'arrêt" class="form-control">
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <input type="text" v-model="ligne.text" placeholder="Action à répéter" class="form-control">
            </div>
          </div>
        </div>
  
        <!-- Bouton de suppression -->
      <button class="btn btn-danger btn-sm my-5" @click="supprimerLigne(index)"><i class="bi bi-trash3-fill"></i></button>
      </div>

          </div>
        
    
    </div>

      <div class="btn btn-info my-5"style="background-color: #00CDD5;">Enregistrer</div>

    </main>
  

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'METHOD',
  data() {
    return {
      lignes: [] as Array<{ type: string; text?: string; condition?: string; textTrue?: string; textFalse?: string }> // Tableau pour stocker les lignes
    };
    
  },


  methods: {
    // Méthode pour ajouter un texte
    ajouterText() {
      this.lignes.push({ type: 'text', text: '' });
    },
    // Méthode pour ajouter un calcul
    ajouterCalcul() {
      this.lignes.push({ type: 'calc', text: '' });
    },
    // Méthode pour ajouter une condition
    ajouterCondition() {
      this.lignes.push({ type: 'condition', condition: '', textTrue: '', textFalse: '' });
    },
    // Méthode pour ajouter une itération
    ajouterIteration() {
      this.lignes.push({ type: 'iteration', condition: '', text: '' });
    },
    // Méthode pour ajouter un message d'erreur
    ajouterErreur() {
      this.lignes.push({ type: 'erreur', text: '' });
    },
    // Méthode pour supprimer une ligne
    supprimerLigne(index: number) {
      this.lignes.splice(index, 1);
    }
  }
});
</script>
<style scoped>

.container{

font-family: 'Montserrat', sans-serif;

}

.card {
    background-color: rgba(255, 255, 255, 0.95); /* Couleur de fond semi-transparente */
    opacity: 1; /* Vous pouvez éventuellement supprimer cette ligne si vous utilisez déjà rgba() */
    border-radius: 10px; /* Bordures arrondies */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre */
    transition: opacity 0.3s ease; /* Ajout d'une transition pour une animation fluide */
}
.card-body{
  background-color: rgba(255, 255, 255, 0.95); /* Couleur de fond semi-transparente */
    opacity: 1; /* Vous pouvez éventuellement supprimer cette ligne si vous utilisez déjà rgba() */
    border-radius: 10px; /* Bordures arrondies */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre */
    transition: opacity 0.3s ease; /* Ajout d'une transition pour une animation fluide */


}
.btn{

/* Couleur de fond semi-transparente */
opacity: 0.9; /* Augmentation de l'opacité */
border-radius: 10px; /* Bordures arrondies */
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre */
transition: opacity 0.3s ease; /* Ajout d'une transition pour une animation fluide */


}
main{

font-family: 'Montserrat', sans-serif;
}

.btn:hover {
filter: grayscale(.6);
}


body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
span{
 
 /* color: black; */

}

/* .wrapper{
 display: flex;

} */
.container-fluid{

    

   

}
#sidebar{

    width: 300px;
    min-width: 70px;
    z-index: 1000;
    transition: all .25s ease-in-out;
    display: flex;
    flex-direction: column;
    background-color:white;
}
.sidebar-floating {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #ddd;
    z-index: 1000;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Aligner les éléments au début de la colonne */
}

.sidebar-nav {
    list-style: none;
    padding: 0;
}

.sidebar-item {
    text-align: left;
    margin-left:20px;
}

.sidebar-link {
display: block;
padding: 10px;
color: black;
font-size: 20px;
transition: background-color 0.05s ease; 
text-decoration: none;

}
.sidebar-link :hover{

color: #E0338A;
}


.active {
  background-color: #E0338A; /* Couleur de fond lorsque actif */
  color: white; /* Couleur du texte */
}





</style>
