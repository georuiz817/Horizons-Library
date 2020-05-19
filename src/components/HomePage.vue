<template>
    <div class='home-page'>
        <b-container>
            <b-jumbotron  bg-variant="white" class='mt-3 mx-auto'>
                <img width="50%" src='../assets/project-logo.png'/>
                <br>
                <br>
                <router-link to="/about"><b-button variant="primary">More Info</b-button></router-link>
            </b-jumbotron>
        </b-container>
        <b-container> 
            <b-row class='mb-2'>
                <b-col>
                      <b-card title="Fish">
                        <b-card-text>
                            I caught a blue marlin! Listen to this fish, it's got a point.
                        </b-card-text>
                         <router-link to="/fish"><b-button variant="primary">Explore</b-button></router-link>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card title='Villagers'>
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

</style>

