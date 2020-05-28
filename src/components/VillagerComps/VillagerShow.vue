<template>
    <div>
        <div v-if="loading">
            <b-spinner class='mt-5' variant="warning" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
        </div>
        <div v-else>
            <b-card class="mx-auto mb-5 mt-5" style="max-width: 70%;">
                <b-row>
                    <b-col md="6">
                        <img :src="currentVillager.image_uri" width='100%' height="100%">
                    </b-col>
                    <b-col md="6">
                        <b-card-body class='mt-3'>
                            <b-card-title title-tag='h1'>{{currentVillager.name['name-USen']}}</b-card-title>
                            <b-card-text><em>"{{currentVillager['catch-phrase']}}"</em></b-card-text>
                            <hr>
                        </b-card-body>
                        <b-card-body sm="6" class='mt-2'>
                            <b-card-title>Icon</b-card-title>
                            <img :src='currentVillager.icon_uri' width="20%"/>
                        </b-card-body>
                        <hr>
                        <b-card-body>
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
        }
    },

       created(){
        this.loading = true 
        axios.get('http://acnhapi.com/v1/villagers/' + this.id)
        .then(currentVillager => {
            this.currentVillager = currentVillager.data;
        })
        .finally(() => (this.loading = false))
        },
    }
    
</script>


