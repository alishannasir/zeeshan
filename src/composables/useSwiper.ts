import { Navigation, Pagination } from 'swiper/modules'

export const swiperModules = [Navigation, Pagination]

export const defaultSwiperBreakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 30
  }
}

export const compactSwiperBreakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}
