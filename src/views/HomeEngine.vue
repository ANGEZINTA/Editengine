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



    
    <div class="container-fluid my-5">
        <div class="row justify-content-end"> <!-- Utilisation de justify-content-end pour aligner les éléments à droite -->
            <div class="col-auto"> <!-- Utilisation de col-auto pour que la colonne s'ajuste à la largeur du contenu -->
                <div class="btn text-white" style="background-color: #E0338A; margin-right: 100px;"> <!-- Ajout de la marge à droite -->
                    <i class="bi bi-reply-all-fill"></i>
                    Retour à la version précédente
                </div>
            </div>
        </div>
    </div>




    <div class="img-bg">
    <div class="container my-5">
        <div class="card bg-light">
            <div class="card-body">
                <div class="d-flex flex-column align-items-start">
                    <div class="btn btn-info mb-3" @click="engineMethods"  style="background-color: #00CDD5; width:100px;">
                        Global
                    </div>
                    <!-- MON TABLEAU -->
                    <table class="table" v-if="showGlobal">
                        <thead>
                            <tr>
                                <th scope="col text-dark">Noms</th>
                                <th scope="col text-dark">Descriptions</th>  
                                <th scope="col text-dark">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr   v-for="(calcul, index) in methods" :key="index" >
                                <td>{{ calcul.name }}</td>
                                <td>{{ calcul.description }}</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-sm mx-3" @click="deleteMethod(index)">
                                        <i class="bi bi-trash3-fill"></i>
                                    </button>
                                    <router-link to="/Method" class="btn btn-info btn-sm mx-3" style="background-color: #fd7e14;">
                                        <i class="bi bi-pencil-square"></i>
                                    </router-link>
                                
                                    <router-link :to="{   query: { premierSlug: this.$route.params.slug } , name: 'METHOD', params: { slug: calcul.slug } }"class="btn btn-success btn-sm mx-3">

                                        <i class="bi bi-arrows"></i>
                                    </router-link>
                                   
                                   
                                </td>
                            </tr>
                        </tbody>
                    </table> 
                    <div class="btn btn-info mb-3"  style="background-color: #00CDD5; width:100px;">
                        {{branches.label}}
                    </div>
                    <table class="table" v-if="showAuto">
                        <thead>   
                            <tr>
                                <th scope="col text-dark">Noms</th>
                                <th scope="col text-dark">Descriptions</th>  
                                <th scope="col text-dark">Actions</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr v-for="(calcul, index) in methods" :key="index">
                                <td>{{ calcul.name }}</td>
                                <td>{{ calcul.description }}</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-sm mx-3" @click="deleteMethod(index)">
                                        <i class="bi bi-trash3-fill"></i>
                                    </button>
                                    <router-link to="/Method" class="btn btn-info btn-sm mx-3" style="background-color: #fd7e14;">
                                        <i class="bi bi-pencil-square"></i>
                                    </router-link>
                                    <router-link to="/Method" class="btn btn-success btn-sm mx-3">

                                        <i class="bi bi-arrows"></i>

                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
            </div>
        </div>
                                        <!-- le modale -->
        <div class="my-5">
            <div type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  style="background-color: #00CDD5;">
                Ajouter un calcul
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @hidden.bs.modal="clearFormData">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ajouter un calcul</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <input type="text" placeholder="Nom" class="form-control" v-model="enginemethod.name" @input="generateSlug">
                            </div>
                            <div>
                                <input type="text" placeholder="Slug" class="form-control my-2" v-model="enginemethod.slug">
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
    
        </div>

        
        
        
    </div>
    </div>







    </main>

    <div>
    
    </div>





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
            //  calculs : [] as Calcul [] ,

            showGlobal : false,

            methods : [],

            branches : [] as any[],
            showAuto : false


        }
        

        
    },

    computed : {

        
        
                generateSlug() : any {

                    this.enginemethod.slug = this.slugify(this.enginemethod.name);

                    },

        


    },

    mounted (){

        this.loaadGlobal()

        this.loadBranches()
   


        //   this.loadInsurers()
        this.$route.params.slug || '';

// Récupérer le premier slug à partir des paramètres de requête
//  this.$route.query.premierSlug as string || '';
        
    },

    

    methods : {

        clearFormData() {
            this.enginemethod.name = '';
            this.enginemethod.slug = '';
            this.enginemethod.description = '';
        },        



        async saveCalcul () {
    
            if (this.checkDuplicateName()) {
            // Afficher une alerte si le nom existe déjà
            alert('Une fonction du même intitulé existe déjà.');
            return;
        }

        // Préparer les données à envoyer avec la requête POST
        const data = { 
            name: this.enginemethod.name, 
            slug: this.enginemethod.slug, // Utilisation du slug assigné à enginemethod.slug
            description: this.enginemethod.description 
        };

        // Effectuer la requête POST avec les données
        const res = await api.post(api.engine, 'engine/method/edit', data);
         console.log(res)

        // Réinitialiser les valeurs après l'envoi de la requête
        this.enginemethod = {
            name: '',
            slug: '',
            description: '',
            engine: '',
            insurer: ''
        };
       

        console.log(this.methods)

       
    },

    checkDuplicateName() {
            return (this.methods as { name: string }[]).some(method => method.name.toLowerCase() === this.enginemethod.name.toLowerCase());
        },

 

        async deleteMethod(index: number) {
            const methodToDelete = this.methods[index] as { id: number }; // Assertion de type
            const methodId = methodToDelete.id; // Accéder à la propriété 'id'

            // Demander une confirmation à l'utilisateur
            const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette méthode ?");

            if (confirmation) {
                // Supprimer l'élément du tableau côté front-end
                this.methods.splice(index, 1);

                    // Envoyer la demande de suppression à l'API
                    const res = await api.delete(api.engine, `engine/method/delete/${methodId}`);
                    if (res.status === 200) {
                        console.log('Méthode supprimée avec succès');
                        this.engineMethods(); // Rafraîchir les données après la suppression
                    } else {
                        console.error('Erreur lors de la suppression côté serveur');     
                    }
                } 
        }

,


    
    slugify(text : string) {
                        return text.toString().toLowerCase().trim()
                        .replace(/\s+/g, '-')           // Replace spaces with -
                        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                        .replace(/^-+/, '')             // Trim - from start of text
                        .replace(/-+$/, '');            // Trim - from end of text
                    },

                    // handleClick(): void {
                    //     this.showGlobal = true; // Mettez à jour showGlobal à true lors du clic
                    //                     },


    async loaadGlobal(){
        

    const res = await api.get(api.engine,'engine/method/load/globals')

        

    console.log(res)

     


    },

    //   async loadInsurers(){

    //     const res = await api.get(api.core,'insurer/edit')

    //     console.log(res)


    //   },
    

    async engineMethods() {
    const res = await api.get(api.engine, 'engine/method/load/globals');

    if (res && res.data && res.data.methods) {
        // Filtrer les méthodes avec delete-at différent de null
        this.methods = res.data.methods.filter((method: any) => method['deletedAt'] === null);
        this.showGlobal = true;
    }

    console.log(this.methods);
}
,

    async loadBranches(){ 

    
    
        const res = await api.get(api.core,'branch/get/data/particulier-auto')
        
        if(res && res.data && res.data.branch){
    
                this.branches = res.data.branch
            

                console.log(this.branches)
        
                }   
      

        },
    

    
        async loadBranches1(){

    
    
    const res = await api.get(api.core,'branch/get/data/particulier-sante')

    if(res && res.data && res.data.branch){

        this.branches = res.data.branch
            
        this.showAuto=true

        console.log(this.branches)


        }


    }




     


        }




    });
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