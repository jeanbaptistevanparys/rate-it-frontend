<template>
    <aside class="topics">
        <h2>TOPICS</h2>
        <div class="search">
            <input type="text" placeholder="Search topics" v-model="filter" @input="getTopics">
        </div>
        <ul>
            <Topic v-for="topic in topics" :key="topic.id" :topic="topic" :class="{ 'selected' : parseInt(topic.id) === this.topic }"/>
        </ul>
        <button v-if="hasTopics" @click="showMore">More</button>
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
            filter: '',
            limit: 6,
            selectedTopic: null,
            "service": new TopicService(),
        }
    },
    methods: {
        async getTopics() {
            if (this.filter !== '') {
                this.topics = await this.service.getTopics(this.filter);
            } else {
                this.topics = [];
            }
            this.limit = 6;
        },
        async showMore() {
            this.limit += 3;
            this.topics = await this.service.getTopics(this.filter, this.limit);
        }
    },
    computed: {
        hasTopics() {
            return this.topics.length >= 6;
        }
    }
}
</script>