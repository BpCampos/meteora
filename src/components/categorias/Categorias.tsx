import Card from './Card'

export default function Categorias() {
  return (
    <div className="mt-16 max-w-[690px] md:max-w-[1110px] mx-auto">
      <h1 className="text-center text-3xl font-semibold mb-8">Busque por categoria:</h1>
      <div className="gap-6 text-center justify-center flex flex-wrap max-md:grid max-md:grid-cols-3 max-md:place-content-center max-sm:grid-cols-2 max-sm:mx-2">
        <Card name="Camisetas" imageSrc="../../../Desktop/Categorias/Categoria camiseta.png" />
        <Card name="Bolsas" imageSrc="../../../Desktop/Categorias/Categoria Bolsa.png" />
        <Card name="Calçados" imageSrc="../../../Desktop/Categorias/Categoria Calçados.png" />
        <Card name="Calças" imageSrc="../../../Desktop/Categorias/Categoria calça.png" />
        <Card name="Casacos" imageSrc="../../../Desktop/Categorias/Categoria casacos.png" />
        <Card name="Óculos" imageSrc="../../../Desktop/Categorias/Categoria óculos.png" />
      </div>
    </div>
  )
}
