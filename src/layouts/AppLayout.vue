
<template>
  <component :is="layouts[type]" />
</template>

<script setup>
import layout from '../common/composables/defineLayout';
import Desktop from './DesktopLayout.vue';
import Tablet from './TabletLayout.vue';
import Phone from './PhoneLayout.vue';

const { type } = layout();
const layouts = {
  Desktop,
  Tablet,
  Phone
}
</script>