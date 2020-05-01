<template>
<div>
    <div v-if="loading">
        <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
    <div v-else>
        <b-card  class='loopCard mx-auto mb-2 mt-2 bg-warning'>
            <b-card-title>Villagers</b-card-title>
            <b-card-text>Choose a Villager and say hello</b-card-text>
        </b-card>
        <div v-for="v in villagers" v-bind:key='v.id'>
            <b-card class="loopCard mx-auto mb-2">                 
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

.loopCard{
    width: 50%;
      color: #2c3e50;;
}

</style>