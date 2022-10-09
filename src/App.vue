<template>
  <Loader />
</template>

<script>
import Loader from './views/Loader.vue';
import { defineScreenSize } from './common/composables/screenSize.js';

export default {
  data() {
    return {
      size: defineScreenSize(),
    }
  },
  components: {
    Loader,
  },
  mounted() {
    window.onresize = () => {
      this.size = defineScreenSize();
    }
  }
}
</script>


<style>
/* TO DO  */
</style>
