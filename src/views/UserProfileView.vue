<script setup lang="ts">
import ShopPostGrid from '@/components/userProfile/ShopPostGrid.vue';
import SocialPostGrid from '@/components/userProfile/SocialPostGrid.vue';
import { ref } from 'vue'
const activeTab = ref(1)
</script>
<template>
  <main>
    <div class="w-full max-w-6xl mx-auto mt-[8px] hero-sec">
      <div class="rounded-ss-[35px] rounded-se-[35px] border-top-gradient">
        <div
          class="pt-[26px] pr-[10px] pb-[7px] pl-[17px] h-full w-full rounded-ss-[35px] rounded-se-[35px] pr-0 overflow-hidden hero-bg"
        >
          <div class="flex w-full gap-[17px]">
            <div class="relative">
              <div class="w-[94px] h-[94px]">
                <div
                  class="border-2 border-[#FA64EB] block rounded-full user-status h-full relative"
                >
                  <img
                    src="../assets/img/pexels-photo-5935258 11.svg"
                    class="w-full h-full rounded-full object-cover m-auto border-[3.5px] border-transparent"
                  />
                </div>
              </div>
              <div class="relative mt-[-15px] ml-[6px]">
                <img
                  src="../assets/img/verified-badge.svg"
                  class="w-[78px] h-[34px] rounded-full"
                />
              </div>
            </div>
            <div class="flex-1">
              <div class="flex justify-end pr-[11px]">
                <svg
                  width="56"
                  height="17"
                  viewBox="0 0 56 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9401 0C24.1581 0 20.2812 3.80581 20.2812 8.5C20.2812 13.1942 24.1581 17 28.9401 17C33.7221 17 37.599 13.1942 37.599 8.5C37.599 3.80581 33.7221 0 28.9401 0ZM28.9401 14.8204C26.5664 14.8204 24.6417 12.9311 24.6417 10.6009C24.6417 8.59223 26.0717 6.91312 27.9854 6.48724C27.1688 6.12781 26.5982 5.32488 26.5982 4.38902C26.5982 3.11952 27.6469 2.09008 28.9401 2.09008C30.2333 2.09008 31.282 3.11952 31.282 4.38902C31.282 5.32488 30.7114 6.12781 29.8948 6.48724C31.8098 6.91312 33.2385 8.59223 33.2385 10.6009C33.2385 12.9311 31.3138 14.8204 28.9401 14.8204Z"
                    fill="white"
                  />
                  <path
                    d="M49.288 0.195309L46.3934 4.21813C46.2137 4.48396 45.8131 4.48939 45.6431 4.21813L42.9806 0.207516C42.8991 0.078666 42.7554 0 42.6007 0H35.416C35.065 0 34.8523 0.379767 35.0388 0.671374L41.1983 10.2524C41.2922 10.3975 41.2895 10.5833 41.1941 10.7257L37.4415 16.3218C37.2467 16.6121 37.4595 17 37.8132 17H44.4438C44.5917 17 44.7298 16.9281 44.8127 16.8074L55.9227 0.682224C56.1231 0.391974 55.9103 0 55.5538 0H49.6596C49.5104 0 49.3709 0.0732408 49.2893 0.195309H49.288Z"
                    fill="white"
                  />
                  <path
                    d="M13.5815 0.24278L11.4081 4.21813C11.2423 4.54771 10.7601 4.55314 10.604 4.21813L8.59643 0.254986C8.5232 0.100367 8.36569 0 8.1916 0H0.44595C0.119876 0 -0.0956651 0.332296 0.042502 0.622547L7.73288 16.7477C7.80611 16.901 7.96362 17 8.13633 17H13.7791C13.9518 17 14.1093 16.9023 14.1825 16.7477L21.8743 0.622547C22.0125 0.332296 21.7969 0 21.4708 0H13.9808C13.8109 0 13.6561 0.0949418 13.5815 0.24278Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="mb-[15px] relative top-[-3px]">
                <h3
                  class="font-semibold text-xs leading-[100%] auth-name text-white leading-[18px] pb-[6px]"
                >
                  Jess Baker
                </h3>
                <p class="text-[9px] font-medium leading-none text-white leading-[14px]"
                  >@jess_baker</p
                >
              </div>
              <div class="social flex justify-between">
                <div class="flex flex-col flex- gap-[5px] items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2821 13.2346L9.99655 14.0917L6.90275 16.5364C6.24705 17.0546 5.28275 16.5876 5.28275 15.7518L5.28275 13.2346"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.28517 13.0964H4C2.34315 13.0964 1 11.7533 1 10.0964V4C1 2.34315 2.34315 1 4 1H13.9978C15.6547 1 16.9978 2.34315 16.9978 4V10.1677C16.9978 11.7965 15.6983 13.1277 14.07 13.1669L11.2844 13.2339"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <line
                      x1="5.76648"
                      y1="5.64478"
                      x2="12.2359"
                      y2="5.64478"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <line
                      x1="5.76648"
                      y1="9.40771"
                      x2="10.3538"
                      y2="9.40771"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <button
                    class="bg-[#0865FE] font-bold text-[11.6px] rounded-[3px] text-white px-[4.38px] py-[1.2px] leading-none"
                  >
                    Chat
                  </button>
                </div>
                <div class="flex justify-center flex-col flex- gap-[5px] items-center">
                  <h4 class=" font-bold text-[17.6px] text-white leading-none">100</h4>
                  <p class=" font-bold text-[11.6px] text-white">Followers</p>
                </div>

                <div class="flex justify-center flex-col flex- gap-[5px] items-center">
                  <button
                    class="bg-[#9450D3]  font-bold text-[10.83px] rounded-full text-white px-[6px] w-[86px] h-[24px]"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Tab Icons -->
          <div
            class="flex justify-around items-center relative mt-2 max-w-[161px] mx-auto pb-[9px] border-b-[1.2px] border-white"
          >
            <button
              class="tab-btn text-3xl"
              :class="activeTab === 1 ? 'text-pink-400' : 'text-white'"
              @click="activeTab = 1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.9"
                  y="0.9"
                  width="18.2"
                  height="18.2"
                  rx="3.1"
                  fill="#FF51EE"
                  stroke="#522685"
                  stroke-width="1.8"
                />
                <rect width="14" height="14" transform="translate(3 3)" fill="#FF51EE" />
                <path d="M3 4C3 3.44772 3.44772 3 4 3H7V7H3V4Z" fill="#522685" />
                <rect x="8" y="3" width="4" height="4" fill="#522685" />
                <path d="M13 3H16C16.5523 3 17 3.44772 17 4V7H13V3Z" fill="#522685" />
                <rect x="3" y="8" width="4" height="4" fill="#522685" />
                <path d="M8 8H12V12H8V8Z" fill="#522685" />
                <path d="M13 8H17V12H13V8Z" fill="#522685" />
                <path d="M3 13H7V17H4C3.44772 17 3 16.5523 3 16V13Z" fill="#522685" />
                <rect x="8" y="13" width="4" height="4" fill="#522685" />
                <path d="M13 13H17V16C17 16.5523 16.5523 17 16 17H13V13Z" fill="#522685" />
              </svg>
            </button>

            <button
              class="tab-btn text-3xl"
              :class="activeTab === 2 ? 'text-pink-400' : 'text-white'"
              @click="activeTab = 2"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.62708 9.2168V12.9019C2.62708 16.587 4.20208 18.0643 8.13082 18.0643H12.8471C16.7758 18.0643 18.3508 16.587 18.3508 12.9019V9.2168"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5038 9.85065C12.1051 9.85065 13.2863 8.62776 13.1288 7.12581L12.5513 1.64331H8.46509L7.87884 7.12581C7.72134 8.62776 8.90259 9.85065 10.5038 9.85065Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.0176 9.85065C17.7851 9.85065 19.0801 8.50465 18.9051 6.85497L18.6601 4.59795C18.3451 2.46404 17.4701 1.64331 15.1776 1.64331H12.5089L13.1213 7.39665C13.2701 8.75087 14.5738 9.85065 16.0176 9.85065Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.93136 9.85065C6.37511 9.85065 7.67886 8.75087 7.81886 7.39665L8.01136 5.58283L8.43136 1.64331H5.76261C3.47011 1.64331 2.59511 2.46404 2.28011 4.59795L2.04386 6.85497C1.86886 8.50465 3.16386 9.85065 4.93136 9.85065Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4974 13.9517C9.03619 13.9517 8.30994 14.6329 8.30994 16.0035V18.0553H12.6849V16.0035C12.6849 14.6329 11.9587 13.9517 10.4974 13.9517Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Pink underline -->
            <div
              class="absolute bottom-[-1.3px] w-1/2 h-[2px] bg-[#FF51EE] transition-all duration-300 rounded-full"
              :class="activeTab === 1 ? 'left-0' : 'left-1/2'"
            ></div>
          </div>
        </div>
      </div>

      <!-- Tab 1 Content Social -->
      <div id="content1" class="mt-2.5" v-if="activeTab === 1">
       <SocialPostGrid />
      </div>

      <!-- Tab 2 Content shop -->
      <div id="content2" class="mt-2.5" v-if="activeTab === 2">
         <ShopPostGrid />
      </div>
    </div>
  </main>
</template>

