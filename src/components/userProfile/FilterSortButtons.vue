<script setup lang="ts">
import { ref } from 'vue'

const showFilter = ref(false)
const showSort = ref(false)
const selectedSort = ref('default')

const onFilterClick = () => {
  showFilter.value = !showFilter.value
  showSort.value = false
}

const onSortClick = () => {
  showSort.value = !showSort.value
  showFilter.value = false
}

// Filter values
const priceMin = ref(20)
const priceMax = ref(7000)
const ghsRate = 11
const formatPrice = (val: number) => {
  return val.toLocaleString()
}

const ghsApprox = (val: number) => {
  return (val * ghsRate).toLocaleString()
}

// Range slider logic
const sliderMin = 20
const sliderMax = 7000

const minPercent = () => ((priceMin.value - sliderMin) / (sliderMax - sliderMin)) * 100
const maxPercent = () => ((priceMax.value - sliderMin) / (sliderMax - sliderMin)) * 100

const onMinInput = (e: Event) => {
  const val = Number((e.target as HTMLInputElement).value)
  if (val < priceMax.value) priceMin.value = val
}

const onMaxInput = (e: Event) => {
  const val = Number((e.target as HTMLInputElement).value)
  if (val > priceMin.value) priceMax.value = val
}
</script>

<template>
  <!-- filters buttons -->
  <div class="filters flex gap-[10px] mt-[22px] relative">
    <div class="w-[50%] relative">
      <button
        @click="onFilterClick"
        class="text-[#151515] text-[10px] leading-none font-AlteHaas-Grotesk p-[5.5px] bg-[#FFFFFF] flex gap-[5px] w-full items-center text-center justify-center"
      >
        Filter by
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.95998 4.4751L6.69998 7.7351C6.31498 8.1201 5.68498 8.1201 5.29998 7.7351L2.03998 4.4751"
            stroke="#151515"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="w-[50%] relative">
      <button
        @click="onSortClick"
        class="text-[#151515] text-[10px] leading-none font-AlteHaas-Grotesk p-[5.5px] bg-[#FFFFFF] flex gap-[5px] w-full items-center text-center justify-center"
      >
        Sort by
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.95998 4.4751L6.69998 7.7351C6.31498 8.1201 5.68498 8.1201 5.29998 7.7351L2.03998 4.4751"
            stroke="#151515"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- FILTER DROPDOWN -->
    <div
      v-if="showFilter"
      class="absolute top-full left-0 w-full bg-white px-[20px] pt-[26px] pb-[18px] shadow-lg rounded-[10px] mt-2 z-10"
    >
      <h4 class="text-[16.8] mb-[26px] text-[#191c1f] tracking-wide font-DM-sans font-semibold">
        FILTER BY PRICE
      </h4>

      <!-- Dual range slider -->
      <div class="range-slider-wrap relative h-[3px] mb-[16px]">
        <div class="absolute inset-0 rounded-full bg-[#E8D5F5]"></div>
        <div
          class="absolute top-0 bottom-0 rounded-full bg-[#f0c6ca]"
          :style="{ left: minPercent() + '%', right: 100 - maxPercent() + '%' }"
        ></div>
        <input
          type="range"
          :min="sliderMin"
          :max="sliderMax"
          :value="priceMin"
          @input="onMinInput"
          class="range-thumb absolute w-full top-1/2 -translate-y-1/2 pointer-events-none appearance-none bg-transparent z-[3]"
        />
        <input
          type="range"
          :min="sliderMin"
          :max="sliderMax"
          :value="priceMax"
          @input="onMaxInput"
          class="range-thumb absolute w-full top-1/2 -translate-y-1/2 pointer-events-none appearance-none bg-transparent z-[4]"
        />
      </div>

      <!-- Price inputs -->
      <div class="flex items-center gap-[10px] mb-[16px]">
        <div
          class="flex-1 border-[0.8px] border-gray-500 rounded-[2.4px] pl-[7px] pr-[5px] py-[12.85px]"
        >
          <div class="flex items-center justify-between">
            <span class="text-[15.2] font-bold text-gray-900 font-DM-sans font-medium"
              >${{ formatPrice(priceMin) }}</span
            >
            <p class="text-[10px] text-gray-500 font-DM-sans">
              <span class="text-[8px]">Approx</span> GHS{{ ghsApprox(priceMin) }}
            </p>
          </div>
        </div>
        <span class="text-[11.8] font-bold text-[#000000] font-DM-sans font-medium shrink-0"
          >TO</span
        >
        <div
          class="flex-1 border-[0.8px] border-gray-500 rounded-[2.4px] pl-[7px] pr-[5px] py-[12.85px]"
        >
          <div class="flex items-center justify-between">
            <span class="text-[15.2] font-bold text-[#000000] font-DM-sans font-medium"
              >${{ formatPrice(priceMax) }}</span
            >
            <p class="text-[10px] text-gray-500 font-DM-sans">
              <span class="text-[8px]">Approx</span> GHS{{ ghsApprox(priceMax) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Apply button -->
      <button
        class="bg-[#000000] text-[#EFEFEF] w-full py-[10.5px] rounded-[2px] text-[14px] font-medium"
      >
        Apply Filter
      </button>
    </div>

    <!-- SORT DROPDOWN -->
    <div
      v-if="showSort"
      class="absolute top-full left-0 w-full bg-white rounded-[10px] mt-2 z-10 shadow-lg"
    >
      <div class="flex flex-col">
        <label
          class="flex items-center justify-between px-[25px] py-[23px] border-b border-[#00000033] cursor-pointer"
          @click="selectedSort = 'default'"
        >
          <span class="text-[#151515] text-[15px] font-medium">SORT BY DEFAULT</span>
          <span class="radio-outer" :class="{ 'radio-active': selectedSort === 'default' }">
            <span v-if="selectedSort === 'default'" class="radio-inner"></span>
          </span>
        </label>
        <label
          class="flex items-center justify-between px-[25px] py-[23px] border-b border-[#00000033] cursor-pointer"
          @click="selectedSort = 'high-to-low'"
        >
          <span class="text-[#151515] text-[15px] font-medium">Price (High to Low)</span>
          <span class="radio-outer" :class="{ 'radio-active': selectedSort === 'high-to-low' }">
            <span v-if="selectedSort === 'high-to-low'" class="radio-inner"></span>
          </span>
        </label>
        <label
          class="flex items-center justify-between px-[25px] py-[23px] cursor-pointer"
          @click="selectedSort = 'low-to-high'"
        >
          <span class="text-[#151515] text-[15px] font-medium">Price (Low to High)</span>
          <span class="radio-outer" :class="{ 'radio-active': selectedSort === 'low-to-high' }">
            <span v-if="selectedSort === 'low-to-high'" class="radio-inner"></span>
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radio-outer {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #515151;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.15s ease;
}

.radio-outer.radio-active {
  border-color: #9450D3;
}

.radio-inner {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #9450D3;
  margin-top: 1px;
}

/* Range slider thumbs */
.range-thumb {
  height: 6px;
  margin: 0;
}

.range-thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: all;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #9450d3;
  cursor: pointer;
}

.range-thumb::-moz-range-thumb {
  pointer-events: all;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #9450d3;
  cursor: pointer;
}
</style>
