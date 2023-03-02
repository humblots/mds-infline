<template>
  <div>
    <p class="text-sm font-semibold border-b border-black pb-2 mb-4">
      {{ publishedAt }}
    </p>
    <p class="mb-4">{{ title }}</p>
    <img :src="src" :alt="title" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "news-card",
  props: {
    publishedAt: { type: String, required: true },
    title: { type: String, required: true },
    src: { type: String, required: true },
  },
});
</script>
