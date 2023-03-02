<template>
  <section class="bg-purple px-80 py-52 mt-[-80px]">
    <div class="flex flex-col justify-center items-center">
      <div class="flex gap-14 mb-20">
        <img v-for="brand in brands" class="brand-icon" :src="brand.src" />
      </div>
      <p class="w-[769px] font-semibold text-2xl leading-[36px] text-center">
        Infline est la plateforme numéro 1 dans la mise en relation entre les
        influenceurs et les marques en France. Finies les recherches
        interminables, matchez avec le profil parfait
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Brand from "~~/types/Brand";

export default {
  data() {
    return {
      brands: [
        { src: "/assets/images/logo-nike.png" },
        { src: "/assets/images/logo-bk.png" },
        { src: "/assets/images/logo-samsung.png" },
        { src: "/assets/images/logo-adidas.png" },
        { src: "/assets/images/logo-google.png" },
        { src: "/assets/images/logo-kfc.png" },
      ] as Brand[],
    };
  },
};
</script>

<style scoped>
.brand-icon {
  @apply w-20 object-contain;
}
</style>
