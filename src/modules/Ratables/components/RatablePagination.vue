<template>
    <section class="pagination">
        <button v-if="isPrevious" @click="previous">previous</button>
        <input type="nubmer" :value="page" @input="updatePage"/>
        <button v-if="isNext" @click="next">next</button>
    </section>
</template>
<script>
export default {
    name: 'RatablePagination',
    props: {
        page: {
            type: Number,
            required: true
        },
        isNext: {
            type: Boolean,
            required: true
        },
        isPrevious: {
            type: Boolean,
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
            const page = parseInt(event.target.value);
            this.$emit('update:page', page);
        }
    }
};
</script>
