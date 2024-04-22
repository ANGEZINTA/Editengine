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
                      
     

      <link href="css/bootstrap-icons.css" rel="stylesheet">

      <link href="css/templatemo-topic-listing.css" rel="stylesheet">      
<!--

TemplateMo 590 topic listing

https://templatemo.com/tm-590-topic-listing

-->

<div class="container d-flex flex-wrap my-2"><img src="../assets/1200x630wa.png" alt="Logo" class="logo"></div>

</head>
  
      

    <!-- <div v-for="(category, index ) in categories" :key="index" class=" ">


                
        <div  class="btn btn-info mx-2" style="background-color: #00CDD5;" @click="loadBranches(category)" >
          {{ category.label }}
          
        </div>

    </div>

                <router-link :to ="{ name:'HomeEngine',params : {slug : branch.slug}}" v-for="(branch,index) in branches" :key="index">

               

                    <span class="">

                            {{ branch.label }}
                    </span>  
               

                                   
                  
                </router-link> -->

               


      
    


 <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-white my-3 flex-column">
     
     <div class="container">
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
 
       <div class="d-flex align-items-center justify-content-between w-100 mb-3">
         <!-- Votre contenu ici -->
       </div>
 
       <div class="collapse navbar-collapse" id="navbarNav">
         
         <ul class="navbar-nav justify-content-center">
           <li class="nav-item">
             <router-link to="/" class="nav-link text-dark">Home</router-link>
           </li>
           <li class="nav-item">
             <router-link to="/Test/:slug" class="nav-link  text-dark">Fonction</router-link>
           </li>
           <li class="nav-item">
             <router-link to="/Method" class="nav-link  text-dark">Edit</router-link>
           </li>
         </ul>
       </div>
     </div>
   </nav>


  

  <!-- <section class="hero-section d-flex justify-content-center align-items-center" >
      <div class="container" style="height: -50px; background-color:  #80d0c7;">
  
      </div>
  </section> -->


  <section class="featured-section container" >
      <div class="container">
          <div class="row justify-content-center">


             

          </div>
      </div>
  </section>





    <div class="img-bg">
    <div class="container my-5">
        <div class="card bg-light">
            <div class="card-body">
                <div class="d-flex flex-column align-items-start">
                    <div class="btn btn-info mb-3" @click="handleClick" style="background-color: #00CDD5;">
                        Global
                    </div>
                    <!-- MON TABLEAU -->
                    <table class="table">
                        <thead>
                            <tr v-if="showGlobal">
                                <th scope="col text-dark">Nom</th>
                                <th scope="col text-dark">Description</th>  
                                <th scope="col text-dark">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(calcul, index) in calculs" :key="index">
                                <td>{{ calcul.name }}</td>
                                <td>{{ calcul.description }}</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-sm mx-3" @click="deleteMethod(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                        </svg>
                                    </button>
                                    <router-link to="/Method" class="btn btn-info btn-sm mx-3" style="background-color: #fd7e14;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table> 
                    <div class="btn btn-info mt-3" style="background-color: #00CDD5;">
                        Auto
                    </div>
                </div>
            </div>
        </div>
                                        <!-- le modale -->
        <div class="my-5">
            <div type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color: #00CDD5;">
                Ajouter un calcul
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ajouter un calcul</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <input type="text" placeholder="Nom" class="form-control" v-model="enginemethod.name">
                            </div>
                            <div>
                                <input type="text" placeholder="Slug" class="form-control my-2" :value="generateSlug">
                            </div>
                            <div>
                                <textarea id="multilineInput" placeholder="Description" v-model="enginemethod.description" class="form-control my-2"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-info" @click="saveCalcul" style="background-color: #00CDD5;">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn  mx-2"style="background-color: #E0338A;">Retour à la version précédente</div>
        </div>
        <div>
            <div v-for="(method , index) in methods" :key="index">
                <div class="btn btn-info" @click="engineMethods">voir</div>
            </div>
        </div>
    </div>
</div>
  


  



</main>

<footer class="site-footer section-padding container" >
  <div class="container" >
      <div class="row">

          <div class="col-lg-3 col-12 mb-4 pb-2">
           
          </div>

          <div class="col-lg-3 col-md-4 col-6">
        
          </div>

          <div class="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
      
          </div>

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
            
              
          </div>

      </div>
  </div>
</footer>


<!-- JAVASCRIPT FILES -->




</template>



<script lang="ts">
  import { defineComponent } from 'vue';
  import {api} from '../services/Api'

  interface Calcul {
  name: string;
  slug: string;
  description: string;
  engine: any;
  insurer: string;
//   methods : any;
}
  
  export default defineComponent({
    name: 'TEST',
    

    data(){
          
        return{

         enginemethod : {
          
          name : '',
          slug : '',
          description: '',
          engine : '',
          insurer :''

         

      },
           calculs : [] as Calcul [] ,

           showGlobal : false,

           methods : [],

           branches : []


        }
    
 
        
    },

    computed : {

       
        
              generateSlug() : any {
                      return this.slugify(this.enginemethod.name);
                    },

      


    },

    mounted (){

        this.loaadGlobal()



    },

    

   methods : {

                  
 


           
      async saveCalcul () {

                
  
         const data = { name : this.enginemethod.name , slug : this.enginemethod.slug , description : this.enginemethod.description , insurer : this.enginemethod.insurer}
          
        //   const res = await api.post(api.engine, 'engine/method' ,data)
           
                
         
         this.calculs.push(this.enginemethod);

         

         this.enginemethod = {
            name: '',
            slug: '',
            description: '',
            engine: '',
            insurer: ''
          };
         
          
      },


        
    deleteMethod(index: number) {
      this.calculs.splice(index, 1);
    },

    
   
    slugify(text : string) {
                      return text.toString().toLowerCase().trim()
                        .replace(/\s+/g, '-')           // Replace spaces with -
                        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                        .replace(/^-+/, '')             // Trim - from start of text
                        .replace(/-+$/, '');            // Trim - from end of text
                    },

                    handleClick(): void {
                        this.showGlobal = true; // Mettez à jour showGlobal à true lors du clic
                                        },


   async loaadGlobal(){
         

     const res = await api.get(api.engine,'engine/method/load/globals')

  

     console.log(res)




   },

    async loadInsurers(){

      const res = await api.get(api.core,'insurer/list/load/insurers')

      console.log(res)


    },
     

    async engineMethods() {

         const res = await api.get(api.engine,'engine/method/load/globals')

         console.log(res)


         if(res && res.data && res.data.methods){

            this.methods = res.data.methods

          //  console.log(this.methods)
       
}
             


    },

    async loadBranches(){
     
        const res = await api.get(api.core,'branch/category/list')

        // console.log(res)
        if(res && res.data && res.data.categories.branches){
          
         console.log(this.branches = res.data.categories.branches) 


        }


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


.btn:hover {
filter: grayscale(.6);
}


body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
nav{

  background-color: rgba(255, 255, 255, 0.95); /* Couleur de fond semi-transparente */
    opacity: 1; /* Vous pouvez éventuellement supprimer cette ligne si vous utilisez déjà rgba() */
    border-radius: 10px; /* Bordures arrondies */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre */
    transition: opacity 0.3s ease; /* Ajout d'une transition pour une animation fluide */
}

.navbar {
  height: 100%;
  width: 200px;
  position: fixed;
  background-color: #333;
  padding-top: 20px;
}

.navbar a {
  display: block;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #00CDD5;
}
.logo {
width: 100px; /* Ajustez la taille du logo selon vos besoins */
height: auto;
}
@media (min-width: 992px) {
    .navbar.flex-column {
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        height: calc(100% - 60px);
        width: 250px;
        z-index: 1000;
        padding-top: 60px;
        background-color: white; /* Fond blanc */
        color: black; /* Texte noir */
    }

    .navbar.flex-column .container {
        padding-left: 0;
        padding-right: 0;
    }

    .navbar-toggler {
        display: none;
    }

    .navbar.flex-column .navbar-collapse {
        display: flex !important;
        flex-direction: column;
        align-items: center; /* Centrer les éléments horizontalement */
    }

    .navbar.flex-column .navbar-collapse ul.navbar-nav {
        width: 100%; /* Largeur totale */
        display: flex;
        flex-direction: column;
        align-items: center; /* Centrer les éléments horizontalement */
        margin: 0; /* Supprimer les marges */
        padding: 0; /* Supprimer les paddings */
    }

    .navbar.flex-column .navbar-collapse ul.navbar-nav li.nav-item {
        margin-right: 0;
    }

    .navbar.flex-column .navbar-collapse ul.navbar-nav li.nav-item a.nav-link {
        text-align: center; /* Centrer le texte */
        width: 100%; /* Prendre toute la largeur disponible */
    }
}



</style>