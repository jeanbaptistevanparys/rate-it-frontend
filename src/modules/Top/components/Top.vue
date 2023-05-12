<template>
    <header class="top">
        <h1>
            <router-link to="/nl/home">
                RATE-IT
            </router-link>
        </h1>
        <nav>
            <div class="lang">
                <a @click="setLang('nl')" href="#" :class="{ active: this.route.params.lang == 'nl' }">NL</a>
                |
                <a @click="setLang('en')" href="#" :class="{ active: this.route.params.lang == 'en' }">EN</a>
            </div>

            <button>Create</button>

            <RouterLink to="/nl/home">
                <img src="../../../assets/logo.svg" alt="vue">
            </RouterLink>
        </nav>
    </header>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
export default {
    name: 'Top',
    components: {
    },
    methods: {
        setLang(lang) {
            this.router.push({ name: 'topic', params: {id: this.route.params.id ,lang: lang } });
            // ask casier maybe not use this top at the home page
        }
    },
    data() {
        return {
            router: useRouter(),
            route: useRoute(),
        }
    },
}
</script>