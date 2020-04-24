<template>
    <div>
        <h1>Fish</h1>
        <li v-for="f in fish" v-bind:key='f.id'>{{f.name['name-en']}}</li>
    </div>
</template>

<!-- divider -->

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