<template>
    <div class="hot-topics">
        <h2>hot topics</h2>
        <ul v-if="!loading">
            <li @click="select(topic.id)" v-for="(topic, index) in topics" :key="topic.id">
                <span>{{ "#" + (index + 1) }}</span>{{ topic.name }}
            </li>
        </ul>
        <div v-else class="loading"></div>
    </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import TopicService from '../services/TopicService';
export default {
    name: 'HotTopics',
    data() {
        return {
            topics: [],
            "service": new TopicService(),
            route: useRoute(),
            router: useRouter(),
            loading: true
        }
    },
    async mounted() {
        this.topics = await this.service.getHotTopics();
        this.loading = false;
    },
    methods: {
        select(topicId) {
            this.$router.push({ name: 'topic', params: { id: topicId, lang: this.route.params.lang ? this.route.params.lang : 'nl' } })
        }
    },
}
</script>