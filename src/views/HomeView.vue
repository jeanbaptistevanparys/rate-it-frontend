<template>
  <top></top>
  <main class="home">
    <topics></topics>
    <hot-topics></hot-topics>
  </main>
</template>
<script>
import Top from '../modules/Top/components/Top.vue';
import Topics from '../modules/Topics/components/Topics.vue';
import HotTopics from '../modules/Topics/components/HotTopics.vue';
export default {
  name: 'HomeView',
  components: {
    Top,
    Topics,
    HotTopics
  },
}
</script>