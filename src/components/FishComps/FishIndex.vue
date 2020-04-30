<template>
<div>
    <h1>Fish</h1>
    <p>Click a fish and get all its additional details</p>
    <div v-for="f in fish" v-bind:key='f.id' class="card">
        <b-card text-variant="primary">
            <router-link :to="'/currentFish/' + f.id" >
            <b-card-title>{{f.name['name-en']}}</b-card-title>
            <b-card-text>${{f.price}}</b-card-text>
            </router-link>
            </b-card>
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
}
</script>

<!-- divider -->

<style lang='scss'>

</style>