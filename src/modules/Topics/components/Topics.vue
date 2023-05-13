<template>
    <aside class="topics">
        <ul>
            <li v-for="topic in topics">
                <Topic :topic="topic" :class="{ 'selected' : parseInt(topic.id) == this.topic }"/>
            </li>
        </ul>
        <button>More</button>
    </aside>
</template>
<script>
import Topic from './Topic.vue'
import TopicService from '../services/TopicService';
export default {
    name: 'Topics',
    components: {
        Topic,
    },
    props: {
        topic: {
            type: Number,
        }
    },
    data() {
        return {
            topics: [],
            selectedTopic: null,
            "service": new TopicService(),
        }
    },
    async mounted() {
        this.topics = await this.service.getTopics();
    },
}
</script>