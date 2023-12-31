export default function Facilidades() {
  return (
    <div className="bg-black pb-9 mt-[100px]">
      <h1 className="text-white text-center py-10 text-3xl max-sm:text-2xl">Conheça todas as nossas facilidades</h1>
      <div className="text-white flex-col flex items-center max-sm:pl-8 md:gap-4 ml-10 max-sm:ml-0 md:flex md:flex-row md:justify-center md:w-max md:mx-auto md:items-center max-sm:w-[360px]">
        <div className="flex items-center md:justify-center md:mb-0 gap-6 mb-10 max-sm:w-full max-md:w-[400px] w-[350px]">
          <img
            src="../../Desktop/Ícones/x-diamond (2).png"
            alt="icone diamond"
            className="max-sm:w-[56px] max-sm:h-[56px]"
          />
          <div className="w-[50%]">
            <p className="text-lime-300 mb-3 font-bold">PAGUE PELO PIX</p>
            <p className="text-sm">Ganhe 5% OFF em pagamentos via PIX</p>
          </div>
        </div>
        <div className="flex items-center md:justify-center md:mb-0 gap-6 mb-10 max-sm:w-full max-md:w-[400px] w-[350px]">
          <img
            src="../../Desktop/Ícones/arrow-repeat (2).png"
            alt="icone arrow"
            className="max-sm:w-[56px] max-sm:h-[56px]"
          />
          <div className="w-[60%]">
            <p className="text-lime-300 mb-3 font-bold">TROCA GRATIS</p>
            <p className="text-sm">Fique livre para trocar em até 30 dias.</p>
          </div>
        </div>
        <div className="flex items-center md:justify-center md:mb-0 gap-6 mb-5 max-sm:w-full max-md:w-[400px] w-[350px]">
          <img
            src="../../Desktop/Ícones/flower1 (3).png"
            alt="icone flower"
            className="max-sm:w-[56px] max-sm:h-[56px]"
          />
          <div className="w-[50%] max-md:w-[60%] max-sm:w-[58%]">
            <p className="text-lime-300 mb-3 font-bold">SUSTENTABILIDADE</p>
            <p className="text-sm">Moda responsável, que respeita o meio ambiente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
