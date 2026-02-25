<script setup lang="ts">
import { ref } from 'vue'
// ===== Sample Social Posts =====
interface SocialPost {
  id: number
  imageUrl: string
  overlayIcon: string
}

const socialPosts = ref<SocialPost[]>([
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e', overlayIcon: '/images/video-circle.svg' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1', overlayIcon: '/images/copy-right.svg' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde', overlayIcon: '/images/video-circle.svg' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e', overlayIcon: '/images/video-circle.svg' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1', overlayIcon: '/images/copy-right.svg' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde', overlayIcon: '/images/video-circle.svg' },
  { id: 7, imageUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1', overlayIcon: '/images/copy-right.svg' },
  { id: 8, imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde', overlayIcon: '/images/video-circle.svg' },
  { id: 9, imageUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1', overlayIcon: '/images/copy-right.svg' },
]);
</script>

<template>
  <div class="w-full text-white">
    <div class="grid grid-cols-3 md:grid-cols-3 gap-[10.5px] mb-[10.5px]">
      <div
        v-for="post in socialPosts"
        :key="post.id"
        class="relative rounded-[8.84px] overflow-hidden relative"
      >
        <img
          :src="post.imageUrl"
          class="w-full h-[113.68px] object-cover"
        />
        <div class="absolute top-0 right-0 p-[8.3px] pt-[7px]">
          <img :src="post.overlayIcon" class="w-[22px] h-[22px]" />
        </div>
      </div>
    </div>
  </div>
</template>