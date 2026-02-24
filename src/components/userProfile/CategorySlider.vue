<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// ===== CATEGORY DATA =====
interface Category {
  id: number
  name: string
  borderColor: string
  active: boolean
}

const categories: Category[] = [
  { id: 1, name: 'Outwear & Jackets', borderColor: '#FEE5BC', active: true },
  { id: 2, name: 'Accessories', borderColor: '#9542FF', active: false },
  { id: 3, name: 'Bottoms', borderColor: '#FEE5BC', active: false },
  { id: 4, name: 'T-Shirts', borderColor: '#FEE5BC', active: false },
]

// ===== SUBCATEGORY DATA =====
interface Subcategory {
  name: string
  borderColor: string
  textColor: string
}

const subcategories: Subcategory[] = [
  { name: 'Socks', borderColor: '#FF77F1', textColor: '#AEAEAE' },
  { name: 'Men’s Ties', borderColor: '#AEAEAE', textColor: '#AEAEAE' },
  { name: 'Scarves', borderColor: '#AEAEAE', textColor: '#AEAEAE' },
  { name: 'Men’s Gloves & Mittens', borderColor: '#AEAEAE', textColor: '#AEAEAE' },
  { name: 'Skullies', borderColor: '#AEAEAE', textColor: '#AEAEAE' },
  { name: 'Caps', borderColor: '#AEAEAE', textColor: '#AEAEAE' },
]

// ===== TYPE-SAFE SLIDES PER VIEW =====
const slidesPerViewAuto: number | 'auto' = 'auto'
</script>

<template>
  <!-- ===== CATEGORIES SLIDER ===== -->
  <Swiper :slides-per-view="3.8" :space-between="15" class="mt-[15px]">
    <SwiperSlide
      v-for="category in categories"
      :key="category.id"
      class="category text-center"
      :class="{ active: category.active }"
    >
      <div class="w-[85px] h-[85px] mx-auto">
        <div
          class="block rounded-full h-full relative border-2"
          :style="{ borderColor: category.borderColor }"
        >
          <div
            class="bg-[#FEE5BC] rounded-full w-full h-full border-[3.5px] border-[#171635] font-AlteHaas-Grotesk text-[#000000] text-[10px] leading-[130%] flex items-center justify-center text-center"
          >
            {{ category.name }}
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <!-- ===== SUBCATEGORIES SLIDER ===== -->
  <Swiper :slides-per-view="slidesPerViewAuto" :space-between="8" class="mt-[14px] subCatSwiper">
    <SwiperSlide
      v-for="(sub, index) in subcategories"
      :key="index"
      class="inline-block"
    >
      <div
        class="px-[8px] py-[5.2px] rounded-full border border-[#AEAEAE] whitespace-nowrap w-auto text-[#AEAEAE] text-[10px] leading-none font-AlteHaas-Grotesk"
        :style="{ borderColor: sub.borderColor, color: sub.textColor }"
      >
        {{ sub.name }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>