<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <SectionHeading 
        title="Showcasing Innovation @ Superior"
        subtitle="Groundbreaking research and innovations shaping the future"
      />
      
      <div class="swiper-container">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="breakpoints"
          :navigation="true"
          :pagination="{ clickable: true }"
          class="innovation-swiper"
        >
          <swiper-slide v-for="innovation in innovations" :key="innovation.id">
            <InnovationCard
              :title="innovation.title"
              :image="innovation.image"
              :description="innovation.description"
              :date="innovation.date"
            />
          </swiper-slide>
        </swiper>
      </div>
      
      <div class="text-center mt-8">
        <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          View More Innovations
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../styles/swiper.css'
import SectionHeading from '../ui/SectionHeading.vue'
import InnovationCard from '../cards/InnovationCard.vue'
import { swiperModules, compactSwiperBreakpoints } from '../../composables/useSwiper'

const modules = swiperModules
const breakpoints = compactSwiperBreakpoints

const innovations = [
  {
    id: 1,
    title: 'AI Breakthrough in Early Lung Cancer Detection | LungNet-SVM Saves Lives',
    description: 'Revolutionary AI system developed by our researchers can detect early-stage lung cancer with unprecedented accuracy, potentially saving thousands of lives through early diagnosis.',
    date: '10/01/2024',
    image: 'https://images.unsplash.com/photo-1559757148-5c0d1e30b1f3?w=800&q=80'
  },
  {
    id: 2,
    title: 'Early Alzheimer\'s Detection with AI & Quantum Computing - A Breakthrough in NeuroTech',
    description: 'Combining artificial intelligence with quantum computing to identify early signs of Alzheimer\'s disease, enabling earlier treatment and better patient outcomes.',
    date: '10/01/2024',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80'
  },
  {
    id: 3,
    title: 'AI Detects Hate Speech with 96% Accuracy - Breakthrough Social Media Safety',
    description: 'Advanced AI system that can detect and filter hate speech on social media platforms with 96% accuracy, creating safer online environments for users worldwide.',
    date: '10/01/2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
  },
  {
    id: 4,
    title: 'Early Arthritis Detection with Quantum AI',
    description: 'Cutting-edge research combining quantum computing and AI to detect arthritis in its earliest stages, revolutionizing treatment approaches.',
    date: '15/01/2024',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80'
  }
]
</script>

