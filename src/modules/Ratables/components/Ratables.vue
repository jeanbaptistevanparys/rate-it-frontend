<template>
    <div class="ratables">
        <Ratable v-for="ratable in ratables" :key="ratable.id" 
            :ratable="ratable" :topic="this.topic" @rate="rate" @unrate="unrate"
        />
    </div>
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
        lang: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            ratables: [],
            "service": new RatableService(),
        }
    },
    async mounted() {
        this.reloadRatables()
    },
    watch: {
        topic: function () {
            this.reloadRatables()
        },
        lang: function () {
            this.reloadRatables()
        },
    },
    methods: {
        async rate(emit) {
            await this.service.rate(this.topic, emit.ratable.id, emit.score)
            this.reloadRatables()
        },
        async unrate(emit) {
            await this.service.unrate(this.topic, emit.ratable.id, emit.rating.id)
            this.reloadRatables()
        },
        async reloadRatables() {
            this.ratables = await this.service.getRatables(this.topic, this.lang)
            console.log(this.ratables)
        }

    },
}
</script>