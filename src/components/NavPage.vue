<template>
    <div>
        <b-navbar>
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



<style >
.navbar{
    background-color: #83A0A0;
}
</style>