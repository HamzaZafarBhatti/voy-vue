<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue'

const route = useRoute()

const routeName = computed(() => String(route.name))
</script>

<template>
  <Header :routeName="routeName" />
  <RouterView />
</template>

<style scoped></style>
