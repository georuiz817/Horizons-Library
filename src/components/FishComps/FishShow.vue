<template>
    <div>
        <div v-if="loading">
            <b-spinner class='mt-5' variant="warning" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
        </div>
        <div v-else>
            <b-card class="mx-auto mb-5 mt-5" style="max-width: 70%;">
                <b-row>
                    <b-col sm="6">
                        <img :src="currentFish.image_uri" width='100%' height="100%">
                    </b-col>
                    <b-col sm="6">
                        <b-card-body>
                            <b-card-title>{{currentFish.name['name-USen'] | capitalize}}</b-card-title>
                            <b-card-text><em>{{currentFish['catch-phrase']}}</em></b-card-text>
                        </b-card-body>
                            <hr>
                            <b-card-body sm="6" class='mt-2'>
                                <b-card-title>Icon</b-card-title>
                                <img :src='currentFish.icon_uri' width="20%"/>
                            </b-card-body>
                            <hr>
                            <b-card-body sm="6" class='mt-2'>
                                <b-card-title>Price</b-card-title>
                                <b-card-text>Store price:  {{currentFish.price}}<img width='15%' src='../../assets/bells_pic.png'/></b-card-text>
                                <b-card-text>Cjs price: {{currentFish['price-cj']}}<img width='15%' src='../../assets/bells_pic.png'/></b-card-text>
                            </b-card-body>
                            <hr>
                            <b-card-body class="mt-2">
                                <b-card-title>Avaliability</b-card-title>
                                <b-row> 
                                    <b-col sm="6" class="mt-2">
                                        <b-card-text>Location: {{currentFish.availability.location}}</b-card-text>
                                    </b-col>
                                    <b-col sm="6" class="mt-2">
                                        <b-card-text>Rarity: {{currentFish.availability.rarity}}</b-card-text>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col sm="6" class='mt-2'>
                                        <b-card-text>Shadow Size: {{currentFish.shadow}}</b-card-text>
                                    </b-col>
                                    <b-col sm='6' class='mt-2'>
                                        <b-card-text>Catchable all day?: {{currentFish.availability.isAllDay}}</b-card-text>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                            <hr>
                    </b-col>
                </b-row>
                <b-card-body>
                    <b-card-title>Musuem description</b-card-title>
                    <b-card-text>{{currentFish['museum-phrase']}}</b-card-text>
                </b-card-body>
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
            currentFish: {},
        }
    },

       created(){
        this.loading = true 
        axios.get('http://acnhapi.com/v1/fish/' + this.id)
        .then(response => {
            this.currentFish = response.data;
        })
        .finally(() => (this.loading = false))
        },
    }

</script>






                   