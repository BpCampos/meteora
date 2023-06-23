import Card from './Card'
import produtos from '@/json/produtos.json'

export default function Novidades() {
  return (
    <div className="mt-14">
      <h1 className="text-center mb-8 text-3xl font-semibold">Produtos que estão bombando!</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center max-w-[690px] md:max-w-[1110px] mx-auto gap-y-6">
        {produtos.map((produto) => {
          return <Card image={produto.image} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} />
        })}
      </div>
    </div>
  )
}
