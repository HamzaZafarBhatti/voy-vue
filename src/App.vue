<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconHeader1 from './components/icons/IconHeader1.vue'
import IconMessage from './components/icons/IconMessage.vue'
import IconBadge from './components/icons/IconBadge.vue'
import IconCart from './components/icons/IconCart.vue'
import IconGiftCard from './components/icons/IconGiftCard.vue'
import IconBell from './components/icons/IconBell.vue'
</script>

<template>
  <!-- <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <header class="w-full flex items-center text-white gap-2">
    <!-- Left: Search / Explore -->
    <div
      class="flex items-center gap-3 border border-[#dccee880] rounded-[10px] px-2.5 py-2 min-w-[161px] w-[161px]"
    >
      <span
        class="bg-[linear-gradient(90deg,_#9542FF_35.4%,_#D97DCC_100%)] px-1 py-1 rounded leading-none"
      >
        <font-awesome-icon :icon="['fas', 'bars']" class="text-[#DCCEE8] leading-none" />
        <!-- <i class="fa-solid fa-bars text-[#DCCEE8] leading-none"></i> -->
      </span>
      <span class="text-[#BCBCBC] text-base font-normal">
        <!-- @if (Route::is('new.mobile.social')) Explore @else Shop @endif -->
        Explore
      </span>
      <div class="ml-auto">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-[#DCCEE8]" />
        <!-- <i class="fa-solid fa-magnifying-glass text-[#DCCEE8]"></i> -->
      </div>
    </div>

    <!-- Right: Icons -->
    <div class="flex items-center justify-between w-full">
      <!-- Icon Item -->
      <div class="relative">
        <IconHeader1 />
        <span class="absolute top-[2px] right-[1px] w-2 h-2 bg-[#FF4B4B] rounded-full"></span>
      </div>

      <div class="relative">
        <IconMessage />
        <span class="absolute -top-[3px] -right-0 w-2 h-2 bg-[#FF4B4B] rounded-full"></span>
      </div>

      <div class="relative">
        <IconBadge />
        <span class="absolute -top-[1px] -right-0 w-2 h-2 bg-[#FF4B4B] rounded-full"></span>
      </div>

      <div class="relative">
        <IconCart />
        <span class="absolute -top-[1px] -right-[2px] w-2 h-2 bg-[#FF4B4B] rounded-full"></span>
      </div>

      <div class="relative">
        <IconGiftCard />
        <span class="absolute -top-[1px] -right-[2px] w-2 h-2 bg-[#FF4B4B] rounded-full"></span>
      </div>

      <div class="relative">
        <IconBell />
        <span class="absolute top-[2px] right-[1px] w-2 h-2 bg-[#FF4B4B] rounded-full"></span>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
