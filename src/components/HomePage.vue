<template>
    <div>
        <b-jumbotron header="Horizons Library" lead="For all your Animal Crossing needs">
            <p>Choose a category and search through hundreds of avaliable options. Feel free to click one you like and get additional information.</p>
            <p>Horizons Library is a great tool to use through your time playing to find and learn about the game</p>
            <b-button variant="primary" href="#">More Info</b-button>
        </b-jumbotron>
        <b-container> 
        <b-row class="mb-2">
            <b-col>
                <b-card bg-variant="dark" text-variant="white" title="Fish">
                    <b-card-text>
                        I caught a blue marlin! Listen to this fish, it's got a point.
                    </b-card-text>
                    <router-link to="/fish"><b-button variant="primary">Explore</b-button></router-link>
                </b-card>
            </b-col>
            <b-col>
                <b-card bg-variant="dark" text-variant="white" title="Villagers">
                    <b-card-text>
                        It's cold outside, huh? Well, stick around and thaw yourself out!
                    </b-card-text>
                    <b-button href="#" variant="primary">Explore</b-button>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="mb-2">
            <b-col>
                <b-card bg-variant="dark" text-variant="white" title="Bugs">
                    <b-card-text>
                        I caught a mantis! Man, 'tis so cool!
                    </b-card-text>
                    <b-button href="#" variant="primary">Explore</b-button>
                </b-card>
            </b-col>
            <b-col>
                <b-card bg-variant="dark" text-variant="white" title="Fossils">
                    <b-card-text>
                        Look! I dug up a fossil!
                    </b-card-text>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-col>
        </b-row>
       </b-container>
    </div>
</template>
 
        
<style>
.jumbotron{
    background: #BCA0BC;
}
</style>

