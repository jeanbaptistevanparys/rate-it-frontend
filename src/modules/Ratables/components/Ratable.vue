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
            score: this.ratable.user_rating ? this.ratable.user_rating.score : 0,
        };
    },
    watch:
    {
        ratable: function () {
            this.image = this.ratable.image;
            this.title = this.ratable.ratable_language[0].name;
            this.discription = this.ratable.ratable_language[0].description;
            this.avg = Number(this.ratable.average_score).toFixed(1);
            this.rating = this.ratable.user_rating;
            this.score = this.ratable.user_rating ? this.ratable.user_rating.score : 0;
        }
    },
    methods: {
        rate() {
            this.$emit('rate', { ratable: this.ratable, score: this.score });
        },
        unrate(rating) {
            this.$emit('unrate', { ratable: this.ratable, rating: rating });
        }
    },
}
</script>