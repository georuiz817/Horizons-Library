<template>
    <div class='home-page'>
        <b-jumbotron bg-variant="light" class='mt-3 mx-auto'  header="Horizons Library" lead="For all your Animal Crossing needs">
            <p>Choose a category and search through hundreds of avaliable options. Feel free to click one you like and get additional information.</p>
            <p>Horizons Library is a great tool to use through your time playing to find and learn about the game</p>
            <b-button variant="primary" href="#">More Info</b-button>
        </b-jumbotron>
        <b-container> 
            <b-row class='mb-2'>
                <b-col>
                    <b-card bg-variant="light" text-variant="dark" title="Fish">
                        <b-card-text>
                            I caught a blue marlin! Listen to this fish, it's got a point.
                        </b-card-text>
                         <router-link to="/fish"><b-button variant="primary">Explore</b-button></router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card bg-variant="light" text-variant="dark" title="Villagers">
                        <b-card-text>
                            It's cold outside, huh? Well, stick around and thaw yourself out!
                        </b-card-text>
                        <router-link to="/villagers"><b-button variant="primary">Explore</b-button></router-link>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
 
        
<style lang='scss'>

.jumbotron{
    color: #2c3e50;
}

</style>

