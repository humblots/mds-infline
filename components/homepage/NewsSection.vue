<template>
  <div class="px-[85px] py-20">
    <h1 class="font-integralCF text-[55px] leading-[72px] mb-11">Les news</h1>
    <div class="flex justify-center gap-16">
      <CardsNews
        :published-at="news.publishedAt"
        :title="news.title"
        :src="news.src"
        v-for="news in allNews"
      />
    </div>
  </div>
</template>

<script lang="ts">
import News from "~~/types/News";

export default {
  data() {
    return {
      allNews: [
        {
          publishedAt: "4 mars 2022",
          title: "Trouver l’influenceur parfait pour votre marque",
          src: "/_nuxt/assets/images/influencer-sm.png",
        },
        {
          publishedAt: "7 mars 2022",
          title: "50 nouvelles influenceuses rejoigent la plateforme",
          src: "/_nuxt/assets/images/influencer.png",
        },
        {
          publishedAt: "1 juin 2022",
          title: "Instagram investit 100 millions d’euros dans Infline",
          src: "/_nuxt/assets/images/influencer-sm.png",
        },
      ] as News[],
    };
  },
};
</script>
