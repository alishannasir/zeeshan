<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    
    <main class="flex-1">
      <slot />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/sections/NavBar.vue'
import Footer from '../components/sections/Footer.vue'
</script>
