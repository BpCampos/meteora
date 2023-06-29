'use client'
import { XIcon } from 'lucide-react'
import produtos from '@/json/produtos.json'
interface modalProps {
  isOpen: boolean
  openModal: () => void
  productId: string
}

export default function Modal({ isOpen, openModal, productId }: modalProps) {
  const produtoFiltrado = produtos.filter((produto) => {
    return productId === produto.id
  })

  if (!isOpen) {
    return null
  }

  return (
    <div className="absolute w-full inset-0 bg-neutral-700/0 z-10 flex items-center">
      <div className={`w-1/2 bg-white mx-auto duration-300 translate${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-black text-white flex  justify-between py-2 text-xl">
          <div className="flex gap-6 items-center">
            <img src="../../Desktop/productModalIcon.svg" alt="" className="ml-4" />
            <p>Confira detalhes sobre o produto</p>
          </div>
          <p className="mr-3 hover:cursor-pointer flex items-center" onClick={openModal}>
            <XIcon />
          </p>
        </div>
        {produtoFiltrado.map((produto) => {
          return (
            <div className="flex">
              <section>
                <div className="p-3">
                  <img src={produto.image} alt="" />
                </div>
              </section>
              <section className="p-2 w-[50%]">
                <div>
                  <div className="border-b-2 border-gray-600 mb-5">
                    <p className="mb-3 font-bold">{produto.nome}</p>
                    <p className="w-[85%] mb-6">{produto.descricao}</p>
                  </div>
                  <div className="border-b-2 border-gray-600/30 mb-3">
                    <p className="mb-5 font-bold text-2xl">
                      R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    <p className="mb-3 opacity-40">Vendido e entregado por Riachuelo</p>
                  </div>
                </div>
                <div className="border-b-2 border-gray-600/30">
                  <p className="mb-4 font-bold">Cores:</p>
                  <div className="flex gap-6 w-full">
                    <div className="flex flex-col mb-3">
                      <input type="radio" name="colorRadio" id="Azul" />
                      <label htmlFor="Azul">Azul</label>
                    </div>
                    <div className="flex flex-col">
                      <input type="radio" name="colorRadio" id="Offwhite" />
                      <label htmlFor="Offwhite">Offwhite</label>
                    </div>
                    <div className="flex flex-col">
                      <input type="radio" name="colorRadio" id="Preto" className="bg-" />
                      <label htmlFor="Preto">Preto</label>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-4 mt-4 font-bold">Tamanho:</p>
                  <div className="flex gap-6 w-full">
                    <div className="flex flex-col">
                      <input type="radio" name="sizeModal" id="P" />
                      <label htmlFor="P">P</label>
                    </div>
                    <div className="flex flex-col">
                      <input type="radio" name="sizeModal" id="PP" />
                      <label htmlFor="PP">PP</label>
                    </div>
                    <div className="flex flex-col">
                      <input type="radio" name="sizeModal" id="M" />
                      <label htmlFor="M">M</label>
                    </div>
                    <div className="flex flex-col">
                      <input type="radio" name="sizeModal" id="G" />
                      <label htmlFor="G">G</label>
                    </div>
                    <div className="flex flex-col">
                      <input type="radio" name="sizeModal" id="GG" />
                      <label htmlFor="GG">GG</label>
                    </div>
                  </div>
                </div>
                <button className="bg-purple-600 py-2 px-4 text-white mt-4 mb-5 ">Adicionar à sacola</button>
              </section>
            </div>
          )
        })}
      </div>
    </div>
  )
}
