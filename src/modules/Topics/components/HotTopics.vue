<template>
    <div class="hot-topics">
        <h2>hot topics</h2>
        <ul>
            <li @click="select(topic.id)" v-for="(topic, index) in topics" :key="topic.id">
                <span>{{ "#" + (index + 1) }}</span> {{ topic.name }}
            </li>
        </ul>
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
            router: useRouter()
        }
    },
    async mounted() {
        this.topics = await this.service.getHotTopics();
        console.log(this.topics);
    },
    methods: {
        select(topicId) {
            this.$router.push({ name: 'topic', params: { id: topicId, lang: this.route.params.lang ? this.route.params.lang : 'nl' } })
        }
    },
}
</script>