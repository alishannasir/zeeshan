<template>
  <section class="relative h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden">
    <!-- Image Slider -->
    <div class="absolute inset-0 z-0">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
          dynamicBullets: true
        }"
        :navigation="true"
        :effect="'fade'"
        class="hero-swiper"
        @slide-change="onSlideChange"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="relative w-full h-full">
            <img 
              :src="slide.image" 
              :alt="slide.alt"
              class="w-full h-full object-cover"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center">
      <Transition name="fade" mode="out-in">
        <h1 :key="currentSlideIndex" class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          {{ currentSlide.title }}
        </h1>
      </Transition>
      <Transition name="fade" mode="out-in">
        <p :key="currentSlideIndex + 'subtitle'" class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
          {{ currentSlide.subtitle }}
        </p>
      </Transition>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
          {{ currentSlide.buttonText || 'Get Tickets' }}
        </button>
        <button class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { getPlaceholderImage } from '../../utils/images'

interface Slide {
  image: string
  alt: string
  title: string
  subtitle: string
  buttonText: string
}

const modules = [Navigation, Pagination, Autoplay, EffectFade]

const slides: Slide[] = [
  {
    image: getPlaceholderImage('graduation'),
    alt: 'Superior University Graduation Ceremony',
    title: '2026 SUPERIOR NIGHTS',
    subtitle: 'Feel the Beat',
    buttonText: 'Get Tickets'
  },
  {
    image: getPlaceholderImage('students'),
    alt: 'Students at Superior University',
    title: 'Excellence in Education',
    subtitle: 'Shaping Tomorrow\'s Leaders',
    buttonText: 'Explore Programs'
  },
  {
    image: getPlaceholderImage('campus'),
    alt: 'Superior University Campus',
    title: 'World-Class Facilities',
    subtitle: 'Your Journey Starts Here',
    buttonText: 'Visit Campus'
  },
  {
    image: getPlaceholderImage('classroom'),
    alt: 'Modern Classrooms at Superior University',
    title: 'Innovative Learning',
    subtitle: 'Experience the Future of Education',
    buttonText: 'Apply Now'
  },
  {
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80',
    alt: 'University Events and Activities',
    title: 'Join Our Community',
    subtitle: 'Be Part of Something Great',
    buttonText: 'Learn More'
  }
]

const currentSlideIndex = ref(0)

const currentSlide = computed((): Slide => {
  const index = currentSlideIndex.value
  if (index >= 0 && index < slides.length) {
    return slides[index] as Slide
  }
  return slides[0] as Slide
})

const onSlideChange = (swiper: SwiperType) => {
  currentSlideIndex.value = swiper.realIndex
}
</script>

<style scoped>
.hero-swiper {
  width: 100%;
  height: 100%;
}

/* Fade transition for text */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}



:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: rgba(255, 255, 255, 0.3);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  background-color: rgba(255, 255, 255, 0.5);
  width: 12px;
  height: 12px;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: white;
  width: 30px;
  border-radius: 6px;
}
</style>
