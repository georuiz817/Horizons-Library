<template>
<div>
    <h1>Villagers</h1>
        <p>Click a Villager to meet them</p>
        <div v-for="v in villagers" v-bind:key='v.id' class="card">
            <b-card text-variant="primary">                 
                <b-card-title>{{v.name['name-en']}}</b-card-title>
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
            villagers: [],
        }
    },

    created(){
        axios.get('https://acnhapi.com/villagers/')
        .then(villagers => {
            this.villagers = villagers.data
        })
    },

}
</script>

<!-- divider -->

<style lang='scss'>

</style>