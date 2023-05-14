<template>
    <aside class="topics">
        <h2>TOPICS</h2>
        <div class="search">
            <input type="text" placeholder="Search topics">
        </div>
        <ul>
            <Topic v-for="topic in topics" :topic="topic" :class="{ 'selected' : parseInt(topic.id) == this.topic }"/>
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