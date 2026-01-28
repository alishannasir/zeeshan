<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="swiper-container">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :autoplay="{
            delay: 6000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true
          }"
          :navigation="true"
          class="scholarship-swiper"
        >
          <swiper-slide v-for="(scholarship, index) in scholarships" :key="index">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Left: Text Content -->
              <div class="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-lg p-8 md:p-12 text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ scholarship.title }}</h2>
                <p class="text-lg mb-4" v-for="(paragraph, pIndex) in scholarship.paragraphs" :key="pIndex">
                  {{ paragraph }}
                </p>
                <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 mt-6">
                  Learn More
                  <ArrowIcon size="20" class="text-white" />
                </button>
              </div>
              
              <!-- Right: Image -->
              <div class="relative rounded-lg overflow-hidden shadow-xl h-[400px] md:h-[500px]">
                <img 
                  :src="scholarship.image" 
                  :alt="scholarship.alt"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../styles/swiper.css'
import ArrowIcon from '../ui/ArrowIcon.vue'
import { getPlaceholderImage } from '../../utils/images'

const modules = [Navigation, Pagination, Autoplay]

const scholarships = [
  {
    title: 'Scholarships',
    paragraphs: [
      'At Superior University, we believe that financial constraints should never be a barrier to quality education. We offer a wide range of scholarships to support deserving students in achieving their academic dreams.',
      'Our scholarship programs include merit-based awards, need-based financial aid, and special scholarships for outstanding achievements in academics, sports, and community service.'
    ],
    image: getPlaceholderImage('graduation'),
    alt: 'Students celebrating graduation'
  },
  {
    title: 'Merit-Based Scholarships',
    paragraphs: [
      'Recognize and reward academic excellence with our comprehensive merit-based scholarship program. High-achieving students can receive up to 100% tuition coverage based on their academic performance.',
      'These scholarships are automatically considered during the admission process and are renewable based on maintaining excellent academic standing.'
    ],
    image: getPlaceholderImage('students'),
    alt: 'Academic excellence at Superior University'
  },
  {
    title: 'Need-Based Financial Aid',
    paragraphs: [
      'We understand that financial circumstances should not limit educational opportunities. Our need-based financial aid program provides support to students from diverse economic backgrounds.',
      'Our dedicated financial aid office works with students and families to create personalized financial assistance packages that make education accessible.'
    ],
    image: getPlaceholderImage('campus'),
    alt: 'Supporting students through financial aid'
  },
  {
    title: 'Special Achievement Scholarships',
    paragraphs: [
      'Celebrate excellence beyond academics with our special achievement scholarships. We recognize outstanding contributions in sports, arts, community service, and leadership.',
      'These scholarships honor students who demonstrate exceptional talent, dedication, and impact in their chosen fields, contributing to our vibrant campus community.'
    ],
    image: getPlaceholderImage('classroom'),
    alt: 'Celebrating student achievements'
  }
]
</script>

<style scoped>
.scholarship-swiper {
  padding-bottom: 50px;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: white;
  color: #7e22ce;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  background-color: #d1d5db;
  width: 12px;
  height: 12px;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #9333ea;
  width: 30px;
  border-radius: 6px;
}
</style>
