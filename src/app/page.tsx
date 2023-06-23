import CarouselBanner from '@/components/Carousel'
import Facilidades from '@/components/Facilidades'
import NewsLetter from '@/components/NewsLetter'
import Categorias from '@/components/categorias/Categorias'
import Novidades from '@/components/produtosNovidades/Novidades'

export default function Home() {
  return (
    <div>
      <CarouselBanner />
      <Categorias />
      <Novidades />
      <Facilidades />
      <NewsLetter />
    </div>
  )
}
