<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import IconHeroShop from '@/components/icons/IconHeroShop.vue'
import SliderCreators from '@/components/shop/SliderCreators.vue'
import TopCreators from '@/components/shop/TopCreators.vue'
</script>

<template>
  <main>
    <Hero
      heroIcon_mb="mb-[22px]"
      :heroIcon="IconHeroShop"
      heroText="Shop through creators - Every purchase supports their voyage."
    />

    <TopCreators />
    <SliderCreators />
  </main>
</template>
