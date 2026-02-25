<script setup lang="ts">
import { ref } from 'vue'

// Tab state
const activeTab = ref<'description' | 'shipping'>('description')

// Quantity
const quantity = ref(1)
const increment = () => quantity.value++
const decrement = () => {
  if (quantity.value > 1) quantity.value--
}

// Color selection
const colors = ['White', 'Blue', 'Green', 'Yellow', 'Red']
const selectedColor = ref('White')

// Size selection
const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const selectedSize = ref('')

// Thumbnails
const thumbnails = [
  '/images/p-1.jpg',
  '/images/p-2.jpg',
  '/images/p3.png',
  '/images/p-4.png',
  '/images/p-1.jpg',
  '/images/p-2.jpg',
  '/images/p3.png',
  '/images/p-4.png',
]

const mainImage = ref(thumbnails[0])

// Social stats
const stats = [
  { icon: 'heart', count: '19,993' },
  { icon: 'comment', count: '10,786' },
  { icon: 'share', count: '12,012' },
  { icon: 'bookmark', count: '30,391' },
]

// Related products
const relatedProducts = [
  { image: '/images/p-4.png', name: 'Accent Chair Modern Home...', price: '$90.82' },
  { image: '/images/p-2.jpg', name: 'Modern Rattan-Door Floating T...', price: '$81.37' },
  { image: '/images/p3.png', name: 'Sliding Barn Door Hardware', price: '$62.56' },
  { image: '/images/p-1.jpg', name: 'Mid-Century Modern Minimalist...', price: '$51.50' },
]

// Size chart data
const sizeChart = [
  { label: 'S', us: '34', chest: '34.2-37.8', waist: '33.7-32.3', hip: '5\'7-5\'9"' },
  { label: 'M', us: '38', chest: '37.8-39.4', waist: '32.2-33.9', hip: '5\'9-5\'11"' },
  { label: 'L', us: '40', chest: '39.4-41.4', waist: '33.9-35.9', hip: '5\'9"-6\'1"' },
  { label: 'XL', us: '42', chest: '41.4-43.3', waist: '35.9-37.8', hip: '6\'1"-6\'3"' },
  { label: 'XXL', us: '44', chest: '43.3-45.3', waist: '37.8-41.2', hip: '6\'1"-6\'3"' },
  { label: 'XXXL', us: '46-48', chest: '45.7-48.5', waist: '40.6-42.9', hip: '6\'3"-6\'5"' },
]
</script>

