<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import HeroShop from '@/components/HeroShop.vue'
import IconVoyShop from '@/components/icons/IconVoyShop.vue'
import SliderCreators from '@/components/shop/SliderCreators.vue'
import TopCreators from '@/components/shop/TopCreators.vue'
</script>

<template>
  <main>
    <HeroShop
      heroIcon_mb="mb-[22px]"
      :heroIcon="IconVoyShop"
      heroText="Shop through creators - Every purchase supports their voyage."
    />

    <TopCreators />
    <SliderCreators />
    <Footer />
  </main>
</template>
