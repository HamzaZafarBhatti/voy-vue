<script setup lang="ts">
import { Swiper } from 'swiper/vue'
import IconVoy from './icons/IconVoy.vue'
import SliderHero from './social/SliderHero.vue'
</script>

<template>
  <div class="w-full max-w-6xl mx-auto mt-[10px] hero-sec">
    <div
      class="p-[1.75px] pr-[1.5px] rounded-ss-[16px] rounded-se-[35px] rounded-ee-[16px] rounded-es-[35px] bg-gradient-to-b from-[#AF74E5] to-[#61407F]"
    >
      <div
        class="h-full w-full rounded-ss-[15px] rounded-se-[33px] rounded-ee-[15px] rounded-es-[35px] bg-gradient-to-b from-[#AA52FC] to-[#3A185A] shadow-hero pr-0 overflow-hidden"
      >
        <div class="mb-[11px] pt-[11px] pl-[12px]">
          <IconVoy />
        </div>
        <SliderHero />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
