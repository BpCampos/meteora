interface novidadeCardContent {
  image: string
  nome: string
  descricao: string
  preco: number
}

export default function Card({ image, nome, descricao, preco }: novidadeCardContent) {
  return (
    <div className="shadow-md w-[330px] md:w-[350px] h-[620px]">
      <img src={image} alt="" />
      <div className="text-sm w-[330px] md:w-[350px] px-3 flex flex-col gap-4">
        <p className="font-bold text-lg mt-3">{nome}</p>
        <p>{descricao}</p>
        <p className="font-bold text-lg">R$ {preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      </div>
      <div className="mx-3 mt-2 mb-3 py-1 px-4 bg-purple-600 w-fit text-white">
        <button>Ver mais</button>
      </div>
    </div>
  )
}
