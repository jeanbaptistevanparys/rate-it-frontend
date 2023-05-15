<template>
    <section class="pagination">
        <button @click="previous">previous</button>
        <input type="nubmer" :value="page" @input="updatePage"/>
        <button @click="next">next</button>
    </section>
</template>
<script>
export default {
    name: 'RatablePagination',
    props: {
        page: {
            type: Number,
            required: true
        }
    },
    emits: ['previous', 'next', 'update:page'],
    methods: {
        previous() {
            const previousPage = parseInt(this.page) - 1;
            this.$emit('previous', previousPage);
        },
        next() {
            const nextPage = parseInt(this.page) + 1;
            this.$emit('next', nextPage);
        },
        updatePage(event) {
            this.$emit('update:page', event.target.value);
        }
    }
};
</script>
