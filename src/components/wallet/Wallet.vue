<script setup lang="ts">
defineProps<{
  name: string
  image: string
  alt: string
  imageClass: string
  className: string
}>()
</script>
<template>
  <div class="text-center">
    <div
      :class="
        className + ' rounded-[24px] p-4 py-9 flex flex-col items-center justify-center h-[136px]'
      "
    >
      <img :src="image" :alt="alt" :class="imageClass" />
    </div>
    <span class="text-[13.6px] font-semibold text-[#D9D9D9] mt-[2.5px] leading-[100%] font-inter">{{
      name
    }}</span>
  </div>
</template>
