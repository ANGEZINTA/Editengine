<template>

<aside id="sidebar" class="d-flex flex-column align-items-start">
        <div class="sidebar-logo">
            <a href="#">wiassur</a>
        </div>
        <ul class="sidebar-nav">
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <i class="bi bi-house-fill"></i> <span>Home</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <i class="bi bi-house-fill"></i> <span>fonction</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <i class="bi bi-house-fill"></i> <span>edit</span>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                    <span>authentification</span>
                </a>
            </li>
        </ul>
   
    </aside>
</template>
<script>


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
text-align: center;
}

.sidebar-link {
display: block;
padding: 10px;

}
.sidebar-link :hover{

color: #E0338A;
}





</style>