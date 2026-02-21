<script setup lang="ts">
import CreatorCard from '@/components/shop/CreatorCard.vue'

const creators = [
  [
    {
      name: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      isFav: true,
      catchLine: 'Love dancing and fun',
    },
    {
      name: 'Owusu Boat',
      image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
      isFav: false,
      catchLine: 'Love Joy and praise',
    },
    {
      name: 'Alice Frimp',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      isFav: false,
      catchLine: 'I love the outdoors',
    },
  ],
  [
    {
      name: 'Jess Baker',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      isFav: true,
      catchLine: 'Loving Chatting',
    },
    {
      name: 'Joe Robson',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      isFav: true,
      catchLine: 'I write songs and sing',
    },
  ],
]
</script>

<template>
  <div class="w-full mt-4 text-white">
    <div class="flex items-center justify-between mb-[17px]">
      <h2 class="text-[15px] font-gotham-pro font-bold leading-[100%]">
        Creators your shopping supports
      </h2>
      <span class="text-[#FBA7FD] text-[13px] font-medium">Active</span>
    </div>
    <div class="bg-[#320D56] rounded-2xl p-1">
      <div class="grid grid-cols-3 md:grid-cols-3 gap-[5px] mb-[5px]">
        <CreatorCard
          v-for="(value, index) in creators[0]"
          :key="index"
          :name="value.name"
          :image="value.image"
          :isFav="value.isFav"
          :catchLine="value.catchLine"
        />
      </div>
      <div class="grid grid-cols-2 gap-2">
        <CreatorCard
          v-for="(value, index) in creators[1]"
          :key="index"
          :name="value.name"
          :image="value.image"
          :isFav="value.isFav"
          :catchLine="value.catchLine"
        />
      </div>
    </div>
  </div>
</template>
