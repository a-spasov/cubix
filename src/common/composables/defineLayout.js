import { onMounted, onUnmounted, ref } from "vue";

export default function layout() {
  const type = ref(null);

  function resize() {
    if (window.innerWidth < 769) {
      type.value = 'Phone';
    } else if (window.innerWidth > 1023) {
      type.value = 'Desktop';
    } else {
      type.value = 'Tablet';
    }
  }

  onMounted(() => {
    resize()
    window.addEventListener("resize", resize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });

  return { type };
}
