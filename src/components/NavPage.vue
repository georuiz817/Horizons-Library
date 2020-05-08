<template>
    <div>
        <b-navbar type='light' variant='light'>
            <b-navbar-nav>
                <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/about">About</router-link></b-nav-item>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Categories" right>
                    <b-dropdown-item href="#"><router-link to="/fish">Fish</router-link></b-dropdown-item>
                    <b-dropdown-item href='#'><router-link to='/villagers'>Villagers</router-link></b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>



<style  lang='scss'>

</style>