<script setup lang="ts">
import { ref } from 'vue'
import IconStar from '../icons/IconStar.vue'
import IconPlay from '../icons/IconPlay.vue'
import IconMarketShop from '../icons/IconMarketShop.vue'
import IconVolume from '../icons/IconVolume.vue'
import IconHeart from '../icons/IconHeart.vue'
import IconComment from '../icons/IconComment.vue'
import IconShare from '../icons/IconShare.vue'
import IconBookmark from '../icons/IconBookmark.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="border-bottom-gradient rounded-[30px] mt-2.5">
    <div class="relative text-white bg-[#320D56] rounded-[30px] overflow-hidden video-section">
      <div class="flex items-center justify-between absolute top-0 w-full p-4 z-10">
        <!-- Left -->
        <div class="flex items-center gap-[3px]">
          <span class="border-[1.18px] border-[#FF4B4B] rounded-full user-status-2 relative">
            <img
              src="https://i.pravatar.cc/40"
              class="w-[26px] h-[26px] rounded-full border-[1.18px] border-transparent"
            />
          </span>

          <p class="text-[14px] font-bold flex items-center gap-[2px] font-noto-sans text-white">
            Jess Baker
            <IconStar />
          </p>
        </div>

        <!-- Right -->
        <div class="flex items-center gap-[6px] relative">
          <!-- Follow Button -->
          <button
            class="text-[10.83px] rounded-[9px] border border-white font-hind w-[53px] h-[21px] leading-[21px] text-center"
          >
            Follow
          </button>

          <!-- 3 Dots Button -->
          <button @click="toggleMenu" class="w-8 h-8 flex items-center justify-center rounded-full">
            <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
          </button>

          <!-- Dropdown -->
          <div
            v-show="isMenuOpen"
            class="absolute right-0 top-10 w-40 rounded-xl bg-[#320D56] border border-white/20 shadow-lg overflow-hidden dropdown-menu"
          >
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-white/10">Report</button>

            <button class="w-full text-left px-4 py-2 text-sm hover:bg-white/10">Block User</button>

            <button class="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/10">
              Remove
            </button>
          </div>
        </div>
      </div>

      <!-- Video -->
      <div class="relative rounded-[30px] overflow-hidden">
        <!-- Video -->
        <video id="customVideo" class="w-full h-[382px] object-cover hidden" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>

        <!-- Thumbnail Image -->
        <img
          id="videoThumbnail"
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          class="w-full h-[382px] object-cover"
        />

        <!-- Play Button -->
        <div
          id="playBtnWrapper"
          class="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <div
            class="w-14 h-14 bg-white/30 backdrop-blur rounded-full flex items-center justify-center"
          >
            <IconPlay />
          </div>
        </div>
        <div class="absolute bottom-3 left-0 w-full px-4 flex items-center justify-between z-10">
          <!-- Market / Shop Button -->
          <button
            class="w-9 h-9 flex items-center justify-center rounded-full bg-[#ebf2ff33] hover:scale-105 transition"
          >
            <IconMarketShop />
          </button>

          <!-- Volume Button -->
          <button
            class="p-[4px] flex items-center justify-center rounded-full bg-[#00000080] text-white hover:scale-105 transition"
          >
            <IconVolume />
          </button>
        </div>
      </div>

      <!-- Stats -->
      <div
        class="flex items-center justify-between text-xs px-[17px] pt-[17px] pb-[7px] gap-[12px]"
      >
        <div class="flex items-center gap-1.5">
          <span class="flex items-center gap-[2px] text-[#EBE2FD] text-[10px]">
            <button id="likeBtn" class="flex items-center gap-1 text-pink-400 hover:text-pink-500">
              <IconHeart />
            </button>
            <span id="likeCount" class="text-[10px] font-bold leading-[100%] font-noto-sans"
              >19,993</span
            >
          </span>
          <span class="flex items-center gap-[2px] text-[#EBE2FD] text-[10px]">
            <button
              id="commentBtn"
              class="flex items-center gap-1 text-pink-400 hover:text-pink-500"
            >
              <IconComment />
            </button>
            <span id="commentCount" class="text-[10px] font-bold leading-[100%] font-noto-sans"
              >10,786</span
            >
          </span>
          <span class="flex items-center gap-[2px] text-[#EBE2FD] text-[10px]">
            <button id="shareBtn" class="flex items-center gap-1 text-pink-400 hover:text-pink-500">
              <IconShare />
            </button>
            <span id="shareCount" class="text-[10px] font-bold leading-[100%] font-noto-sans"
              >12,012</span
            >
          </span>
          <span class="flex items-center gap-[2px] text-[#EBE2FD] text-[10px]">
            <button
              id="bookmarkBtn"
              class="flex items-center gap-1 text-pink-400 hover:text-pink-500"
            >
              <IconBookmark />
            </button>
            <span id="bookmarkCount" class="text-[10px] font-bold leading-[100%] font-noto-sans"
              >30,391</span
            >
          </span>
        </div>
        <button
          class="flex items-center gap-[3px] bg-[#EBE2FD] font-bold rounded-full text-xs hover:bg-purple-700 text-[#190829] h-[34px] w-[76px]"
        >
          <img
            src="https://i.pravatar.cc/40"
            class="w-[31px] h-[31px] border-2 rounded-full border-transparent"
          />
          <span class="text-[14px] text-[#190829] font-bold">DM</span>
        </button>
      </div>

      <!-- Description -->
      <div
        class="m-[9px] mt-0 border border-[#9643FF33] bg-[#3C0A6C] rounded-[20px] px-[12.5px] pt-[11px] pb-[4px] text-white"
      >
        <h4 class="text-sm font-extrabold text-[#EBE2FD] mb-[5px] uppercase leading-[133%]">
          DEEP FACIAL CLEANSE
        </h4>
        <p class="text-sm font-medium text-[#BE95E5] leading-[133%]">
          Hi I have discovered this amazing product. It does wonders for your skin. I use it
          everyday.
        </p>
      </div>
    </div>
  </div>
</template>
