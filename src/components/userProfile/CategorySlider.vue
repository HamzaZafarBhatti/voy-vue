<script setup lang="ts">
import { ref, computed, onMounted  } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// ===== INTERFACES =====
interface Subcategory {
  name: string
}

interface Category {
  id: number
  name: string
  subcategories: Subcategory[]
}

// ===== DATA =====
const categories = ref<Category[]>([
  {
    id: 1,
    name: 'Outwear & Jackets',
    subcategories: [
      { name: 'Leather Jackets' },
      { name: 'Bomber Jackets' },
      { name: 'Denim Jackets' },
    ],
  },
  {
    id: 2,
    name: 'Accessories',
    subcategories: [
      { name: 'Socks' },
      { name: 'Men’s Ties' },
      { name: 'Scarves' },
      { name: 'Men’s Gloves & Mittens' },
      { name: 'Skullies & Beanies' },
    ],
  },
  {
    id: 3,
    name: 'Bottoms',
    subcategories: [
      { name: 'Jeans' },
      { name: 'Trousers' },
      { name: 'Shorts' },
    ],
  },
  {
    id: 4,
    name: 'T-Shirts',
    subcategories: [
      { name: 'Printed' },
      { name: 'Plain' },
      { name: 'Oversized' },
    ],
  },
])

// ===== ACTIVE CATEGORY & SUBCATEGORY =====
const activeCategoryId = ref(1)
const activeSubcategoryIndex = ref<number | null>(null)
onMounted(() => {
  activeSubcategoryIndex.value = 0 
})
// ===== SELECT CATEGORY =====
const selectCategory = (id: number) => {
  activeCategoryId.value = id
  activeSubcategoryIndex.value = 0
}

// ===== SELECT SUBCATEGORY =====
const selectSubcategory = (index: number) => {
  activeSubcategoryIndex.value = index

  console.log(
    'Selected Category:',
    categories.value.find((c) => c.id === activeCategoryId.value)?.name,
    'Selected Subcategory:',
    selectedSubcategories.value[index]?.name
  )
}

// ===== CURRENT SUBCATEGORIES =====
const selectedSubcategories = computed(() => {
  return categories.value.find((c) => c.id === activeCategoryId.value)?.subcategories || []
})
</script>

<template>
  <!-- ================= CATEGORY SLIDER ================= -->
  <Swiper :slides-per-view="3.8" :space-between="15" class="mt-[15px]">
    <SwiperSlide
      v-for="category in categories"
      :key="category.id"
      @click="selectCategory(category.id)"
      class="text-center cursor-pointer"
    >
      <div class="w-[85px] h-[85px] mx-auto">
        <div
          class="rounded-full h-full border-2 flex items-center justify-center"
          :style="{
            borderColor:
              category.id === activeCategoryId ? 'rgb(149, 66, 255)' : '#FEE5BC',
          }"
        >
          <div
            class="rounded-full w-full h-full border-[3px] border-[#171635] flex items-center justify-center text-center text-[10px] leading-[130%] bg-[#FEE5BC] text-black font-bold font-AlteHaas-Grotesk"
          >
            {{ category.name }}
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <!-- ================= SUBCATEGORY SLIDER ================= -->
  <Swiper :slides-per-view="'auto'" :space-between="8" class="mt-[14px] subCatSwiper">
    <SwiperSlide
      v-for="(sub, index) in selectedSubcategories"
      :key="index"
      class="inline-block"
    >
      <div
        @click="selectSubcategory(index)"
        class="px-[10px] py-[5px] rounded-full border whitespace-nowrap text-[11px] leading-none font-AlteHaas-Grotesk font-bold cursor-pointer text-[#AEAEAE]"
        :style="{
          borderColor: index === activeSubcategoryIndex ? '#FF77F1' : '#AEAEAE',
          
        }"
      >
        {{ sub.name }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>