<template >
    <article @click="select">
        <h3>{{ topic.name }}</h3>
        <p>{{ topic.ratables_count }} ratables</p>
        <!-- TODO insert number of ratables -->
    </article>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
export default {
    name: 'Topic',
    data() {
        return {
            route: useRoute(),
            router: useRouter()
        }
    },
    props: {
        topic: {
            type: Object,
            required: true
        },
    },
    methods: {
        select() {
            this.router.push({ name: 'topic', params: { id: this.topic.id, lang: this.route.params.lang ? this.route.params.lang : 'nl'  } })
        }
    },

}
</script>