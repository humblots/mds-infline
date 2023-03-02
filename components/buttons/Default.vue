<script lang="ts">
export default defineComponent({
  name: "default-button",
  props: {
    href: { type: String, required: true },
    text: { type: String, required: true },
  },
});
</script>

<template>
  <nuxt-link
    class="font-integralCF text-xs text-center py-[14px] px-[26px] rounded-lg"
    :to="href"
  >
    {{ text }}
  </nuxt-link>
</template>
