<template>
    <ul>
        <li v-for="ratable in ratables" :key="ratable.id">
            <Ratable :ratable="ratable" :topic="this.topic" />
        </li>
    </ul>
</template>
<script>
import Ratable from './Ratable.vue'
import RatableService from '../services/RatableService';
export default {
    name: 'Ratables',
    components: {
        Ratable,
    },
    props: {
        topic: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            ratables: [],
            "service": new RatableService(),
        }
    },
    async mounted() {
        this.ratables = await this.service.getRatables(this.topic)
    },
    watch: {
        topic: async function () {
            this.ratables = await this.service.getRatables(this.topic)
        }
    },
}
</script>