<template>
  <div class="w-full max-w-[430px] mx-auto bg-[#1A0533] min-h-screen pb-[80px]">
    <!-- Header -->
    <div class="flex items-center justify-between px-[16px] py-[12px] bg-[#3C0A6D]">
      <button class="text-white">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <h1 class="text-white text-[16px] font-semibold">Jess Baker Store</h1>
      <div class="w-[32px] h-[32px] rounded-full bg-[#9450D3] overflow-hidden">
        <img src="/images/pexels-photo-5935258 11.svg" alt="Avatar" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Main Product Image -->
    <div class="w-full aspect-[4/5] bg-[#2A1245] overflow-hidden">
      <img :src="mainImage" alt="Product" class="w-full h-full object-cover" />
    </div>

    <!-- Social Stats Bar -->
    <div class="flex items-center justify-between px-[16px] py-[10px] bg-[#1A0533]">
      <div class="flex items-center gap-[14px]">
        <!-- Heart -->
        <div class="flex items-center gap-[4px]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17.5C9.71667 17.5 9.44167 17.4417 9.19167 17.3167C6.11667 15.7417 1.66667 12.2 1.66667 7.24999C1.66667 4.59166 3.80834 2.44166 6.44167 2.44166C7.83334 2.44166 9.13334 3.03332 10 4.04166C10.8667 3.03332 12.1667 2.44166 13.5583 2.44166C16.1917 2.44166 18.3333 4.59999 18.3333 7.24999C18.3333 12.2083 13.8833 15.7417 10.8083 17.3167C10.5583 17.4417 10.2833 17.5 10 17.5Z" fill="#FF4D6A"/>
          </svg>
          <span class="text-white text-[11px]">19,993</span>
        </div>
        <!-- Comment -->
        <div class="flex items-center gap-[4px]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.375 14.25H6C3 14.25 1.5 13.5 1.5 9.75V6C1.5 3 3 1.5 6 1.5H12C15 1.5 16.5 3 16.5 6V9.75C16.5 12.75 15 14.25 12 14.25H11.625C11.3925 14.25 11.1675 14.3625 11.025 14.55L9.9 16.05C9.405 16.71 8.595 16.71 8.1 16.05L6.975 14.55C6.855 14.385 6.57 14.25 6.375 14.25Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white text-[11px]">10,786</span>
        </div>
        <!-- Share -->
        <div class="flex items-center gap-[4px]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25 11.25L12.75 6.75M5.25 6.75L12.75 11.25" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="4.5" cy="9" r="2.25" stroke="white" stroke-width="1.2"/>
            <circle cx="13.5" cy="5.25" r="2.25" stroke="white" stroke-width="1.2"/>
            <circle cx="13.5" cy="12.75" r="2.25" stroke="white" stroke-width="1.2"/>
          </svg>
          <span class="text-white text-[11px]">12,012</span>
        </div>
        <!-- Bookmark -->
        <div class="flex items-center gap-[4px]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 1.5H5.25C3.75 1.5 2.625 2.625 2.625 4.125V15.375C2.625 16.575 3.4125 17.0625 4.3875 16.4625L8.3625 14.0625C8.7 13.8525 9.255 13.8525 9.585 14.0625L13.56 16.4625C14.535 17.07 15.3225 16.5825 15.3225 15.375V4.125C15.375 2.625 14.25 1.5 12.75 1.5Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white text-[11px]">30,391</span>
        </div>
      </div>
      <!-- Add to cart button -->
      <button class="flex items-center gap-[6px] bg-[#7C3AED] text-white text-[12px] font-semibold px-[14px] py-[7px] rounded-full">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 14.6667C5.7 14.6667 6 14.3667 6 14C6 13.6333 5.7 13.3333 5.33333 13.3333C4.96667 13.3333 4.66667 13.6333 4.66667 14C4.66667 14.3667 4.96667 14.6667 5.33333 14.6667Z" stroke="white" stroke-width="1.2"/>
          <path d="M12 14.6667C12.3667 14.6667 12.6667 14.3667 12.6667 14C12.6667 13.6333 12.3667 13.3333 12 13.3333C11.6333 13.3333 11.3333 13.6333 11.3333 14C11.3333 14.3667 11.6333 14.6667 12 14.6667Z" stroke="white" stroke-width="1.2"/>
          <path d="M1.33333 1.33334H2.66667L4.47333 9.58667C4.54 9.90667 4.82 10.14 5.14667 10.14H12.18C12.4933 10.14 12.7667 9.92667 12.8467 9.62L14.2933 4.18667C14.4 3.78667 14.1 3.39334 13.6867 3.39334H3.74" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add
      </button>
    </div>

    <!-- Thumbnail Gallery -->
    <div class="px-[10px] py-[10px] bg-[#1A0533]">
      <div class="grid grid-cols-5 gap-[8px]">
        <button
          v-for="(thumb, i) in thumbnails.slice(0, 5)"
          :key="'row1-' + i"
          @click="mainImage = thumb"
          class="aspect-square rounded-[8px] overflow-hidden border-2 transition-colors"
          :class="mainImage === thumb ? 'border-[#7C3AED]' : 'border-transparent'"
        >
          <img :src="thumb" alt="Thumbnail" class="w-full h-full object-cover" />
        </button>
      </div>
      <div class="grid grid-cols-5 gap-[8px] mt-[8px]">
        <button
          v-for="(thumb, i) in thumbnails.slice(5, 8)"
          :key="'row2-' + i"
          @click="mainImage = thumb"
          class="aspect-square rounded-[8px] overflow-hidden border-2 transition-colors"
          :class="mainImage === thumb ? 'border-[#7C3AED]' : 'border-transparent'"
        >
          <img :src="thumb" alt="Thumbnail" class="w-full h-full object-cover" />
        </button>
      </div>
    </div>

    <!-- Product Info Section -->
    <div class="bg-white rounded-t-[20px] mt-[8px]">
      <!-- Title & Price -->
      <div class="px-[16px] pt-[20px] pb-[14px]">
        <h2 class="text-[#151515] text-[18px] font-semibold leading-[24px] mb-[10px]">
          BiBi Bow Detail Puff Sleeve Sweater
        </h2>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <span class="text-[#151515] text-[24px] font-bold">${{ (34.71).toFixed(2) }}</span>
            <span class="flex items-center gap-[4px] text-[#22C55E] text-[13px] font-medium">
              <span class="w-[8px] h-[8px] rounded-full bg-[#22C55E] inline-block"></span>
              In stock
            </span>
          </div>
          <!-- Quantity -->
          <div class="flex items-center gap-[2px] border border-[#E5E5E5] rounded-[6px] overflow-hidden">
            <button @click="decrement" class="w-[30px] h-[30px] flex items-center justify-center text-[#555] text-[16px]">-</button>
            <span class="w-[28px] text-center text-[14px] text-[#151515] font-medium">{{ quantity }}</span>
            <button @click="increment" class="w-[30px] h-[30px] flex items-center justify-center text-[#555] text-[16px]">+</button>
          </div>
        </div>
      </div>

      <!-- Color Selection -->
      <div class="px-[16px] pb-[14px]">
        <div class="flex items-center gap-[10px] flex-wrap">
          <span class="text-[#151515] text-[12px] font-bold uppercase tracking-wide">Select Color:</span>
          <button
            v-for="color in colors"
            :key="color"
            @click="selectedColor = color"
            class="text-[13px] font-medium px-[2px] pb-[2px] transition-colors"
            :class="selectedColor === color ? 'text-[#151515] border-b-2 border-[#151515]' : 'text-[#555]'"
          >
            {{ color }}
          </button>
        </div>
      </div>

      <!-- Size Guide Banner -->
      <div class="mx-[16px] mb-[14px] bg-[#FFF3CD] rounded-[8px] px-[12px] py-[8px] flex items-center justify-between">
        <span class="text-[#856404] text-[11px] font-medium">Scroll down to check the size guide before you select size</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3.33334V12.6667" stroke="#856404" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8.66666L8 12.6667L4 8.66666" stroke="#856404" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Size Selection -->
      <div class="px-[16px] pb-[10px]">
        <div class="flex items-center gap-[10px] flex-wrap">
          <span class="text-[#151515] text-[12px] font-bold uppercase tracking-wide">Select Size:</span>
          <button
            v-for="size in sizes"
            :key="size"
            @click="selectedSize = size"
            class="text-[13px] font-medium px-[2px] pb-[2px] transition-colors"
            :class="selectedSize === size ? 'text-[#151515] border-b-2 border-[#151515]' : 'text-[#555]'"
          >
            {{ size }}
          </button>
        </div>
      </div>

      <!-- Ruler / Inch Info -->
      <div class="px-[16px] pb-[16px] flex items-center gap-[8px]">
        <div class="w-[60px] h-[10px] bg-[#F5F5F5] rounded-full overflow-hidden flex">
          <div v-for="i in 8" :key="i" class="flex-1 border-r border-[#DDD] last:border-r-0"></div>
        </div>
        <span class="text-[#151515] text-[12px]">1 Inch = 2.54 cm</span>
      </div>

      <!-- Divider -->
      <div class="h-[6px] bg-[#F5F5F5]"></div>

      <!-- Tabs -->
      <div class="flex border-b border-[#EDEDED]">
        <button
          @click="activeTab = 'description'"
          class="flex-1 py-[14px] text-center text-[14px] font-medium transition-colors"
          :class="activeTab === 'description' ? 'text-[#151515] border-b-2 border-[#151515]' : 'text-[#999]'"
        >
          Description
        </button>
        <button
          @click="activeTab = 'shipping'"
          class="flex-1 py-[14px] text-center text-[14px] font-medium transition-colors"
          :class="activeTab === 'shipping' ? 'text-[#7C3AED] border-b-2 border-[#7C3AED]' : 'text-[#999]'"
        >
          Shipping Information
        </button>
      </div>

      <!-- Description Tab Content -->
      <div v-if="activeTab === 'description'" class="px-[16px] py-[16px]">
        <h4 class="text-[#151515] text-[14px] font-semibold mb-[8px]">Product information:</h4>
        <div class="text-[#555] text-[13px] leading-[22px] space-y-[2px]">
          <p>Fabric name: Polyester</p>
          <p>Skirt-type: A~ line skirt</p>
          <p>Color: white/WTE Hepburn style/slim fit,</p>
          <p>premium Black/BLK Hepburn style/hot sale recommend</p>
          <p class="mt-[6px]">Main fabric composition: Polyester (polyester fiber)</p>
          <p class="mt-[6px]">Size: XS 35.00 kg~40.00 kg, S 40.00 kg~45.00 kg,</p>
          <p>M 45.00 kg~52.50 kg, L 52.50 kg~60.00 kg, XL</p>
          <p>60.00 kg~65.00 kg</p>
          <p>Style type: Street hipster</p>
          <p>Combination form: Single piece</p>
          <p>Skirt length: short skirt</p>
          <p>Sleeve length: short sleeve</p>
          <p>Skirt Category: Dress</p>
        </div>

        <!-- Size Chart Table -->
        <div class="mt-[16px] overflow-x-auto">
          <table class="w-full text-[11px] text-[#555]">
            <thead>
              <tr class="border-b border-[#EDEDED]">
                <th class="text-left py-[6px] pr-[6px] text-[#151515] font-semibold">Label size</th>
                <th class="text-left py-[6px] pr-[6px] text-[#151515] font-semibold">US</th>
                <th class="text-left py-[6px] pr-[6px] text-[#151515] font-semibold">Chest circumference</th>
                <th class="text-left py-[6px] pr-[6px] text-[#151515] font-semibold">Waistline</th>
                <th class="text-left py-[6px] text-[#151515] font-semibold">High</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in sizeChart" :key="row.label" class="border-b border-[#F5F5F5]">
                <td class="py-[5px] pr-[6px]">{{ row.label }}</td>
                <td class="py-[5px] pr-[6px]">{{ row.us }}</td>
                <td class="py-[5px] pr-[6px]">{{ row.chest }}</td>
                <td class="py-[5px] pr-[6px]">{{ row.waist }}</td>
                <td class="py-[5px]">{{ row.hip }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Packing List -->
        <div class="mt-[16px]">
          <h4 class="text-[#151515] text-[14px] font-semibold mb-[4px]">Packing list:</h4>
          <p class="text-[#555] text-[13px]">DRESS*1</p>
        </div>

        <!-- Product Image -->
        <div class="mt-[12px]">
          <h4 class="text-[#151515] text-[14px] font-semibold mb-[8px]">Product Image:</h4>
          <div class="rounded-[12px] overflow-hidden">
            <img :src="thumbnails[0]" alt="Product detail" class="w-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Shipping Tab Content -->
      <div v-if="activeTab === 'shipping'" class="px-[16px] py-[16px]">
        <!-- See full details link -->
        <a href="#" class="flex items-center gap-[4px] text-[#555] text-[13px] mb-[20px]">
          See full details
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 3.5L3.5 10.5" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M10.5 3.5H5.25" stroke="#555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 3.5V8.75" stroke="#555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <!-- Delivery Info -->
        <div class="flex items-start gap-[12px] mb-[20px]">
          <div class="w-[40px] h-[40px] rounded-full bg-[#F3EAFF] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3333 1.66666H3.33334C2.41667 1.66666 1.66667 2.41666 1.66667 3.33332V11.6667C1.66667 12.5833 2.41667 13.3333 3.33334 13.3333H13.3333C14.25 13.3333 15 12.5833 15 11.6667V3.33332C15 2.41666 14.25 1.66666 13.3333 1.66666Z" stroke="#7C3AED" stroke-width="1.3" stroke-linecap="round"/>
              <path d="M15 6.66666H16.6667C17.3333 6.66666 17.9167 7.08332 18.1667 7.66666L18.3333 8.33332V13.3333C18.3333 14.25 17.5833 15 16.6667 15H15" stroke="#7C3AED" stroke-width="1.3" stroke-linecap="round"/>
              <circle cx="5.83333" cy="15.8333" r="1.66667" stroke="#7C3AED" stroke-width="1.3"/>
              <circle cx="14.1667" cy="15.8333" r="1.66667" stroke="#7C3AED" stroke-width="1.3"/>
              <path d="M7.5 15.8333H12.5" stroke="#7C3AED" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <p class="text-[#151515] text-[14px] font-bold leading-[20px]">Free Delivery by 22 Jan -23 Jan</p>
            <p class="text-[#555] text-[13px] leading-[20px]">Express delivery by 19 Jan - 22 Jan.</p>
          </div>
        </div>

        <!-- Returns -->
        <div class="flex items-start gap-[12px] mb-[20px]">
          <div class="w-[40px] h-[40px] rounded-full bg-[#F3EAFF] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 18.3333H12.5C16.6667 18.3333 18.3333 16.6667 18.3333 12.5V7.49999C18.3333 3.33332 16.6667 1.66666 12.5 1.66666H7.5C3.33334 1.66666 1.66667 3.33332 1.66667 7.49999V12.5C1.66667 16.6667 3.33334 18.3333 7.5 18.3333Z" stroke="#7C3AED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66667 10L8.91667 12.25L13.3333 7.75" stroke="#7C3AED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <p class="text-[#151515] text-[14px] font-bold leading-[20px]">Free 30 days returns</p>
            <p class="text-[#555] text-[13px] leading-[20px]">12 Months Seller Warranty</p>
          </div>
        </div>

        <!-- Verified Seller -->
        <div class="flex items-start gap-[12px]">
          <div class="w-[40px] h-[40px] rounded-full bg-[#F3EAFF] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.60833 1.83332L5.36667 4.51666L1.66667 5.24999L1.025 8.98332L-0.833328 11.8917L0.858339 14.8L1.66667 18.5L5.36667 19.2333L8.60833 21.9167L12.1 20.35L15.5917 21.9167L18.8333 19.2333L22.5333 18.5L23.175 14.8L25.0333 11.8917L23.3417 8.98332L22.5333 5.24999L18.8333 4.51666L15.5917 1.83332L12.1 3.39999L8.60833 1.83332Z" stroke="#7C3AED" stroke-width="1.3"/>
              <path d="M7.5 10L9.16667 11.6667L12.9167 7.91666" stroke="#7C3AED" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <p class="text-[#151515] text-[14px] font-bold leading-[20px]">Verified Seller</p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-[6px] bg-[#F5F5F5]"></div>

      <!-- Related Products -->
      <div class="px-[16px] py-[16px]">
        <div class="flex items-center justify-between mb-[14px]">
          <h3 class="text-[#151515] text-[16px] font-bold">Related Product</h3>
          <a href="#" class="text-[#555] text-[13px] font-medium flex items-center gap-[4px]">
            View All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 2.91666L9.33333 7L5.25 11.0833" stroke="#555" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

        <!-- Product Cards -->
        <div class="flex flex-col gap-[10px]">
          <div
            v-for="(product, i) in relatedProducts"
            :key="i"
            class="flex items-center gap-[12px] border border-[#EDEDED] rounded-[12px] p-[10px]"
          >
            <div class="w-[64px] h-[64px] rounded-[8px] overflow-hidden bg-[#F5F5F5] shrink-0">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[#151515] text-[13px] font-medium truncate">{{ product.name }}</p>
              <span class="text-[#7C3AED] text-[14px] font-bold">{{ product.price }}</span>
              <div class="flex justify-end mt-[2px]">
                <button class="text-[#555] text-[12px] font-medium">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp Floating Button -->
    <button class="fixed bottom-[80px] right-[16px] w-[50px] h-[50px] rounded-full bg-[#25D366] flex items-center justify-center shadow-lg z-40">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1 3.8C19.7 1.4 16.5 0 13.1 0C5.9 0 0.1 5.8 0.1 13C0.1 15.3 0.7 17.5 1.8 19.5L0 26L6.7 24.2C8.6 25.2 10.8 25.7 13 25.7H13.1C20.3 25.7 26.1 19.9 26.1 12.7C26 9.3 24.5 6.2 22.1 3.8ZM13.1 23.5C11.1 23.5 9.2 23 7.5 22L7.1 21.8L3.1 22.8L4.1 19L3.8 18.5C2.7 16.7 2.1 14.9 2.1 13C2.1 6.9 7 2.1 13.1 2.1C16 2.1 18.7 3.3 20.7 5.3C22.7 7.3 23.9 10 23.9 12.9C24 19.1 19.1 23.5 13.1 23.5ZM19.1 15.7C18.7 15.5 17.1 14.7 16.8 14.6C16.4 14.5 16.2 14.4 15.9 14.8C15.7 15.2 15 15.9 14.8 16.1C14.6 16.4 14.4 16.4 14 16.2C13.6 16 12.6 15.6 11.4 14.6C10.5 13.8 9.9 12.8 9.7 12.4C9.5 12 9.7 11.8 9.9 11.6C10.1 11.4 10.3 11.2 10.4 11C10.6 10.8 10.6 10.6 10.7 10.4C10.8 10.2 10.8 10 10.6 9.8C10.5 9.6 9.9 8 9.6 7.2C9.3 6.5 9 6.5 8.8 6.5H8.1C7.9 6.5 7.5 6.6 7.1 7C6.8 7.4 5.9 8.2 5.9 9.8C5.9 11.4 7.1 12.9 7.3 13.2C7.5 13.4 9.9 17 13.4 18.4C14.1 18.7 14.7 18.9 15.1 19C15.8 19.2 16.5 19.2 17 19.1C17.6 19 18.9 18.4 19.2 17.6C19.5 16.9 19.5 16.2 19.4 16.1C19.3 15.9 19.1 15.8 19.1 15.7Z" fill="white"/>
      </svg>
    </button>

    <!-- Sticky Buy Now Button -->
    <div class="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white px-[16px] py-[12px] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
      <button class="w-full bg-[#151515] text-white py-[14px] rounded-[12px] text-[16px] font-bold">
        Buy Now
      </button>
    </div>
  </div>
</template>
