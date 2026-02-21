<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import CreatorSlide from './CreatorSlide.vue'

const creators = [
  {
    name: 'Jess Baker',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    isFav: false,
    catchLine: 'Love dancing and fun',
  },
  {
    name: 'Owusu Boat',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
    isFav: false,
    catchLine: 'Love Church and joy',
  },
  {
    name: 'Alice Frimpong',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    isFav: false,
    catchLine: 'I love the outdoors',
  },
]
</script>

<template>
  <div class="w-full mt-[17px] text-white">
    <div class="flex items-center justify-between mb-[17px]">
      <h2 class="text-[15px] font-gotham-pro font-bold leading-[100%]">
        Creators your shopping supports
      </h2>
      <span class="text-[#FBA7FD] text-[13px] font-medium"
        >More
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </span>
    </div>
    <Swiper
      :slides-per-view="2.5"
      :space-between="5"
      :loop="true"
      :breakpoints="{
        0: {
          slidesPerView: 2.2,
        },
        640: {
          slidesPerView: 2.2,
        },
        1024: {
          slidesPerView: 2.2,
        },
      }"
      class="mb-[5px]"
    >
      <SwiperSlide v-for="(value, index) in creators" :key="index">
        <CreatorSlide
          :key="index"
          :name="value.name"
          :image="value.image"
          :isFav="value.isFav"
          :catchLine="value.catchLine"
      /></SwiperSlide>
    </Swiper>
  </div>
</template>
