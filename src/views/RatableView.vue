<template>
  <top></top>
  <main class="home">


    <ratable-form :ratableid="parseInt(this.route.params.ratableid)"
      :topicid="parseInt(this.route.params.topicid)"></ratable-form>

  </main>
</template>
<script>
import { useRoute } from 'vue-router';
import Top from '../modules/Top/components/Top.vue';
import RatableForm from '../modules/Ratables/components/RatableForm.vue';
export default {
  name: 'CreateRatableView',
  components: {
    Top,
    RatableForm
  },
  data() {
    return {
      route: useRoute(),
    }
  },
}
</script>