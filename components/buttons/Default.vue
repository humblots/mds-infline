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
  <a
    class="font-integralCF text-xs text-center py-[14px] px-[26px] rounded-lg"
    :href="href"
    >{{ text }}
  </a>
</template>
