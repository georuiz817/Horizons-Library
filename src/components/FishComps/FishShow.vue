<template>
    <div>
        <div v-if="loading">
            <b-spinner class='mt-5' variant="warning" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
        </div>
        <div v-else>
        <b-card class="mx-auto mb-5 mt-5" style="max-width: 70%;">
            <b-row>
                <b-col sm="6">
                    <img :src="'http://acnhapi.com/images/fish/' + currentFish.id" width='100%' height="100%">
                </b-col>
                <b-col sm="6">
                    <b-card-body>
                        <b-card-title>{{currentFish.name['name-en']}}</b-card-title>
                        <b-card-text>{{currentFish['catch-phrase']}}</b-card-text>
                        <hr>
                        <b-card-body sm="6" class='mt-2'>
                            <b-card-title>Price</b-card-title>
                            <b-card-text>{{currentFish.price}} bells</b-card-text>
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
                                <b-col sm="6" class='mt-2'>
                                    <b-card-text>All day?: {{currentFish.availability.isAllDay}}</b-card-text>
                                </b-col>
                            </b-row>
                        </b-card-body>
                        <hr>
                    </b-card-body>
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
            FishImage: null,
            loading: false,
        }
    },

       created(){
        this.loading = true 
        axios.all([
          axios.get('http://acnhapi.com/fish/' + this.id),
          axios.get('http://acnhapi.com/images/fish/' + this.id),
        ])
        .then(axios.spread((currentFish, FishImage) => {
              this.currentFish = currentFish.data;
              this.FishImage = FishImage.data
              })
            )
        .finally(() => (this.loading = false))
        },
    }

</script>

<style lang="scss">


</style>





                   