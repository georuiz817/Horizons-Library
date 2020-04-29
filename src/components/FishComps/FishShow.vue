<template>
    <div>
        <b-card class="mx-auto mb-5 mt-5" style="max-width: 70%;">
            <b-row>
                <b-col md="6">
                   
                </b-col>
                <b-col md="6">
                    <b-card-body>
                        <b-card-title>{{currentFish.name['name-en']}}</b-card-title>
                        <b-card-text>{{currentFish['catch-phrase']}}</b-card-text>
                        <hr>
                        <b-card-body class='mt-2'>
                            <b-card-title>Price</b-card-title>
                            <b-card-text>{{currentFish.price}} bells</b-card-text>
                        </b-card-body>
                        <hr>
                        <b-card-body class="mt-2">
                            <b-card-title>Avaliability</b-card-title>
                            <b-row> 
                                <b-col>
                                    <b-card-text>Location: {{currentFish.availability.location}}</b-card-text>
                                </b-col>
                                <b-col>
                                    <b-card-text>Rarity: {{currentFish.availability.rarity}}</b-card-text>
                                </b-col>
                                <b-col>
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
    
</template>

<script>
import axios from 'axios'

export default {
        data() {
        return{
            id: this.$route.params.id,
            currentFish: {},
            FishImage: null,
        }
    },

       created(){
        axios.all([
          axios.get('http://acnhapi.com/fish/' + this.id),
          axios.get('http://acnhapi.com/images/fish/' + this.id),
        ])
        .then(axios.spread((currentFish, FishImage) => {
              this.currentFish = currentFish.data;
              this.FishImage = FishImage.data
        }));
    },
    
}

</script>

<style lang="stylus">

</style>




       created(){
        axios.get('http://acnhapi.com/fish/' + this.id)
        .then(currentFish => {
            this.currentFish = currentFish.data;
        })
    },

                   