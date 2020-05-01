<template>
<div>
    <div v-if="loading">
        <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
    <div v-else>
        <b-card class='loopCard mx-auto mb-2 mt-2'>
            <b-card-title>Fish</b-card-title>
            <b-card-text>Click a fish and get all its additional details</b-card-text>
        </b-card>
        <div v-for="f in fish" v-bind:key='f.id'>
            <b-card class="loopCard mx-auto mb-2">
                <router-link class="routerLink" :to="'/currentFish/' + f.id" >
                <b-card-title>{{f.name['name-en']}}</b-card-title>
                <b-card-text>${{f.price}}</b-card-text>
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
            loading: false,
        }
    },

    created(){
        this.loading = true 
        axios.get('http://acnhapi.com/fish/')
        .then(fish => {
            this.fish = fish.data
        })
        .finally(() => (this.loading = false))
    },
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