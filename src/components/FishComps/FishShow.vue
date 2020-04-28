<template>
    <div>
        <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 40rem;"
            class="mb-2 mt-2 mx-auto"
        >
            <b-card-title>{{currentFish.name['name-en']}}</b-card-title>
            <b-card-text>{{currentFish['catch-phrase']}}</b-card-text>
            <b-row>
                <b-col class='mb-5 mt-2'> 
                    <b-card-text>Avaliability</b-card-text>
                    <b-card-text>Location: {{currentFish.availability.location}}</b-card-text>
                    <b-card-text>Rarity: {{currentFish.availability.rarity}}</b-card-text>
                    <b-card-text>Rarity: {{currentFish.availability.rarity}}</b-card-text>
                    <b-card-text>All day?: {{currentFish.availability.isAllDay}}</b-card-text>
                    <b-card-text>All year?: {{currentFish.availability.isAllYear}}</b-card-text>
                    <b-card-text>Through: {{currentFish.availability['month-northern']}} and {{currentFish.availability['month-southern']}}</b-card-text>
                </b-col>
                <b-col class='mb-5 mt-2'> 
                    <b-card-text>Price</b-card-text>
                    <b-card-text>{{currentFish.price}} bells</b-card-text>
                </b-col>
            </b-row>
                                <b-card-text>Musuem Description</b-card-text>
                    <b-card-text>{{currentFish['museum-phrase']}}</b-card-text>
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