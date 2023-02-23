<script setup>
import layoutType from './common/composables/defineLayout';
import Desktop from './layouts/DesktopLayout.vue';
import Tablet from './layouts/TabletLayout.vue';
import Phone from './layouts/PhoneLayout.vue';

const { layout } = layoutType();
const components = {
  desktop: Desktop,
  tablet: Tablet,
  phone: Phone,
}

</script>

<template>
  <div class="layout">
    <component :is="components[layout]" />
  </div>
</template>

<style>
.layout {
  height: 100vh;
}
</style>
