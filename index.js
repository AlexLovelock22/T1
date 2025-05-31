import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

const emblaNode = document.querySelector('.embla')
const options = { loop: true }
const plugins = [Autoplay({ delay: 3000, stopOnInteraction: false })]

const emblaApi = EmblaCarousel(emblaNode, options, plugins)

