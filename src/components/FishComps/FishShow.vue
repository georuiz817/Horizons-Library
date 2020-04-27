<template>
    <div>
    {{currentFish.id}}
    {{currentFish.price}}
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