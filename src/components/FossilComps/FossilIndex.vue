<template>
<div>
    <div v-if="loading">
        <b-spinner class='mt-5' variant="warning" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
    </div>
    <div v-else>
        <b-card class='loopCard mx-auto mb-2 mt-2 bg-warning'>
            <b-card-title>Fossils</b-card-title>
            <b-card-text>Dig through the fossils and find your favorite</b-card-text>
            <b-form-input  type='text' v-model='search' placeholder="search fossils"></b-form-input>
        </b-card>
        <div v-for="f in filteredFossils" v-bind:key='f.id'>
            <b-card class="loopCard mx-auto mb-2">
                <b-card-title>{{f.name['name-USen'] | capitalize}}</b-card-title>
                <b-card-text>{{f.price}}<img width='10%' src='../../assets/bells_pic.png'></b-card-text>
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
            fossils: [],
            search: '',
        }
    },

    created(){
        this.loading = true 
        axios.get('http://acnhapi.com/v1/fossils/')
        .then(fossils => {
            this.fossils = fossils.data, //take in the array like object from the api
            this.fossils = Object.keys(this.fossils).map(i => this.fossils[i]) //convert it to array of objects to use filter
            console.log(this.fossils)//logged to make sure working correctly
        })
        .finally(() => (this.loading = false))
    },
    
    computed:{
        filteredFossils: function(){
            return this.fossils.filter((fossil)=>{
                return fossil.name['name-USen'].match(this.search.toLowerCase())
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