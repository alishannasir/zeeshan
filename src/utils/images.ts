export const placeholderImages = {
  students: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  graduation: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  classroom: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  library: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
  campus: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  business: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  medical: 'https://images.unsplash.com/photo-1559757148-5c0d1e30b1f3?w=800&q=80',
  engineering: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  pharmacy: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
  finance: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  research: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80',
  technology: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
}

export const getPlaceholderImage = (type: keyof typeof placeholderImages = 'students'): string => {
  return placeholderImages[type] || placeholderImages.students
}
