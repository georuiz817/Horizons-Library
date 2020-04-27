<template>
<div>
    <div v-if="loading">
        <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
    <div v-else>
        <h1>Fish</h1>
        <p>Click a fish and get all its additional details</p>
        <div v-for="f in fish" v-bind:key='f.id' class="card">
            <b-card text-variant="primary">
                 <router-link :to="'/currentFish/' + f.id" >
                 <b-card-text>
                    {{f.name['name-en']}} 
                 </b-card-text>
                 <b-card-text>
                    ${{f.price}}
                 </b-card-text>
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

    methods(){
        
    }
}
</script>

<!-- divider -->

<style lang='scss'>

</style>