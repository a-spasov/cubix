import { onMounted, ref } from "vue";

export default function lalayoutt() {
  const layout = ref(null);

  function resize() {
    if (window.innerWidth < 601) {
      layout.value = 'mobile';
    } else if (window.innerWidth > 1023) {
      layout.value = 'desktop';
    } else {
      layout.value = 'tablet';
    }
  }

  onMounted(() => {
    resize();
    window.addEventListener("resize", resize);
  });

  return { layout };
}
