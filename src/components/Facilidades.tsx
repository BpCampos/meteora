export default function Facilidades() {
  return (
    <div className="bg-black pb-9 mt-[100px]">
      <h1 className="text-white text-center py-10 text-3xl">Conheça todas as nossas facilidades</h1>
      <div className="text-white flex-col justify-between md:gap-4 md:flex md:flex-row md:justify-center md:w-full w-1/2 mx-auto">
        <div className="flex gap-6 mb-10">
          <img src="../../Desktop/Ícones/x-diamond (2).png" alt="icone diamond" />
          <div className="w-[50%]">
            <p className="text-lime-300 mb-3 font-bold">PAGUE PELO PIX</p>
            <p className="text-sm">Ganhe 5% OFF em pagamentos via PIX</p>
          </div>
        </div>
        <div className="flex gap-6 mb-10">
          <img src="../../Desktop/Ícones/arrow-repeat (2).png" alt="icone arrow" />
          <div className="w-[60%]">
            <p className="text-lime-300 mb-3 font-bold">TROCA GRATIS</p>
            <p className="text-sm">Fique livre para trocar em até 30 dias.</p>
          </div>
        </div>
        <div className="flex gap-6 mb-5">
          <img src="../../Desktop/Ícones/flower1 (3).png" alt="icone flower" />
          <div className="w-[60%]">
            <p className="text-lime-300 mb-3 font-bold">SUSTENTABILIDADE</p>
            <p className="text-sm">Moda responsável, que respeita o meio ambiente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
