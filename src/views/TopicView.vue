<template>
  <top @createtopic="crateTopic"></top>
  <main class="home">

    <topics @select="selectTopic" :topic="parseInt(route.params.id)"></topics>
    <ratables v-if="route.params.id" :topic="parseInt(route.params.id)" :lang="route.params.lang">
    </ratables>
    <h2 v-else> Select a topic to start </h2>

  </main>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import Ratables from '../modules/Ratables/components/Ratables.vue';
import Top from '../modules/Top/components/Top.vue';
import Topics from '../modules/Topics/components/Topics.vue';
import TopicService from '../modules/Topics/services/TopicService';
export default {
  name: 'HomeView',
  components: {
    Top,
    Topics,
    Ratables
  },
  data() {
    return {
      router: useRouter(),
      route: useRoute(),
      service: new TopicService(),
    }
  },
  methods: {
    selectTopic(topic) {
      this.router.push({ name: 'topic', params: { id: topic.id, lang : this.route.params.lang  } })
    },
    async crateTopic(topicname) {
      const topic = await this.service.createTopic(topicname);
      this.selectTopic(topic);
    }
  },
}
</script>