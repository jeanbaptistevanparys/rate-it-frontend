<template >
    <article  @click="select">
        <h3>{{ topic.name }}</h3>
        <p>number of ratables</p> 
        <!-- TODO insert number of ratables -->
    </article>
</template>
<script>
export default {
    name: 'Topic',
    props: {
        topic: {
            type: Object,
            required: true
        },
    },
    methods: {
        select() {
            console.log('selecting topic', this.topic)
            this.$emit('select', this.topic)
        }
    },
}
</script>