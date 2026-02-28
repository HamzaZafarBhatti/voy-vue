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
  'https://picsum.photos/id/1011/200/300',
  'https://picsum.photos/id/1015/200/300',
  'https://picsum.photos/id/1016/200/300',
  'https://picsum.photos/id/1020/200/300',
  'https://picsum.photos/id/1024/200/300',
  'https://picsum.photos/id/1027/200/300',
  'https://picsum.photos/id/1035/200/300',
]

const mainImage = ref(thumbnails[0])

// Related products
const relatedProducts = [
  { image: '/images/p-4.png', name: 'Accent Chair Modern Home...', price: '$90.82' },
  { image: '/images/p-2.jpg', name: 'Modern Rattan-Door Floating T...', price: '$81.37' },
  { image: '/images/p3.png', name: 'Sliding Barn Door Hardware', price: '$62.56' },
  { image: '/images/p-1.jpg', name: 'Mid-Century Modern Minimalist...', price: '$51.50' },
]

// Size chart data
const sizeChart = [
  { label: 'S', us: '34', chest: '34.2-37.8', waist: '33.7-32.3', hip: "5'7-5'9\"" },
  { label: 'M', us: '38', chest: '37.8-39.4', waist: '32.2-33.9', hip: "5'9-5'11\"" },
  { label: 'L', us: '40', chest: '39.4-41.4', waist: '33.9-35.9', hip: '5\'9"-6\'1"' },
  { label: 'XL', us: '42', chest: '41.4-43.3', waist: '35.9-37.8', hip: '6\'1"-6\'3"' },
  { label: 'XXL', us: '44', chest: '43.3-45.3', waist: '37.8-41.2', hip: '6\'1"-6\'3"' },
  { label: 'XXXL', us: '46-48', chest: '45.7-48.5', waist: '40.6-42.9', hip: '6\'3"-6\'5"' },
]
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between pt-[16.5px] pb-[8.28px]">
      <button class="text-white">
        <svg
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.43934 6.09619C-0.146447 6.68198 -0.146447 7.63173 0.43934 8.21751L6.09619 13.8744C6.68198 14.4602 7.63173 14.4602 8.21751 13.8744C8.8033 13.2886 8.8033 12.3388 8.21751 11.753L5.12132 8.65685H16.6568C17.4852 8.65685 18.1568 7.98528 18.1568 7.15685C18.1568 6.32843 17.4852 5.65685 16.6568 5.65685H5.12132L8.21751 2.56066C8.8033 1.97487 8.8033 1.02513 8.21751 0.43934C7.63173 -0.146447 6.68198 -0.146447 6.09619 0.43934L0.43934 6.09619Z"
            fill="white"
          />
        </svg>
      </button>
      <div class="flex items-center justify-between gap-[5.5px]">
        <h1 class="text-white text-[14px] font-semibold leading-[21px]">Jess Baker Store</h1>
        <div class="rounded-full bg-[#9450D3] relative">
          <img
            src="/images/pexels-photo-5935258 11.svg"
            alt="Avatar"
            class="w-[32px] h-[32px] object-cover"
          />
          <img
            src="/images/verified-icon.svg"
            alt="Verified"
            class="w-[13.34px] h-[13.34px] absolute bottom-[-4px] right-[-3px]"
          />
        </div>
      </div>
    </div>

    <div class="bg-[#320D56] rounded-ss-[30px] rounded-se-[30px]">
      <!-- Main Product Image -->
      <div class="w-full  overflow-hidden">
        <img :src="mainImage" alt="Product" class="w-full h-full object-cover rounded-[30px] max-h-[382px]" />
      </div>

      <!-- Social Stats Bar -->
      <div class="flex items-center justify-between pb-[4px] pt-[11px] px-[18px]">
        <div class="flex items-center gap-[6.36px]">
          <!-- Heart -->
          <div class="flex items-center gap-[4px]">
            <svg
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6936 2.54082C21.1403 1.98724 20.4833 1.54811 19.7602 1.2485C19.0371 0.948887 18.2621 0.794678 17.4794 0.794678C16.6967 0.794678 15.9217 0.948887 15.1986 1.2485C14.4755 1.54811 13.8186 1.98724 13.2652 2.54082L12.1169 3.68916L10.9686 2.54082C9.85091 1.42316 8.33503 0.795257 6.75441 0.795257C5.17379 0.795257 3.65791 1.42316 2.54024 2.54082C1.42258 3.65849 0.794678 5.17437 0.794678 6.75499C0.794678 8.33561 1.42258 9.85149 2.54024 10.9692L3.68858 12.1175L12.1169 20.5458L20.5452 12.1175L21.6936 10.9692C22.2472 10.4158 22.6863 9.75887 22.9859 9.03579C23.2855 8.31271 23.4397 7.53768 23.4397 6.75499C23.4397 5.97229 23.2855 5.19727 22.9859 4.47419C22.6863 3.75111 22.2472 3.09414 21.6936 2.54082Z"
                stroke="#EBE2FD"
                stroke-width="1.58926"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="text-white text-[10px] font-bold">19,993</span>
          </div>
          <!-- Comment -->
          <div class="flex items-center gap-[4px]">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66675 24.1799C8.36342 24.1799 8.04923 24.1041 7.76756 23.9525C7.15006 23.6275 6.77092 22.9774 6.77092 22.2841V20.7458C3.49925 20.41 1.35425 18.0049 1.35425 14.5599V8.05998C1.35425 4.33331 3.85675 1.83081 7.58342 1.83081H18.4167C22.1434 1.83081 24.6459 4.33331 24.6459 8.05998V14.5599C24.6459 18.2866 22.1434 20.7891 18.4167 20.7891H14.3326L9.71755 23.8658C9.40338 24.0717 9.03508 24.1799 8.66675 24.1799ZM7.58342 3.44497C4.78842 3.44497 2.97925 5.25413 2.97925 8.04913V14.5492C2.97925 17.3442 4.78842 19.1534 7.58342 19.1534C8.02758 19.1534 8.39592 19.5217 8.39592 19.9659V22.2734C8.39592 22.4142 8.48259 22.4792 8.53675 22.5117C8.59092 22.5442 8.69927 22.5767 8.81843 22.5008L13.6393 19.2942C13.7693 19.2075 13.9318 19.1534 14.0943 19.1534H18.4276C21.2226 19.1534 23.0318 17.3442 23.0318 14.5492V8.04913C23.0318 5.25413 21.2226 3.44497 18.4276 3.44497H7.58342Z"
                fill="#EBE2FD"
              />
              <path
                d="M11.5432 14.3583C11.3374 14.3583 11.1315 14.2824 10.969 14.1199L9.22488 12.3758C8.91072 12.0616 8.91072 11.5416 9.22488 11.2274C9.53905 10.9133 10.059 10.9133 10.3732 11.2274L11.5432 12.3974L15.6274 8.31326C15.9416 7.9991 16.4616 7.9991 16.7757 8.31326C17.0899 8.62743 17.0899 9.14743 16.7757 9.4616L12.1174 14.1199C11.9549 14.2824 11.749 14.3583 11.5432 14.3583Z"
                fill="#EBE2FD"
              />
            </svg>

            <span class="text-white text-[10px] font-bold">10,786</span>
          </div>
          <!-- Share -->
          <div class="flex items-center gap-[4px]">
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1608 1.04008C11.1608 0.234064 11.9691 -0.224857 12.5893 0.111208L12.719 0.195553L12.827 0.290971L20.6969 8.24908C21.0234 8.57921 21.0861 9.08724 20.885 9.48569L20.7972 9.62941L20.6971 9.7472L12.8272 17.7078C12.2754 18.2659 11.4016 17.9687 11.2021 17.2641L11.1701 17.107L11.1608 16.9589V13.187L10.7098 13.2287C10.2743 13.2766 9.84131 13.3464 9.41081 13.4382C6.72669 14.0112 4.13784 15.4402 1.63207 17.7415C0.950563 18.3675 -0.10383 17.7757 0.00825731 16.8302C0.8592 9.65185 4.35231 5.6148 10.305 4.94565L10.7678 4.90082L11.1608 4.87362V1.04008ZM12.9108 2.89987V6.5566L10.896 6.69599C8.14206 6.92288 6.11162 7.90966 4.6606 9.51932C3.4898 10.8181 2.59863 12.6313 2.07679 15.0399C4.55396 13.1304 7.17031 11.9338 9.93021 11.5164L10.5385 11.4372L12.9108 11.218V15.0987L18.9417 8.99828L12.9108 2.89987Z"
                fill="#EBE2FD"
              />
            </svg>

            <span class="text-white text-[10px] font-bold">12,012</span>
          </div>
          <!-- Bookmark -->
          <div class="flex items-center gap-[4px]">
            <svg
              width="17"
              height="22"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9613 20.2947L8.37801 14.878L0.794678 20.2947V2.96134C0.794678 2.38671 1.02295 1.83561 1.42928 1.42928C1.83561 1.02295 2.38671 0.794678 2.96134 0.794678H13.7947C14.3693 0.794678 14.9204 1.02295 15.3267 1.42928C15.7331 1.83561 15.9613 2.38671 15.9613 2.96134V20.2947Z"
                stroke="#EBE2FD"
                stroke-width="1.58926"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="text-white text-[10px] font-bold">30,391</span>
          </div>
        </div>
        <!-- Add to cart button -->
        <button
          class="flex items-center gap-[3px] bg-[#6007B6] text-white text-[14px] font-bold p-[2px] pr-[10px] rounded-full"
        >
          <img src="/images/cart-icon.svg" alt="cart" class="w-[31px] h-[31px]" />
          Add
        </button>
      </div>
    </div>

    <!-- Thumbnail Gallery -->

    <div class="pt-[12px] pb-[9px] bg-[#1A0533]">
      <div class="grid grid-cols-5 gap-[10px]">
        <button
          v-for="(thumb, i) in thumbnails"
          :key="i"
          @click="mainImage = thumb"
          class="rounded-[5px] overflow-hidden border transition-colors p-[3px]"
          :class="mainImage === thumb ? 'border-[#FF58A8]' : 'border-white'"
        >
          <img :src="thumb" alt="Thumbnail" class="w-[66px] h-[83px] object-cover" />
        </button>
      </div>
    </div>
    <!-- Product Info Section -->
    <div class="bg-white px-[21px] pt-[15px] pb-[10px]">
      <!-- Title & Price -->
      <div>
        <h2 class="text-[#151515] text-[18px] font-semibold leading-[24px] mb-[16px]">
          BiBi Bow Detail Puff Sleeve Sweater
        </h2>
        <div class="flex items-center justify-between pb-[14.67px]">
          <span class="text-[#5E00B9] text-[24px] font-bold">${{ (34.71).toFixed(2) }}</span>
          <div>
            <span class="flex items-center gap-[4px] text-[#017E01] text-[16px] font-bold">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.49992 1.08325C3.51533 1.08325 1.08325 3.51533 1.08325 6.49992C1.08325 9.4845 3.51533 11.9166 6.49992 11.9166C9.4845 11.9166 11.9166 9.4845 11.9166 6.49992C11.9166 3.51533 9.4845 1.08325 6.49992 1.08325ZM9.08909 5.25408L6.01783 8.32533C5.942 8.40117 5.83908 8.4445 5.73075 8.4445C5.62242 8.4445 5.5195 8.40117 5.44367 8.32533L3.91075 6.79242C3.75367 6.63533 3.75367 6.37533 3.91075 6.21825C4.06783 6.06117 4.32783 6.06117 4.48492 6.21825L5.73075 7.46408L8.51492 4.67992C8.672 4.52284 8.932 4.52284 9.08909 4.67992C9.24617 4.837 9.24617 5.09158 9.08909 5.25408Z"
                  fill="#017E01"
                />
              </svg>

              In stock
            </span>
          </div>
          <!-- Quantity -->
          <div
            class="flex items-center gap-[2px] border border-[#EFEFEF] rounded-full overflow-hidden bg-white p-[3px]"
          >
            <button
              @click="decrement"
              class="w-[30px] h-[30px] flex items-center justify-center text-black bg-[#EFEFEF] rounded-full"
            >
             <font-awesome-icon icon="fa-solid fa-minus " class="text-[13px]"/>
            </button>
            <span class="w-[28px] text-center text-[14px] text-black font-medium">{{
              quantity
            }}</span>
            <button
              @click="increment"
              class="w-[30px] h-[30px] flex items-center justify-center text-black text-[16px] bg-[#EFEFEF] rounded-full"
            >
             <font-awesome-icon icon="fa-solid fa-plus" class="text-[13px]"/>
            </button>
          </div>
        </div>
      </div>

      <!-- Color Selection -->
      <div class="mb-[15px]">
        <div class="flex items-center flex-wrap gap-[10px]">
          <span class="text-[#000000] text-[10px] font-semibold uppercase">Select Color:</span>
          <div class="flex justify-between flex-1">
            <button
              v-for="color in colors"
              :key="color"
              @click="selectedColor = color"
              class="text-[14px] font-bold transition-colors"
              :class="selectedColor === color ? 'text-[#FF58A8]' : 'text-[#000000]'"
            >
              {{ color }}
            </button>
          </div>
        </div>
      </div>

      <!-- Size Guide Banner -->
      <div class="flex items-center justify-between mb-[17px]">
        <div class="bg-[#FFD600] rounded-[5px] leading-[18px] px-[5px] py-[4.67px]">
          <span class="text-[#000000] text-[11px] font-bold tracking-[-0.25px]"
            >Scroll down to check the size guide before you select size</span
          >
        </div>
        <div>
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.96259 15.6128C6.53553 16.1291 7.46447 16.1291 8.03741 15.6128L13.5703 10.6279C14.1432 10.1117 14.1432 9.27481 13.5703 8.75861C12.9973 8.2424 12.0684 8.2424 11.4955 8.75861L8.46713 11.487L8.46713 1.32182C8.46713 0.591799 7.81027 6.12277e-07 7 6.47695e-07C6.18973 6.83113e-07 5.53287 0.5918 5.53287 1.32182L5.53288 11.487L2.50454 8.75861C1.93159 8.2424 1.00266 8.2424 0.429711 8.75861C-0.143237 9.27481 -0.143237 10.1117 0.429711 10.6279L5.96259 15.6128Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <!-- Size Selection -->
      <div class="mb-[9.31px]">
        <div class="flex items-center flex-wrap gap-[10px]">
          <h6 class="text-[#000000] text-[10px] font-semibold uppercase leading-[133.4%]">
            Select Size:
          </h6>
          <div class="flex justify-between flex-1">
            <button
              v-for="size in sizes"
              :key="size"
              @click="selectedSize = size"
              class="text-[14px] font-bold transition-colors leading-none"
              :class="selectedSize === size ? 'text-[#FF58A8]' : 'text-[#000000]'"
            >
              {{ size }}
            </button>
          </div>
        </div>
      </div>

      <!-- Ruler / Inch Info -->
      <div class="flex items-center gap-[8px] bg-[#E7FFE7] w-fit py-[5px] pr-[5px] rounded-[5px]">
        <div class="w-[60px] h-[10px] bg-[#F5F5F5] rounded-full overflow-hidden flex">
          <img src="/images/ruler.svg" alt="cart" class="w-[62px] h-[11px]" />
        </div>
        <span class="font-semibold text-[#000000] text-[12px] tracking-[-0.17px] leading-[18px]"
          >1 Inch = 2.54 cm</span
        >
      </div>
    </div>
    <div class="bg-[#F0F4F7] px-[21px] pt-[15px] pb-[10px] mt-[11px]">
      <!-- Tabs -->
      <div class="flex">
        <button
          @click="activeTab = 'description'"
          class="py-[8px] px-[15px] text-center text-[16px] font-bold transition-colors leading-[18px] tracking-[-0.25px]"
          :class="
            activeTab === 'description'
              ? 'text-[#5E00B9] border-b-2 border-[#5E00B9]'
              : 'text-[#6C6C6C]'
          "
        >
          Description
        </button>
        <button
          @click="activeTab = 'shipping'"
          class="py-[8px] px-[15px] text-center text-[16px] font-bold transition-colors leading-[18px] tracking-[-0.25px]"
          :class="
            activeTab === 'shipping'
              ? 'text-[#5E00B9] border-b-2 border-[#5E00B9]'
              : 'text-[#6C6C6C]'
          "
        >
          Shipping Information
        </button>
      </div>

      <!-- Description Tab Content -->
      <div v-if="activeTab === 'description'">
        <div class="bg-white px-2.5 pt-[15px] pb-2.5 mt-2 mb-[13px]">
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
        </div>

        <!-- Size Chart Table -->
        <div class="mt-[16px] overflow-x-auto rounded-[8px] border border-[#EDEDED]">
          <table class="w-full text-[12px] text-[#666] border-collapse">
            <thead>
              <tr class="bg-[#f6f6f6]">
                <th
                  class="text-left py-[10px] px-[10px] text-black text-[11px] font-bold border-b border-[#E5E5E5]"
                >
                  Label size
                </th>
                <th
                  class="text-left py-[10px] px-[10px] text-black text-[11px] font-bold border-b border-[#E5E5E5]"
                >
                  US
                </th>
                <th
                  class="text-left py-[10px] px-[10px] text-black text-[11px] font-bold border-b border-[#E5E5E5]"
                >
                  Chest circumference
                </th>
                <th
                  class="text-left py-[10px] px-[10px] text-black text-[11px] font-bold border-b border-[#E5E5E5]"
                >
                  Waistline
                </th>
                <th
                  class="text-left py-[10px] px-[10px] text-black text-[11px] font-bold border-b border-[#E5E5E5]"
                >
                  High
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in sizeChart"
                :key="row.label"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-white'"
              >
                <td class="text-black py-[10px] px-[10px] border-b  border-s border-[#F0F0F0] bg-[#F6F6F6]">
                  {{ row.label }}
                </td>
                <td class="text-black py-[10px] px-[10px] border-b  border-s border-[#F0F0F0]">
                  {{ row.us }}
                </td>
                <td class="text-black py-[10px] px-[10px] border-b  border-s border-[#F0F0F0]">
                  {{ row.chest }}
                </td>
                <td class="text-black py-[10px] px-[10px] border-b  border-s border-[#F0F0F0]">
                  {{ row.waist }}
                </td>
                <td class="text-black py-[10px] px-[10px] border-b  border-s border-[#F0F0F0]">
                  {{ row.hip }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-white px-2.5 pt-[15px] pb-2.5 mt-2 mb-[13px]">
          <!-- Packing List -->
          <div>
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
      </div>
      <!-- Shipping Tab Content -->
      <div v-if="activeTab === 'shipping'" class="px-[16px] py-[16px]">
        <!-- See full details link -->
        <a
          href="#"
          class="flex items-center gap-[10px] text-[#190829] text-[10px] mb-[14px] underline"
        >
          See full details
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.95825 5.04178L9.71659 1.28345"
              stroke="#190829"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0833 3.11675V0.916748H7.8833"
              stroke="#190829"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.04175 0.916748H4.12508C1.83341 0.916748 0.916748 1.83341 0.916748 4.12508V6.87508C0.916748 9.16675 1.83341 10.0834 4.12508 10.0834H6.87508C9.16675 10.0834 10.0834 9.16675 10.0834 6.87508V5.95841"
              stroke="#190829"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>

        <!-- Delivery Info -->
        <div class="flex items-center gap-[15px] mb-[17px]">
          <div
            class="w-[35px] h-[35px] rounded-[4px] bg-[#7B619E] flex items-center justify-center shrink-0"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 8H8"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 11H6"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 14H4"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p class="text-[#190829] text-[13px] font-bold leading-[133.4%] mb-[2px]">
              Free Delivery by 22 Jan -23 Jan
            </p>
            <p class="text-[#190829] text-[13px] leading-[133.4%]">
              Express delivery by 19 Jan - 22 Jan.
            </p>
          </div>
        </div>

        <!-- Returns -->
        <div class="flex items-center gap-[15px] mb-[17px]">
          <div
            class="w-[35px] h-[35px] rounded-[4px] bg-[#7B619E] flex items-center justify-center shrink-0"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4899 2.23006L5.49991 4.11006C4.34991 4.54006 3.40991 5.90006 3.40991 7.12006V14.5501C3.40991 15.7301 4.18991 17.2801 5.13991 17.9901L9.43991 21.2001C10.8499 22.2601 13.1699 22.2601 14.5799 21.2001L18.8799 17.9901C19.8299 17.2801 20.6099 15.7301 20.6099 14.5501V7.12006C20.6099 5.89006 19.6699 4.53006 18.5199 4.10006L13.5299 2.23006C12.6799 1.92006 11.3199 1.92006 10.4899 2.23006Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.05005 11.8699L10.66 13.4799L14.96 9.17993"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p class="text-[#190829] text-[13px] font-bold leading-[133.4%] mb-[2px]">Free 30 days returns</p>
            <p class="text-[#190829] text-[13px] leading-[133.4%]">12 Months Seller Warranty</p>
          </div>
        </div>

        <!-- Verified Seller -->
        <div class="flex items-center gap-[15px]">
          <div
            class="w-[35px] h-[35px] rounded-[4px] bg-[#7B619E] flex items-center justify-center shrink-0"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.37988 12.0001L10.7899 14.4201L15.6199 9.58008"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.7499 2.45007C11.4399 1.86007 12.5699 1.86007 13.2699 2.45007L14.8499 3.81007C15.1499 4.07007 15.7099 4.28007 16.1099 4.28007H17.8099C18.8699 4.28007 19.7399 5.15007 19.7399 6.21007V7.91007C19.7399 8.30007 19.9499 8.87007 20.2099 9.17007L21.5699 10.7501C22.1599 11.4401 22.1599 12.5701 21.5699 13.2701L20.2099 14.8501C19.9499 15.1501 19.7399 15.7101 19.7399 16.1101V17.8101C19.7399 18.8701 18.8699 19.7401 17.8099 19.7401H16.1099C15.7199 19.7401 15.1499 19.9501 14.8499 20.2101L13.2699 21.5701C12.5799 22.1601 11.4499 22.1601 10.7499 21.5701L9.16988 20.2101C8.86988 19.9501 8.30988 19.7401 7.90988 19.7401H6.17988C5.11988 19.7401 4.24988 18.8701 4.24988 17.8101V16.1001C4.24988 15.7101 4.03988 15.1501 3.78988 14.8501L2.43988 13.2601C1.85988 12.5701 1.85988 11.4501 2.43988 10.7601L3.78988 9.17007C4.03988 8.87007 4.24988 8.31007 4.24988 7.92007V6.20007C4.24988 5.14007 5.11988 4.27007 6.17988 4.27007H7.90988C8.29988 4.27007 8.86988 4.06007 9.16988 3.80007L10.7499 2.45007Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p class="text-[#190829] text-[13px] font-bold leading-[133.4%]">Verified Seller</p>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div>
        <div class="bg-white px-[15px] py-[15px] mt-2 mb-[13px]">
          <div class="flex items-center justify-between">
            <h3 class="text-[#000000] text-[16px] font-bold">Related Product</h3>
            <a href="#" class="text-[#6C6C6C] text-[13px] font-medium flex items-center gap-[4px]">
              View All
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 2.91666L9.33333 7L5.25 11.0833"
                  stroke="#555"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- Product Cards -->
        <div class="bg-white px-[15px] py-[15px] mb-5">
          <div class="flex flex-col gap-[10px]">
            <div
              v-for="(product, i) in relatedProducts"
              :key="i"
              class="flex gap-[12px] border border-[#E6E6E6] rounded-[12px] p-[10px]"
            >
              <div class="w-[64px] h-[64px] rounded-[8px] overflow-hidden bg-[#F5F5F5] shrink-0">
                <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1 min-w-0 mt-1">
                <p class="text-black text-[13px] font-bold truncate">{{ product.name }}</p>
                <span class="text-[#5E00B9] text-[14px] font-bold">{{ product.price }}</span>
                <div class="flex justify-end mt-[2px]">
                  <button
                    class="text-black text-[12px] font-bold border border-[#E6E6E6] px-4 py-2 rounded-full"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp Floating Button -->
    <button
      class="fixed bottom-[80px] right-[16px] w-[50px] h-[50px] rounded-full bg-[#25D366] flex items-center justify-center shadow-lg z-40"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.1 3.8C19.7 1.4 16.5 0 13.1 0C5.9 0 0.1 5.8 0.1 13C0.1 15.3 0.7 17.5 1.8 19.5L0 26L6.7 24.2C8.6 25.2 10.8 25.7 13 25.7H13.1C20.3 25.7 26.1 19.9 26.1 12.7C26 9.3 24.5 6.2 22.1 3.8ZM13.1 23.5C11.1 23.5 9.2 23 7.5 22L7.1 21.8L3.1 22.8L4.1 19L3.8 18.5C2.7 16.7 2.1 14.9 2.1 13C2.1 6.9 7 2.1 13.1 2.1C16 2.1 18.7 3.3 20.7 5.3C22.7 7.3 23.9 10 23.9 12.9C24 19.1 19.1 23.5 13.1 23.5ZM19.1 15.7C18.7 15.5 17.1 14.7 16.8 14.6C16.4 14.5 16.2 14.4 15.9 14.8C15.7 15.2 15 15.9 14.8 16.1C14.6 16.4 14.4 16.4 14 16.2C13.6 16 12.6 15.6 11.4 14.6C10.5 13.8 9.9 12.8 9.7 12.4C9.5 12 9.7 11.8 9.9 11.6C10.1 11.4 10.3 11.2 10.4 11C10.6 10.8 10.6 10.6 10.7 10.4C10.8 10.2 10.8 10 10.6 9.8C10.5 9.6 9.9 8 9.6 7.2C9.3 6.5 9 6.5 8.8 6.5H8.1C7.9 6.5 7.5 6.6 7.1 7C6.8 7.4 5.9 8.2 5.9 9.8C5.9 11.4 7.1 12.9 7.3 13.2C7.5 13.4 9.9 17 13.4 18.4C14.1 18.7 14.7 18.9 15.1 19C15.8 19.2 16.5 19.2 17 19.1C17.6 19 18.9 18.4 19.2 17.6C19.5 16.9 19.5 16.2 19.4 16.1C19.3 15.9 19.1 15.8 19.1 15.7Z"
          fill="white"
        />
      </svg>
    </button>

    <!-- Sticky Buy Now Button -->
    <div
      class="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white px-[16px] py-[12px] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50"
    >
      <button class="w-full bg-[#5E00B9] text-white py-[12px] rounded-full text-[17px]">
        Buy Now
      </button>
    </div>
  </div>
</template>
