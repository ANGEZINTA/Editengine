<template>

<link rel="preconnect" href="https://fonts.googleapis.com">
      
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans&display=swap" rel="stylesheet">
                      
      <link href="css/bootstrap.min.css" rel="stylesheet">

      <link href="css/bootstrap-icons.css" rel="stylesheet">

      <link href="css/templatemo-topic-listing.css" rel="stylesheet">   

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
    <h1 class="my-3">Historique</h1>
                  
    <div class="container my-3 w-50">
        <div class="input-group">
            <input type="text" v-model="searchTerm"  @input="search" class="form-control" placeholder="Rechercher...">
            <button class="btn " @click="search" style="background-color: #00CDD5;">Rechercher</button>
        </div>
    </div>

        <div class="container my-5">

                <div class="card bg-light">
                <div class="card-body">  
                    
                    <table class="table">
                      <thead>
                          <tr>
                           
                              <th scope="col text-dark">fonctions</th>
                              <th scope="col text-dark">créer par</th>
                              <th scope="col text-dark">date de création</th>
                              <th scope="col text-dark">modifier par</th> 
                              <th scope="col text-dark">date de modification</th>
                              <th scope="col text-dark">supprimer par </th>
                              <th scope="col text-dark">date de suppression</th>
                             
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(trace,index) in traces" :key="index">
                             
                              <td>{{ trace.name }}</td>
                              <td>david</td>
                              <td>{{ formatDate(trace.createdAt) }}</td>
                              <td>{{ trace.updateBy }}</td>
                              <td>{{ formatDate(trace.updatedAt) }}</td>
                              <td>arthur</td>
                              <td>{{ formatDate(trace.deletedAt) }}</td>
                            
                           
                          </tr>
                      </tbody>
                  </table> 
                
                
                </div>
                </div>

                    
      </div>




    </main>


</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import {api} from '../services/Api';
  

  export default  defineComponent({


    name : 'USERMOD',

    data() {
        return {

            traces: []  ,
            searchTerm: '',
            
         }
    },
    
    computed : {

    
    },
 
    mounted() {

        this.loadTrace()
        
    },
   
    methods : {
        
        async loadTrace(){

             
   const res = await api.get(api.engine,'engine/method/load/globals')

    if(res && res.data && res.data.methods){

        this.traces= res.data.methods
    }

     console.log(this.traces)




        },
        search() {
  if (!this.searchTerm.trim()) {
    // Si le terme de recherche est vide, rechargez toutes les traces
    this.loadTrace();
    return;
  }

  // Filtrer les traces en fonction du terme de recherche
  this.traces = (this.traces).filter((trace: any) =>
    trace.createBy && trace.createBy.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    trace.name && trace.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
},
formatDate(dateString: string | null): string {
  // Vérifier si la date est null ou undefined
  if (!dateString) {
    return ''; // Renvoyer une chaîne vide si la date est null ou undefined
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const formattedDate = new Date(dateString).toLocaleString('fr-FR',options);
  return formattedDate;
}

    }

  })




</script>

<style scoped> 

.sidebar-link {
    text-decoration: none; /* Supprimer le soulignement des liens */
    color: black;
    font-size: 20px; 
}

main{

font-family: 'Montserrat', sans-serif;
}

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


.btn:hover {
filter: grayscale(.6);
}


body {
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
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