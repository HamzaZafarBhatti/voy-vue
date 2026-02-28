<script setup lang="ts">
import { ref } from 'vue'
import CategorySlider from './CategorySlider.vue'
import FilterSortButtons from './FilterSortButtons.vue'

// Search toggle reactive state
const isSearchOpen = ref(false)

const openSearch = () => {
  isSearchOpen.value = true
}

const closeSearch = () => {
  isSearchOpen.value = false
}

// Menu toggle reactive state
const isMenuOpen = ref(false)

const openMenu = () => {
  isMenuOpen.value = true
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Categories
const categories = [
  "Women's Clothing",
  'Pet Supplies',
  'Home, Garden & Furniture',
  'Health, Beauty & Hair',
  'Jewelry & Watches',
  "Men's Clothing",
  'Bags & Shoes',
  'Toys, Kids & Babies',
  'Sports & Outdoors',
  'Consumer Electronics',
  'Home Improvement',
  'Automobiles & Motorcycles',
  'Computer & Office',
]

const activeCategory = ref("Men's Clothing")

</script>

<template>
  <div class="w-full mx-auto hero-sec">
    <div
      class="rounded-ss-2xl rounded-se-[35px] rounded-ee-2xl rounded-es-[35px] !pr-[12px] pb-0 border-2 border-[#AF74E5] bg-[#9450D3] shadow-hero pr-0 overflow-hidden"
    >
      <div class="flex justify-between gap-[6px]">
        <div class="text-white max-w-[55%]">
          <span class="mb-[13px] block pt-[7px] pl-[6px]">
            <img src="/images/verified-badge.svg" class="w-[91px] h-[40px] rounded-full" />
          </span>
          <div class="pl-4">
            <h3
              class="font-bold text-base leading-[108%] auth-name text-white mb-[13px]"
            >
              Jess Baker Store
            </h3>
            <p class="text-[14px] font-bold leading-[108.7%]">
              Shopping here supports this creator’s journey
            </p>
          </div>
        </div>
        <div class="flex-shrink-0 flex-1">
          <img
            src="/images/pexels-photo-5935258 11.svg"
            alt="Creator"
            class="w-[161px] h-[161px] rounded-full object-cover mt-[-5px] mb-[-4px]"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="text-white mt-2.5 relative">
    <div id="shopMenu" class="shop-menu relative" :class="{ hidden: isSearchOpen }">
      <!-- ===== TOP BAR ===== -->
      <div class="flex items-center justify-between bg-[#3C0A6D] px-2.5 py-[9px]">
        <!-- Menu Icon -->
        <button id="menuBtn" class="text-2xl" @click="openMenu">
          <img src="/images/cat-menu-bar.svg" class="w-[21px] h-[21px]" />
        </button>
        <h2 class="text-lg font-normal leading-[22px]">Men's clothing</h2>
        <!-- Search Button -->
        <button id="searchBtn" class="text-xl" @click="openSearch">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.33514 0C4.17948 0 0 4.1795 0 9.33518C0 14.4909 4.17948 18.6704 9.33514 18.6704C11.5172 18.6704 13.5245 17.9217 15.114 16.6671L19.1252 20.6783C19.5541 21.1072 20.2494 21.1072 20.6783 20.6783C21.1072 20.2494 21.1072 19.5541 20.6783 19.1252L16.6671 15.1139C17.9216 13.5245 18.6703 11.5173 18.6703 9.33518C18.6703 4.1795 14.4908 0 9.33514 0ZM2.1965 9.33518C2.1965 5.3926 5.39258 2.19651 9.33514 2.19651C13.2777 2.19651 16.4738 5.3926 16.4738 9.33518C16.4738 13.2778 13.2777 16.4739 9.33514 16.4739C5.39258 16.4739 2.1965 13.2778 2.1965 9.33518Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <!-- ===== CATEGORIES SLIDER ===== -->
      <CategorySlider />

      <!-- filters -->
      <FilterSortButtons />
    </div>

    <!-- Category Menu Overlay -->
    <transition name="menu-fade">
      <div
        v-if="isMenuOpen"
        class="absolute inset-0 z-50 flex"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/30" @click="closeMenu"></div>

        <!-- Menu Panel -->
        <div class="relative z-10 w-[264px] max-w-[264px] bg-white h-fit overflow-y-auto pb-6">
          <!-- Close button -->
          <div class="flex justify-end px-[5px] pt-[5px]">
            <button
              @click="closeMenu"
              class="flex items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="black"/>
                <path d="M12.4964 12.8221L5.77637 6.10205" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.77637 12.8221L12.4964 6.10205" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
          </div>

          <!-- Products count -->
          <div class="pl-[20px]  pb-[11px] mt-[-6px] border-b border-[#7b619e33]">
            <span class="text-[#9450D3] text-[13px] font-inter font-bold">Products 20,900</span>
          </div>

          <!-- Category list -->
          <div class="flex flex-col">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeCategory = cat; closeMenu()"
              class="text-left px-[20px] py-[13px] text-[18px] font-inter font-regular transition-colors text-[#190829]"
              :class="
                cat === activeCategory
                  ? 'bg-[#9450D3] text-white'
                  : 'text-[#190829] hover:bg-[#F5F0FA]'
              "
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- search input -->
    <div
      id="shopSearchBox"
      class=" flex justify-center bg-[#3C0A6D] rounded-[10px] px-[5px] py-[8px] mt-2.5 border-stoke"  v-show="isSearchOpen"
    >
      <div class="flex items-center w-full pl-[6px] border-stoke">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.33514 0C4.17948 0 0 4.1795 0 9.33518C0 14.4909 4.17948 18.6704 9.33514 18.6704C11.5172 18.6704 13.5245 17.9217 15.114 16.6671L19.1252 20.6783C19.5541 21.1072 20.2494 21.1072 20.6783 20.6783C21.1072 20.2494 21.1072 19.5541 20.6783 19.1252L16.6671 15.1139C17.9216 13.5245 18.6703 11.5173 18.6703 9.33518C18.6703 4.1795 14.4908 0 9.33514 0ZM2.1965 9.33518C2.1965 5.3926 5.39258 2.19651 9.33514 2.19651C13.2777 2.19651 16.4738 5.3926 16.4738 9.33518C16.4738 13.2778 13.2777 16.4739 9.33514 16.4739C5.39258 16.4739 2.1965 13.2778 2.1965 9.33518Z"
            fill="#DCCEE8"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Jess Baker Store"
          class="flex-1 bg-transparent outline-none text-gray-200 placeholder-[#8C6CAA]-light font-light text-[14px] px-5"
        />
        <button
          id="closeSearch"
          class="bg-gray-300 text-purple-900 rounded-full w-6 h-6 flex items-center justify-center ml-3"  @click="closeSearch"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#DCCEE8"
            />
            <path
              d="M13.0601 12.0001L15.3601 9.70011C15.6501 9.41011 15.6501 8.93011 15.3601 8.64011C15.0701 8.35011 14.5901 8.35011 14.3001 8.64011L12.0001 10.9401L9.70011 8.64011C9.41011 8.35011 8.93011 8.35011 8.64011 8.64011C8.35011 8.93011 8.35011 9.41011 8.64011 9.70011L10.9401 12.0001L8.64011 14.3001C8.35011 14.5901 8.35011 15.0701 8.64011 15.3601C8.79011 15.5101 8.98011 15.5801 9.17011 15.5801C9.36011 15.5801 9.55011 15.5101 9.70011 15.3601L12.0001 13.0601L14.3001 15.3601C14.4501 15.5101 14.6401 15.5801 14.8301 15.5801C15.0201 15.5801 15.2101 15.5101 15.3601 15.3601C15.6501 15.0701 15.6501 14.5901 15.3601 14.3001L13.0601 12.0001Z"
              fill="#210A38"
            />
          </svg>
        </button>
      </div>
    </div>
    <section class="min-h-screen mt-[11px]">
      <!-- Masonry Columns -->
      <div class="columns-2 gap-4 space-y-4">
        <!-- Product Card -->
        <div class="bg-[#FFFFFF] rounded-2xl overflow-hidden break-inside-avoid">
          <img src="/images/p-1.jpg" class="w-full object-cover" />
          <div class="pt-[11px] px-[6px] pb-[6px]">
            <p
              class="text-[#000000] text-[13.5px] mb-[6px] font-Ponnala overflow-hidden text-ellipsis whitespace-nowrap leading-[24px] tracking-[-0.17px]"
            >
              Glamorous black dress
            </p>
            <div class="flex justify-between items-center">
              <span class="text-[#6012B1] font-bold text-xl leading-[30px]">$25.00</span>
              <div>
                <div class="block text-[#151515] text-[8px]   tracking-[-0.17px] mb-0">Approx</div>
                <div class="text-[13px] font-semibold text-[#151515] leading-[20px]">₵300</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Card -->
        <div class="bg-[#FFFFFF] rounded-2xl overflow-hidden break-inside-avoid">
          <img src="/images/p-2.jpg" class="w-full object-cover" />
          <div class="pt-[11px] px-[6px] pb-[6px]">
            <p
              class="text-[#000000] text-[13.5px] mb-[6px] font-Ponnala overflow-hidden text-ellipsis whitespace-nowrap leading-[24px] tracking-[-0.17px]"
            >
              Women's Fashionable Denim...
            </p>
            <div class="flex justify-between items-center">
              <span class="text-[#6012B1] font-bold text-xl leading-[30px]">$30.00</span>
              <div>
                <div class="block text-[#151515] text-[8px]   tracking-[-0.17px] mb-0">Approx</div>
                <div class="text-[13px] font-semibold text-[#151515] leading-[20px]">₵300</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Card -->
        <div class="bg-[#FFFFFF] rounded-2xl overflow-hidden break-inside-avoid">
          <img src="/images/p3.png" class="w-full object-cover" />
          <div class="pt-[11px] px-[6px] pb-[6px]">
            <p
              class="text-[#000000] text-[13.5px] mb-[6px] font-Ponnala overflow-hidden text-ellipsis whitespace-nowrap leading-[24px] tracking-[-0.17px]"
            >
              Men's Fashionable Denim...
            </p>
            <div class="flex justify-between items-center">
              <span class="text-[#6012B1] font-bold text-xl leading-[30px]">$35.00</span>
              <div>
                <div class="block text-[#151515] text-[8px]   tracking-[-0.17px] mb-0">Approx</div>
                <div class="text-[13px] font-semibold text-[#151515] leading-[20px]">₵300</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Card -->
        <div class="bg-[#FFFFFF] rounded-2xl overflow-hidden break-inside-avoid">
          <img src="/images/p-4.png" class="w-full object-cover" />
          <div class="pt-[11px] px-[6px] pb-[6px]">
            <p
              class="text-[#000000] text-[13.5px] mb-[6px] font-Ponnala overflow-hidden text-ellipsis whitespace-nowrap leading-[24px] tracking-[-0.17px]"
            >
              Multifunctional Thigh Trainer
            </p>
            <div class="flex justify-between items-center">
              <span class="text-[#6012B1] font-bold text-xl leading-[30px]">$9.95</span>
              <div>
                <div class="block text-[#151515] text-[8px]   tracking-[-0.17px] mb-0">Approx</div>
                <div class="text-[13px] font-semibold text-[#151515] leading-[20px]">₵300</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <div class="flex justify-between items-center gap-2 mt-6">
        <button class="border-[3px] border-[#817F8D] px-[9px] py-[2px] rounded-[4.5px] text-white">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1875 16.1849L6.89 10.8874C6.26437 10.2618 6.26437 9.23807 6.89 8.61244L12.1875 3.31494"
              stroke="#9450D3"
              stroke-width="2.25"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          class="border-[3px] border-[#817F8D] px-[9px] py-[4px] rounded-[4px] text-white font-AlteHaas-Grotesk font-bold text-[15px] leading-[16px]"
        >
          1
        </button>
        <button
          class="border-[3px] border-[#817F8D] px-[9px] py-[4px] rounded-[4px] text-white font-AlteHaas-Grotesk font-bold text-[15px] leading-[16px]"
        >
          2
        </button>
        <button
          class="border-[3px] border-[#817F8D] px-[9px] py-[4px] rounded-[4px] text-white font-AlteHaas-Grotesk font-bold text-[15px] leading-[16px]"
        >
          3
        </button>
        <button
          class="border-[3px] border-[#817F8D] px-[9px] py-[4px] rounded-[4px] text-white font-AlteHaas-Grotesk font-bold text-[15px] leading-[16px]"
        >
          4
        </button>
        <button
          class="border-[3px] border-[#817F8D] px-[9px] py-[4px] rounded-[4px] text-white font-AlteHaas-Grotesk font-bold text-[15px] leading-[16px]"
        >
          1220
        </button>

        <button
          class="border-[3px] border-[#817F8D] px-[9px] py-[2px] rounded-[4.5px] text-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.31251 3.31506L12.61 8.61256C13.2356 9.23818 13.2356 10.2619 12.61 10.8876L7.3125 16.1851"
              stroke="#9450D3"
              stroke-width="2.25"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease;
}
.menu-fade-enter-active .relative,
.menu-fade-leave-active .relative {
  transition: transform 0.25s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
.menu-fade-enter-from .relative,
.menu-fade-leave-to .relative {
  transform: translateX(-100%);
}
</style>
