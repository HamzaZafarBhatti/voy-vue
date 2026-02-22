<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import HeroShop from '@/components/HeroShop.vue'
import IconVoyPay from '@/components/icons/IconVoyPay.vue'
import Wallet from '@/components/wallet/Wallet.vue'

const wallets = [
  {
    name: 'Engagement',
    image: new URL('../assets/img/coinbox.svg', import.meta.url).href,
    alt: 'Coinbox',
    imageClass: 'w-[90px] h-[52px]',
    className: 'shadow-engagement bg-[#014923]',
  },
  {
    name: 'Visibility',
    image: new URL('../assets/img/paydaily.svg', import.meta.url).href,
    alt: 'Paydaily',
    imageClass: 'w-[86px] h-[52px]',
    className: 'shadow-visibility bg-[#FF5F17]',
  },
  {
    name: 'Shopping',
    image: new URL('../assets/img/shoppay.svg', import.meta.url).href,
    alt: 'Shoppay',
    imageClass: 'w-[90px] h-[62px]',
    className: 'shadow-shopping bg-[#3A185A]',
  },
  {
    name: 'Redemption',
    image: new URL('../assets/img/starbox-2.svg', import.meta.url).href,
    alt: 'Starbox',
    imageClass: 'w-[74px] h-[72px]',
    className: 'shadow-redemption bg-[#0F294E]',
  },
]
</script>

<template>
  <main>
    <HeroShop
      heroIcon_mb="mb-[32px]"
      :heroIcon="IconVoyPay"
      heroText="All your payments in one place"
    />

    <div class="w-full max-w-6xl mx-auto mt-[31px]">
      <div class="flex items-center justify-between mb-[15px]">
        <h2 class="text-[15px] font-gotham-pro font-bold leading-[100%] text-white">
          Select Wallet to view
        </h2>
        <span class="text-[#FBA7FD] text-[13px] font-medium">Active</span>
      </div>
      <div class="rounded-[30px] px-[41.7px] py-[36.2px] bg-[#320D56] feature-card-shadow">
        <div class="grid grid-cols-2 gap-4">
          <Wallet
            v-for="(wallet, index) in wallets"
            :key="index"
            :name="wallet.name"
            :image="wallet.image"
            :className="wallet.className"
            :alt="wallet.alt"
            :imageClass="wallet.imageClass"
          />
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>
