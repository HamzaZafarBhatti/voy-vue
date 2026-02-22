<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import ProfileSlide from './ProfileSlide.vue'

const profiles = [
  {
    name: 'Your Profile',
    image: 'https://i.pravatar.cc/150',
    isActive: false,
  },
  {
    name: 'Katie Fischer',
    image: 'https://i.pravatar.cc/150',
    isActive: true,
  },
  {
    name: 'Alice Frimpong',
    image: 'https://i.pravatar.cc/150',
    isActive: true,
  },
  {
    name: 'Tasha Lee',
    image: 'https://i.pravatar.cc/150',
    isActive: false,
  },
]
</script>

<template>
  <Swiper
    :slides-per-view="3.7"
    :space-between="5"
    :grab-cursor="true"
    wrapper-class="ml-[20.5px]"
    class="!pb-[6px]"
  >
    <SwiperSlide v-for="(profile, index) in profiles" :key="index" class="text-center">
      <ProfileSlide :name="profile.name" :image="profile.image" :isActive="profile.isActive" />
    </SwiperSlide>
  </Swiper>
</template>
