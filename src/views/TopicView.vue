<template>
  <top></top>
  <main class="home">

    <topics :topic="parseInt(route.params.id)"></topics>
    <ratables v-if="route.params.id" :topic="parseInt(route.params.id)" :lang="route.params.lang">
    </ratables>
    <h2 v-else> Select a topic to start </h2>

  </main>
</template>
<script>
import { useRoute } from 'vue-router';
import Ratables from '../modules/Ratables/components/Ratables.vue';
import Top from '../modules/Top/components/Top.vue';
import Topics from '../modules/Topics/components/Topics.vue';
export default {
  name: 'HomeView',
  components: {
    Top,
    Topics,
    Ratables
  },
  data() {
    return {
      route: useRoute(),
    }
  }
}
</script>