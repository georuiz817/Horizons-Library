<template>
<div>
    <div v-if="loading">
        <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
    <div v-else>
        <h1>Villagers</h1>
        <p>Click a Villager to meet them</p>
        <div v-for="v in villagers" v-bind:key='v.id' class="card">
            <b-card text-variant="primary">                 
                <b-card-title>{{v.name['name-en']}}</b-card-title>
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
            villagers: [],
            loading: false,
        }
    },

    created(){
        this.loading = true 
        axios.get('http://acnhapi.com/villagers/')
        .then(villagers => {
            this.villagers = villagers.data
        })
        .finally(() => (this.loading = false))
    },

}
</script>

<!-- divider -->

<style lang='scss'>

</style>