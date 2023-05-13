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

            <button @click="createTopic">Create</button>

            <RouterLink to="/nl/home">
                <img src="../../../assets/img/default.jpg" alt="vue">
            </RouterLink>
        </nav>
    </header>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import TopicService from '../../Topics/services/TopicService.js';
export default {
    name: 'Top',
    components: {
    },
    data() {
        return {
            router: useRouter(),
            route: useRoute(),
            service : new TopicService(),
        }
    },
    methods: {
        setLang(lang) {
            let params;
            if (this.route.params.id) {
                params = { id: this.route.params.id, lang: lang }
            } else {
                params = { lang: lang }
            }
            this.router.push({ name: this.route.name, params: params });
        },
        async createTopic() {
            const topicname = await prompt("Please enter a topic name", "New topic");
            if (topicname != null) {
                const topic  = await this.service.createTopic(topicname);
                
                this.router.push({ name: 'topic', params: {id: topic.id , lang: this.route.params.lang } });
            }
        }
    },
    

}
</script>