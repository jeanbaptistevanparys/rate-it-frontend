<template >
    <img :src="img" alt="meme" width="500" height="500">
</template>
<script>
import MemeService from '../services/MemeService.js';
export default {
    name: 'Meme',
    data() {
        return {
            img: '',
            service: new MemeService(),
        };
    },
    async mounted() {
        this.img = await this.service.getRandomMeme();
    },
};
</script>