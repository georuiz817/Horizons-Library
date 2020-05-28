<template>
    <div>
        <b-container>
            <b-jumbotron  align='left' bg-variant="light" class='mt-3 mx-auto'  header="About" lead="">
                <p>Horizons library is quick and easily acessible information regarding everything Animal Crossing 
                    New Horizons. You can currently switch between Fish and Villagers 
                    (Bugs and Fossils coming soon) by clicking the 'Explore' button.
                    Once the list has loaded you can select or search for a specific item and go to it's individual
                    page that includes a more detailed description and image.
                </p>
                <hr class="my-4">
                <h1>Vue</h1>
                <p> Horizons Library is a front end website made with Vue.js and deployed on the web PaSS Heroku. Having built websites with React and vanilla HTML/CSS, I was curious to try the newer and different framework. It provided a lightweight and easy to use template, as well as Bootstrap Vue to make your site mobile responsive and aesthitcally pleasing. One simple but useful component that stands out to me personally using Vue.js is the v-for directive. Having to list the large amount of Animal Crossing data is made easy and completed quickly.</p>
                <hr class="my-4">
                <h1>ACHNI API</h1>
                <p>According to the official site 'ACNH API is a free RESTful API for critters, fossils, art, music and villagers from Animal Crossing: New Horizons.'</p>
                <p>When searching for an API, I wanted something simple and easily acessible. The reason why I decided to go with this one is due to it's ease of acess. No login, key, or payment is required to make requests. It has the ability to grab all the objects of a certain topic, or a specific one based off its id. All the objects for a given category are stored in a array like object. Be careful if you plan on using functions like filter on your data, as you will need to convert it to an array first. I used Axios for data requests/promises as it's my preference.</p>
            </b-jumbotron>  
        </b-container>
    </div>
</template>
