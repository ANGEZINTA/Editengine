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
        <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
    


</head>


<main>
    <!-- <aside id="sidebar" class="sidebar-floating">
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
      <li class="sidebar-item">
        <router-link to="/Method/:slug" class="sidebar-link" exact-active-class="active">
          <span><i class="bi bi-pen mx-2"></i>Edit</span>
        </router-link>
      </li>
      <li class="sidebar-item">
        <router-link to="/Mod" class="sidebar-link" exact-active-class="active">
          <span><i class="bi bi-clipboard-data mx-2"></i>Rapport de traçabilité</span>
        </router-link>
      </li>
     
    </ul>
  </aside> -->




   

  

    
    <section class="explore-section section-padding  " id="section_2" >

    
        
       

                
                    <h1 class="mb-4">Catégories</h1>

        <div class="container my-5">


            <div class="row">
                                <div v-for="(category, index ) in categories" :key="index" class="col">
                                    <div class="btn custom-block bg- shadow-lg my-2 mx-2"@click="loadBranches(category)"  style="height: 100px; width: 300px;">
                                        <a class="" href="#" @click="loadBranches(category)">
                                            <div class="d-flex">
                                                <div >
                                                    <h5 class="mb-2"> {{category.label }}</h5>

                                                    <!-- <p class="mb-0">Topic Listing Template based on Bootstrap 5</p> -->
                                                </div>

                                                <span class="badge  rounded-pill ms-auto" style="background-color: #E0338A;">WIA</span>
                                            </div>

                                           
                                        </a>
                                    </div>
                                  
                                </div>
                                
                            </div>           
           
        <div>

        </div class=''>
                    <router-link :to ="{ name:'HomeEngine',params : {slug : branch.slug}}" v-for="(branch,index) in branches" :key="index">

            <div class="d-flex justify-content">
                <span class="btn my-5 mx-2 text-white" style="background-color: #E0338A; width: 110px; height: 60px;">
                    {{ branch.label }}
                </span>  
            </div>



                    

            </router-link>
                    
         </div>
      
 
    </section>


    
</main>

  


   





        
    
 
                
  


</template>



<script lang="ts">


import { defineComponent } from 'vue';

import {api} from '../services/Api'




  export default defineComponent({


    name:'BRANCHLIST',
    

    data() {
        
      return {

            
        branches: [],
        categories : [],
        slug: ''
        
      }


    },
    mounted(){

      
      this.loadBranchCategories();
   
     



      },

   
   

  
    methods : {



         async   loadBranchCategories(){

                const res = await api.get(api.core ,'branch/category/list')
                 
                if(res && res.data && res.data.categories ) {

                  this.categories = res.data.categories

                 console.log(res)

                }

                

            


                
                },


                loadBranches(category : any){

                   this.branches = category.branches

                     console.log(category)  

                },
                
   
              
    }
  
  })


</script>
      

<style scoped>

main{

    font-family: 'Montserrat', sans-serif;
}


.btn{

/* Couleur de fond semi-transparente */
opacity: 0.9; /* Augmentation de l'opacité */
border-radius: 10px; /* Bordures arrondies */
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre */
transition: opacity 0.3s ease; /* Ajout d'une transition pour une animation fluide */


}


.btn:hover {
  /* filter: grayscale(.6); */
  /* background-color:  #E0338A ; */
}


body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

span{
/*  
 color: black; */

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