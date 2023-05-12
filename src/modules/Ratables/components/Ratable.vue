<template >
    <section class="ratable">
        <img :src="image" :alt="title">
        <div>
            <h2>{{ title }}</h2>
            <p>{{ discription }}</p>


            <form @submit.prevent>

                <h3>{{ avg }}</h3>

                <input type="number" :class="{ unrate: rating != null }" placeholder="rating" v-model="score">

                <input v-if="rating == null" @click="rate" type="submit" value="Rate!">

                <input v-if="rating != null" @click="unrate(rating)" type="submit" class="unrate" value="unrate">

            </form>
        </div>

    </section>
</template>
<script>
import router from '../../../router/index';
import RatableService from '../services/RatableService';
export default {
    name: 'Ratable',
    props: {
        ratable: {
            type: Object,
            required: true
        },
        topic: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            image: this.ratable.image,
            title: this.ratable.ratable_language[0].name,
            discription: this.ratable.ratable_language[0].description,
            avg: Number(this.ratable.average_score).toFixed(1),
            rating: this.ratable.user_rating,
            "service": new RatableService(),
            score: this.ratable.user_rating ? this.ratable.user_rating.score : 0,
        };
    },
    methods: {
        async rate() {
            this.service.rate(this.topic, this.ratable.id, { score: this.score, ratingId: this.ratable.id });
        },
        async unrate(rating) {
            this.service.unrate(this.topic, this.ratable.id, rating);
        }
    },
}
</script>

<!-- ask casier -->