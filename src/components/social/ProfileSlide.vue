<script setup lang="ts">
defineProps<{
  name: string
  image: string
  isActive: boolean
}>()
</script>
<template>
  <div class="w-[85px] h-[85px]">
    <div
      v-if="isActive"
      class="border-2 border-[#FF4B4B] block rounded-full user-status h-full relative"
    >
      <img
        :src="image"
        class="w-full h-full rounded-full object-cover m-auto border-[3.5px] border-transparent"
      />
    </div>
    <img v-else :src="image" class="w-full h-full rounded-full object-cover mx-auto" />
  </div>
  <p class="mt-1 text-white font-semibold text-[10px] leading-[17.13px]">{{ name }}</p>
</template>
