<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <SectionHeading 
        title="Find Programs Offered By Superior University"
        subtitle="Discover your passion and shape your future"
      />
      
      <div class="swiper-container">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="breakpoints"
          :navigation="true"
          :pagination="{ clickable: true }"
          class="program-swiper"
        >
          <swiper-slide v-for="program in programs" :key="program.id">
            <ProgramCard
              :title="program.title"
              :image="program.image"
              :category="program.category"
              :description="program.description"
              :department="program.department"
              :hashtag="program.hashtag"
            />
          </swiper-slide>
        </swiper>
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
import ProgramCard from '../cards/ProgramCard.vue'
import { swiperModules, defaultSwiperBreakpoints } from '../../composables/useSwiper'

const modules = swiperModules
const breakpoints = defaultSwiperBreakpoints

const programs = [
  {
    id: 1,
    title: 'BS Accounting & Finance',
    category: 'Finance',
    description: 'Comprehensive program covering financial accounting, auditing, and corporate finance.',
    department: 'Faculty of Management Sciences',
    hashtag: '#DiscoverYourPassion',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: 2,
    title: 'Bachelor in Civil Engineering',
    category: 'Engineering',
    description: 'Design and construct infrastructure projects that shape our world.',
    department: 'Faculty of Engineering',
    hashtag: '#BuildTheFuture',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
  },
  {
    id: 3,
    title: 'BBA (Business Administration)',
    category: 'Business',
    description: 'Develop leadership skills and business acumen for the corporate world.',
    department: 'Faculty of Management Sciences',
    hashtag: '#LeadWithPurpose',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  },
  {
    id: 4,
    title: 'MBBS (Medicine)',
    category: 'Medical',
    description: 'Pursue excellence in medical education and patient care.',
    department: 'Faculty of Medical and Dental College',
    hashtag: '#HealTheWorld',
    image: 'https://images.unsplash.com/photo-1559757148-5c0d1e30b1f3?w=800&q=80'
  },
  {
    id: 5,
    title: 'BS Computer Science',
    category: 'Computing',
    description: 'Master programming, algorithms, and cutting-edge technologies.',
    department: 'Faculty of Computing',
    hashtag: '#CodeTheFuture',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
  },
  {
    id: 6,
    title: 'BS Pharmacy',
    category: 'Pharmacy',
    description: 'Explore pharmaceutical sciences and drug development.',
    department: 'Faculty of Pharmacy',
    hashtag: '#InnovateForHealth',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80'
  }
]
</script>

