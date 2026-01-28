<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <SectionHeading 
        title="Latest News"
        subtitle="Stay updated with breakthrough research, student innovations, and campus events"
      />
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard
          v-for="item in newsItems"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :category="item.category"
          :excerpt="item.excerpt"
          :date="item.date"
          :author="item.author"
        />
      </div>
      
      <div class="text-center mt-12">
        <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          Browse All News
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'
import NewsCard from '../cards/NewsCard.vue'
import { news } from '../../data/news'
import { getPlaceholderImage } from '../../utils/images'

const newsImageTypes: Array<keyof typeof import('../../utils/images').placeholderImages> = [
  'graduation',
  'classroom',
  'students',
  'library',
  'campus',
  'business'
]

const newsItems = news.slice(0, 6).map((item, index) => ({
  ...item,
  image: getPlaceholderImage(newsImageTypes[index] || 'students')
}))
</script>
