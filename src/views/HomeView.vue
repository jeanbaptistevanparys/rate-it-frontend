<template>
  <top></top>
  <main class="home">

    <topics></topics>
    

  </main>
</template>
<script>
import Top from '../modules/Top/components/Top.vue';
import Topics from '../modules/Topics/components/Topics.vue';
export default {
  name: 'HomeView',
  components: {
    Top,
    Topics
}
}
</script>
<style>
  
</style>