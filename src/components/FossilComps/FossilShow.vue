<template>
    <div>
        <div v-if="loading">
            <b-spinner class='mt-5' variant="warning" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
        </div>
        <div v-else>
            hi
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
        data() {
        return{
            name: this.$route.params.id,
            currentFossil: {},
        }
    },

       created(){
        this.loading = true 
        axios.get('http://acnhapi.com/v1/fossils/' + this.name)
        .then(response => {
            this.currentFossil = response.data;
        })
        .finally(() => (this.loading = false))
        },
    }

</script>