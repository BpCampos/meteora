interface modalProps {
  isOpen: boolean
  openModal: () => void
}

export default function Modal({ isOpen, openModal }: modalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="absolute w-full inset-0 bg-neutral-700/0 z-10 flex items-center">
      <div className="w-1/2 bg-white mx-auto">
        <div className="bg-black text-white flex  justify-between py-2 text-xl">
          <div className="flex gap-6">
            <img src="" alt="" />
            <p>Confira detalhes sobre o produto</p>
          </div>
          <p className="mr-3 hover:cursor-pointer" onClick={openModal}>
            X
          </p>
        </div>
        <div className="flex">
          <section>
            <div className="p-3">
              <img src="../../Desktop/Imagens Cards/Jaqueta.png" alt="" />
            </div>
          </section>
          <section className="p-2 w-[50%]">
            <div>
              <div className="border-b-2 border-gray-600 mb-5">
                <p className="mb-3 font-bold">Jaqueta Jeans</p>
                <p className="w-[70%] mb-6">Modelo Unissex oversized com gola de camurça. Atemporal e autêntica!</p>
              </div>
              <div className="border-b-2 border-gray-600/30 mb-3">
                <p className="mb-5 font-bold text-2xl">R$ 150,00</p>
                <p className="mb-3 opacity-40">Vendido e entregado por Riachuelo</p>
              </div>
            </div>
            <div className="border-b-2 border-gray-600/30">
              <p className="mb-4 font-bold">Cores:</p>
              <div className="flex gap-6 w-full">
                <div className="flex flex-col mb-3">
                  <input type="radio" id="Azul" />
                  <label htmlFor="Azul">Azul</label>
                </div>
                <div className="flex flex-col">
                  <input type="radio" id="Offwhite" />
                  <label htmlFor="Offwhite">Offwhite</label>
                </div>
                <div className="flex flex-col">
                  <input type="radio" id="Preto" />
                  <label htmlFor="Preto">Preto</label>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 mt-4 font-bold">Tamanho:</p>
              <div className="flex gap-6 w-full">
                <div className="flex flex-col">
                  <input type="radio" name="" id="P" />
                  <label htmlFor="P">P</label>
                </div>
                <div className="flex flex-col">
                  <input type="radio" name="" id="PP" />
                  <label htmlFor="PP">PP</label>
                </div>
                <div className="flex flex-col">
                  <input type="radio" name="" id="M" />
                  <label htmlFor="M">M</label>
                </div>
                <div className="flex flex-col">
                  <input type="radio" name="" id="G" />
                  <label htmlFor="G">G</label>
                </div>
                <div className="flex flex-col">
                  <input type="radio" name="" id="GG" />
                  <label htmlFor="GG">GG</label>
                </div>
              </div>
            </div>
            <button className="bg-purple-600 py-2 px-4 text-white mt-4 mb-5 ">Adicionar à sacola</button>
          </section>
        </div>
      </div>
    </div>
  )
}
