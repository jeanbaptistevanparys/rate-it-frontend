<template >
    <article class="ratable">
        <img :src="image" :alt="title">
        <div>
            <div class="buttons">
                <button class="remove" v-if="this.owner" @click="deleteratable">Remove</button>
                <button class="edit" v-if="this.owner" @click="editratable">Edit</button>
            </div>
            <div>
                <h4 v-if="this.owner">{{ this.ratable.ratable_language[0].language === 'en' ? 'English' : 'Dutch' }}</h4>
                <h3>{{ title }}</h3>
                <p>{{ discription }}</p>
            </div>
            <div v-if="this.owner">
                <h4>{{ this.ratable.ratable_language[1].language === 'en' ? 'English' : 'Dutch' }}</h4>
                <h3>{{ title2 }}</h3>
                <p>{{ discription2 }}</p>
            </div>
            <form @submit.prevent>

                <h5>{{ avg }}</h5>

                <div>
                    <input type="number" min="0" max="10" placeholder="0" :class="{ unrate: rating != null }"
                        v-model="score">
                    <input v-if="rating == null" @click="rate" type="submit" value="Rate!">
                    <input v-if="rating != null" @click="unrate(rating)" type="submit" class="unrate" value="Unrate">
                </div>

            </form>
        </div>
    </article>
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
        owner: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            image: this.ratable.image,
            title: this.ratable.ratable_language[0].name,
            discription: this.ratable.ratable_language[0].description,
            avg: Number(this.ratable.average_score).toFixed(1),
            rating: this.ratable.user_rating,
            score: this.ratable.user_rating ? this.ratable.user_rating.score : "",
            title2: this.ratable.ratable_language[1] ? this.ratable.ratable_language[1].name : "",
            discription2: this.ratable.ratable_language[1] ? this.ratable.ratable_language[1].description : "",
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
            this.score = this.ratable.user_rating ? this.ratable.user_rating.score : "";
            this.title2 = this.ratable.ratable_language[1] ? this.ratable.ratable_language[1].name : "";
            this.discription2 = this.ratable.ratable_language[1] ? this.ratable.ratable_language[1].description : "";
        },
    },
    methods: {
        deleteratable() {
            this.$emit('deleteratable', this.ratable.id);
        },
        editratable() {
            this.$emit('editratable', this.ratable.id);
        },
        rate() {
            this.$emit('rate', { ratable: this.ratable, score: this.score });
        },
        unrate(rating) {
            this.$emit('unrate', { ratable: this.ratable, rating: rating });
        }
    },
}
</script>