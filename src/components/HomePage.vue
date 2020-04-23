<template>
    <div>
     <div class="jumbotron jumbotron-fluid">
         <div class="container">
             <h1 class="display-3">Horizon Library</h1>
             <p class="lead">Search and Explore</p>
             <hr class="my-2">
             <p>Choose a category and search through hundreds of avaliable options. Feel free to click one you like and get additional information.</p>
             <p>Horizons Library is a great tool to use through your time playing to find and learn about the game</p>
         </div>
     </div>
     <div class="container">
         <div class="row home-row">
             <div class="col-sm-6 home-col">
                 <router-link to="/fishes">
                    <div class="card border-primary mb-3">
                        <img class="card-img-top" src="holder.js/100x180/" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Fish</h4>
                            <p class="card-text text-primary ">Come view all the fish the game has to offer. From tiny carps to gigantic Bass.</p>
                        </div>
                    </div>
                 </router-link>
             </div>
             <div class="col-sm-6 home-col">
                 <h1>Villagers</h1>
             </div>
         </div>
         <div class="row home-row">
             <div class="col-sm-6 home-col">
                <h1>Fossils</h1>                  
             </div>
             <div class="col-sm-6 home-col">
                <h1>Bugs</h1>
             </div>
         </div>
     </div>
    </div>
</template>
 
          
        
<style>
.home-row {
    margin-bottom: 5%;
}


</style>

