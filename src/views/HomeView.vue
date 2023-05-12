<template>
  <top></top>
  <main class="home">

    <topics></topics>
    <p> nothing here</p>
    <!-- insert hottest here -->



  </main>
</template>
<script>
import Ratables from '../modules/Ratables/components/Ratables.vue';
import Top from '../modules/Top/components/Top.vue';
import Topics from '../modules/Topics/components/Topics.vue';
import { useRoute, useRouter } from 'vue-router';
export default {
  name: 'HomeView',
  components: {
    Top,
    Topics,
    Ratables
  },
}
</script>