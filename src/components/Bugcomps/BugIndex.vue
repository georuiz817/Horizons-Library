<template>
<div>
    <div v-if="loading">
        <b-spinner class='mt-5' variant="warning" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
    </div>
    <div v-else>
        <b-card class='loopCard mx-auto mb-2 mt-2 bg-warning'>
            <b-card-title>Bugs</b-card-title>
            <b-card-text>Catch your favorite but and look at it up close</b-card-text>
            <b-form-input  type='text' v-model='search' placeholder="search bugs"></b-form-input>
        </b-card>
        <div v-for="b in filteredBugs" v-bind:key='b.id'>
            <router-link class="r-link" :to="'/currentBug/' + b.id" >
                <b-card class="loopCard mx-auto mb-2">
                    <b-card-title>{{b.name['name-USen'] | capitalize}}</b-card-title>
                    <b-card-text>{{b.price}}<img width='10%' src='../../assets/bells_pic.png'></b-card-text>
                </b-card>
            </router-link>
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
            bugs: [],
            search: '',
        }
    },

    created(){
        this.loading = true 
        axios.get('http://acnhapi.com/v1/bugs/')
        .then(response => {
            this.bugs = response.data, //take in the array like object from the api
            this.bugs = Object.keys(this.bugs).map(i => this.bugs[i]) //convert it to array of objects to use filter
            console.log(this.bugs)//logged to make sure working correctly
        })
        .finally(() => (this.loading = false))
    },
    
    computed:{
        filteredBugs: function(){
            return this.bugs.filter((bug)=>{
                return bug.name['name-USen'].match(this.search.toLowerCase())
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