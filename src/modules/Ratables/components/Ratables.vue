<template>
    <div class="ratables">
        <Ratable :owner="this.owner" v-for="ratable in ratables" :key="ratable.id" :ratable="ratable" :topic="this.topic"
            @rate="rate" @unrate="unrate" @edit="edit" @deleteratable="deleteratable" />
    </div>
</template>
<script>
import Ratable from './Ratable.vue'
import RatableService from '../services/RatableService';
import { useRouter } from 'vue-router';
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
            owner: false,
            router: new useRouter()
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
            const data = await this.service.getRatables(this.topic, this.lang)
                this.owner = data.is_owner;
                this.ratables = data.ratables.data

        },
        async deleteratable(id) {
            await this.service.deleteRatable(this.topic, id)
            this.reloadRatables()
        },
        edit(id) {
            this.router.push({ name: 'ratable', params: { lang: this.lang, topicid: this.topic, ratableid: id } })
        },
    },
}
</script>