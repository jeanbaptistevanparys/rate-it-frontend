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
            let params;
            if(this.route.params.id){
                params = {id: this.route.params.id ,lang: lang }
            }else{
                params = {lang: lang }
            }
            this.router.push({ name: this.route.name, params: params });
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