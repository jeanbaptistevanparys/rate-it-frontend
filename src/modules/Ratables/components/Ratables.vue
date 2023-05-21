<template>
    <div class="ratables">
        <div class="topbar">
            <div>
                <h2>Ratables</h2>
                <button class="delete" v-if="this.owner" @click="deletetopic">Delete</button>
                <button class="create" v-if="this.owner" @click="createratable">Create</button>
            </div>
            <input class="search" type="text" placeholder="Search ratables" v-model="filter" @input="reloadRatables">
        </div>
        <div v-if="!loading">
            <Ratable :owner="this.owner" v-for="ratable in ratables" :key="ratable.id" :ratable="ratable" :topic="this.topic"
            @rate="rate" @unrate="unrate" @editratable="editratable" @deleteratable="deleteratable" />
            <ratable-pagination v-if="paging" class="pagination" v-model:page="page" v-model:isNext="next" v-model:isPrevious="previous" @previous="setPage" @next="setPage" />
        </div>
        <div v-else class="loading"></div>
    </div>
</template>
<script>
import Ratable from './Ratable.vue';
import RatableService from '../services/RatableService';
import RatablePagination from './RatablePagination.vue';
import { useRouter } from 'vue-router';
import TopicService from '../../Topics/services/TopicService';
export default {
    name: 'Ratables',
    components: {
        Ratable, RatablePagination
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
            service: new RatableService(),
            TopicService: new TopicService(),
            owner: false,
            router: new useRouter(),
            filter: '',
            page: 1,
            loading: true,
            paging: false,
            previous: false,
            next: false,
        };
    },
    async mounted() {
        this.reloadRatables();
    },
    watch: {
        topic: function () {
            this.reloadRatables();
        },
        lang: function () {
            this.reloadRatables();
        },
        page: function () {
            this.reloadRatables();
        },
    },
    methods: {
        setPage(page) {
            page = parseInt(page);
            if (page < 1) {
                page = 1;
            }
            this.page = page;
        },
        async rate(emit) {
            const response = await this.service.rate(this.topic, emit.ratable.id, emit.score);
            if (response.status === 401) {
                this.router.push({ name: 'login' });
            }
            await this.reloadRatables();
        },
        async unrate(emit) {
            const response = await this.service.unrate(this.topic, emit.ratable.id, emit.rating.id);
            if (response.status === 401) {
                this.router.push({ name: 'login' });
            }
            await this.reloadRatables();
        },
        async reloadRatables() {
            const data = await this.service
                .setPage(this.page)
                .getRatables(this.topic, this.lang, this.filter);
            this.owner = data.is_owner;
            this.ratables = data.ratables.data;
            console.log(data.ratables);
            if (data.ratables.last_page > 1) this.paging = true;
            if (data.ratables.current_page != 1) this.previous = true;
            else this.previous = false;
            if (data.ratables.current_page != data.ratables.last_page) this.next = true;
            else this.next = false;
            this.loading = false;

        },
        async deleteratable(id) {
            const response = await this.service.deleteRatable(this.topic, id);
            if (response.status === 401) {
                this.router.push({ name: 'login' });
            }
            await this.reloadRatables();
        },
        editratable(id) {
            this.router.push({ name: 'ratable', params: { lang: this.lang, topicid: this.topic, ratableid: id } });
        },
        createratable() {
            this.router.push({ name: 'ratable', params: { lang: this.lang, topicid: this.topic } });
        },
        async deletetopic() {
            const response = this.TopicService.deleteTopic(this.topic);
            if (response.status !== 200) {
                this.router.push({ name: 'login' });
            }
            else {
                this.router.push({ name: 'home', params: { lang: this.lang } });
            }
        }
    },
};
</script>
