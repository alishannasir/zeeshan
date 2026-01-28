<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Simple Grid Layout -->
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- About -->
        <div>
          <h4 class="text-lg font-semibold mb-4 text-white">About</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Superior University</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Research</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Rankings</a></li>
          </ul>
        </div>
        
        <!-- For Students -->
        <div>
          <h4 class="text-lg font-semibold mb-4 text-white">For Students</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Admissions</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Programs</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Scholarships</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Alumni</a></li>
          </ul>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Campus</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Library</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-800 pt-6 text-center">
        <p class="text-gray-400 text-sm">&copy; {{ currentYear }} Superior University. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
