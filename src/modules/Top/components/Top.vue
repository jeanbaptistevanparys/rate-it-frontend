<template>
    <header class="top">
        <h1>
            <router-link to="/"> 
                RATE-IT
            </router-link></h1>
            <nav>
                <div class="lang">
                    <a href="#">NL</a> 
                    | 
                    <a href="#">EN</a>
                </div>

                <button>Create</button>

                <RouterLink to="/acount">
                    <img src="../../../assets/logo.svg" alt="vue">
                </RouterLink>
            </nav>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'Top',
    components: {
        RouterLink
    }
}
</script>