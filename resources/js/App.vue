<template>
    <div>
        <Header></Header>
        <div id="layoutSidenav">
            <sidebar></sidebar>
            <div id="layoutSidenav_content">
                <router-view></router-view>
                <footer></footer>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        Header, Sidebar, Footer
    }
}
</script>

