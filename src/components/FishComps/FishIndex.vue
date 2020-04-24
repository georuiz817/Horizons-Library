<template>
    <div>
        <h1>Fish</h1>
     <div v-for="f in fish" v-bind:key='f.id' class="card">
            <img class="card-img-top" src="holder.js/100x180/" alt="">
            <div class="card-body">
                <h4 class="card-title"> {{f.name['name-en']}} </h4>
                <p class="card-text"> ${{f.price}}</p>
            </div>
        </div> 
    </div>
</template>

<!-- divider-->

<script>
import axios from 'axios'

export default {
    data() {
        return{
            fish: [],
        }
    },

    created(){
        axios.get('http://acnhapi.com/fish/')
        .then(fish => {
            this.fish = fish.data
        })
    },

    methods(){
        
    }
}
</script>

<!-- divider -->

<style>

</style>