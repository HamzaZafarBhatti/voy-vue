<script setup lang="ts">
defineProps<{
  heroIcon_mb: string
  heroIcon?: any
  heroText: string
}>()
</script>

<template>
  <div class="w-full mx-auto mt-2.5 hero-sec">
    <div
      class="rounded-ss-2xl rounded-se-[35px] rounded-ee-2xl rounded-es-[35px] px-[14px] !pr-[12px] pb-0 border-2 border-[#AF74E5] bg-[#9450D3] shadow-hero pr-0 overflow-hidden"
    >
      <div class="flex justify-between gap-4">
        <div class="text-white max-w-[50%]">
          <span :class="[heroIcon_mb, 'block pt-[14px]']">
            <component :is="heroIcon" />
          </span>
          <p class="text-[17px] font-gotham-pro font-bold leading-[100%] mb-2">
            {{ heroText }}
          </p>
        </div>
        <div class="flex-shrink-0">
          <img
            src="./../assets/img/hero-img.png"
            alt="Creator"
            class="w-[161px] h-[161px] rounded-full object-cover mt-[-5px] mb-[-4px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
