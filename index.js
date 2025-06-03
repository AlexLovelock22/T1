import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

const emblaNode = document.querySelector('.embla')
const options = { loop: true }
const plugins = [Autoplay({ delay: 160000, stopOnInteraction: true })]

const emblaApi = EmblaCarousel(emblaNode, options, plugins)

