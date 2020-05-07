<template>
    <div>
        <div v-if="loading">
            <b-spinner class='mt-5' variant="warning" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
        </div>
        <div v-else>
        <b-card class="mx-auto mb-5 mt-5" style="max-width: 70%;">
            <b-row>
                <b-col md="6">
                   <img :src="'http://acnhapi.com/images/villagers/' + currentVillager.id" width='100%' height="100%">
                </b-col>
                <b-col md="6">
                    <b-card-body>
                        <b-card-title>{{currentVillager.name['name-en']}}</b-card-title>
                        <b-card-text>"{{currentVillager['catch-phrase']}}"</b-card-text>
                        <hr>
                        <b-card-body class="mt-2">
                            <b-card-title>About</b-card-title>
                            <b-row> 
                                <b-col sm='6' class='mt-2'>
                                    <b-card-text>Birthday: {{currentVillager['birthday-string']}}</b-card-text>
                                </b-col>
                                <b-col sm='6' class='mt-2'>
                                    <b-card-text>Gender: {{currentVillager.gender}}</b-card-text>
                                </b-col>
                            </b-row>
                            <b-row >
                                 <b-col sm='6' class='mt-2'>
                                    <b-card-text>Personality: {{currentVillager.personality}}</b-card-text>
                                </b-col>
                                <b-col sm='6' class='mt-2'>
                                    <b-card-text>Species: {{currentVillager.species}}</b-card-text>
                                </b-col>                               
                            </b-row>
                        </b-card-body>
                        <hr>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
        data() {
        return{
            id: this.$route.params.id,
            currentVillager: {},
            VillagerImage: null,
            loading: false,
        }
    },

       created(){
        this.loading = true 
        axios.all([
          axios.get('http://acnhapi.com/villagers/' + this.id),
          axios.get('http://acnhapi.com/images/villagers/' + this.id),
        ])
        .then(axios.spread((currentVillager, VillagerImage) => {
              this.currentVillager = currentVillager.data;
              this.VillagerImage = VillagerImage.data
              })
            )
        .finally(() => (this.loading = false))
        },
    }

</script>

<style lang="scss">


</style>
