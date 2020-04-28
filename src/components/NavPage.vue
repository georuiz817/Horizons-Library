<template>
    <div>
        <b-navbar type='dark' variant='dark'>
            <b-navbar-nav>
                <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
                <b-nav-item href="#">About</b-nav-item>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Categories" right>
                    <b-dropdown-item href="#"><router-link to="/fish">Fish</router-link></b-dropdown-item>
                    <b-dropdown-item href="#">Villagers</b-dropdown-item>
                    <b-dropdown-item href="#">Fossils</b-dropdown-item>
                    <b-dropdown-item href="#">Bugs</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>



<style  lang='scss'>
.navbar{
    background-color: #A3D5FF;
}
</style>