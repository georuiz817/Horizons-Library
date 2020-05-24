<template>
<div>
    <div v-if="loading">
        <b-spinner class='mt-5' variant="warning" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
    </div>
    <div v-else>
        <b-card class='loopCard mx-auto mb-2 mt-2 bg-warning'>
            <b-card-title>Fish</b-card-title>
            <b-card-text>Click a fish and get all its additional details</b-card-text>
            <b-form-input  type='text' v-model='search' placeholder="search fish"></b-form-input>
        </b-card>
        <div v-for="f in filteredFish" v-bind:key='f.id'>
            <b-card class="loopCard mx-auto mb-2">
                <router-link class="routerLink" :to="'/currentFish/' + f.id" >
                <b-card-title>{{f.name['name-USen'] | capitalize}}</b-card-title>
                <b-card-text>{{f.price}}<img width='10%' src='../../assets/bells_pic.png'></b-card-text>
                </router-link>
            </b-card>
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
            search: '',
        }
    },

    created(){
        this.loading = true 
        axios.get('http://acnhapi.com/v1/fish/')
        .then(fish => {
            this.fish = fish.data, //take in the array like object from the api
            this.fish = Object.keys(this.fish).map(i => this.fish[i]) //convert it to array of objects to use filter
            console.log(this.fish)//logged to make sure working correctly
        })
        .finally(() => (this.loading = false))
    },
    
    computed:{
        filteredFish: function(){
            return this.fish.filter((fish)=>{
                return fish.name['name-USen'].match(this.search.toLowerCase())
            });
        }
    }
}
</script>

<!-- divider -->

<style lang='scss'>
.loopCard{
    width: 50%;
    .routerLink{
    color: #2c3e50;;
 }
}

</style>