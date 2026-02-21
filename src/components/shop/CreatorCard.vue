<script setup lang="ts">
import IconStar from '../icons/IconStar.vue'
import IconTick from '../icons/IconTick.vue'

defineProps<{
  name: string
  image: string
  isFav: boolean
  catchLine: string
}>()
</script>

<template>
  <div class="relative rounded-2xl overflow-hidden relative border-bottom-gradient">
    <img :src="image" class="w-full h-[163px] object-cover" />
    <div
      class="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2.5 pb-[9.06px] text-bg-linner"
    >
      <div class="flex items-center gap-[2px] mb-1">
        <h3 class="font-medium text-xs">{{ name }}</h3>
        <IconTick v-if="isFav" />
        <IconStar v-else />
      </div>
      <p class="text-[9px] font-medium leading-none">{{ catchLine }}</p>
    </div>
  </div>
</template>

<style scoped></style>
