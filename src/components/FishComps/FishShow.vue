<template>
    <div>
        <b-card class="mx-auto mt-5" style="max-width: 70%;">
            <b-row>
                <b-col md="6">
                    <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
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
        }
    },

       created(){
        axios.get('http://acnhapi.com/fish/' + this.id)
        .then(currentFish => {
            this.currentFish = currentFish.data;
        })
    },
    
}

</script>

<style lang="stylus">

</style>






                   