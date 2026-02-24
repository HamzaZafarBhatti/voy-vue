<script setup lang="ts">
import { computed } from 'vue'
import IconCard from './icons/IconCard.vue'
import IconCardActive from './icons/IconCardActive.vue'
import IconShop from './icons/IconShop.vue'
import IconShopActive from './icons/IconShopActive.vue'
import IconSocial from './icons/IconSocial.vue'
import IconSocialActive from './icons/IconSocialActive.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentRouteName = computed(() => String(route.name))
</script>

<template>
  <footer id="footer" class="bg-[#2F1E40] fixed bottom-0 left-0 w-full z-10">
    <div class="container mx-auto py-0.5">
      <div class="flex justify-center items-center gap-10">
        <RouterLink to="/" class="flex flex-col items-center text-purple-600">
          <IconShopActive v-if="currentRouteName === 'home'" />
          <IconShop v-else />
        </RouterLink>
        <RouterLink
          to="/social"
          class="flex flex-col items-center text-gray-400 hover:text-purple-600 transition"
        >
          <IconSocialActive v-if="currentRouteName === 'social'" />
          <IconSocial v-else />
        </RouterLink>
        <RouterLink
          to="/wallet"
          class="flex flex-col items-center text-gray-400 hover:text-purple-600 transition"
        >
          <IconCardActive v-if="currentRouteName === 'wallet'" />
          <IconCard v-else />
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
