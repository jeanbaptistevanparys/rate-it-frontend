<template>
    <aside class="topics">
        <ul>
            <li v-for="topic in topics" :key="topic.id" >
                <Topic :topic="topic"  @select="selectTopic(topic.id)" :class="{ 'selected' : topic.id == selectedTopic }"/>
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
    data() {
        return {
            topics: [],
            selectedTopic: null,
            "service": new TopicService(),
        }
    },
    methods: {
        selectTopic(topic) {
            this.selectedTopic = topic
            this.$emit('select', topic)
        }
    },
    async mounted() {
        this.topics = await this.service.getTopics()
    },
}
</script>
<style>
    
</style>