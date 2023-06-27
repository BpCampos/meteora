'use client'
import { useState } from 'react'
import { XIcon } from 'lucide-react'

export default function Header() {
  const [headerModal, setHeaderModal] = useState(false)

  function changeModal() {
    if (headerModal) {
      setHeaderModal(false)
    } else {
      setHeaderModal(true)
    }
  }

  return (
    <div className="relative flex md:justify-between justify-center text-white bg-black md:h-[58px] max-sm:flex-col sm:h-[58px] max-sm:bg-transparent">
      <div className="flex max-sm:bg-black max-sm:justify-between max-sm:py-2">
        <div className="flex items-center gap-4 md:gap-10 md:text-xl text-sm">
          <img
            className="h-3/4 ml-4 max-sm:ml-2 max-sm:h-[40px] w-[132px] hover:cursor-pointer"
            src="../../Desktop/Logo desktop.png"
            alt=""
          />
          <div className="flex items-center gap-4 md:gap-10 md:text-xl text-sm max-sm:hidden">
            <p>Home</p>
            <p>Nossas Lojas</p>
            <p>Novidades</p>
            <p>Promoções</p>
          </div>
        </div>
        <div
          className={`md:hidden sm:hidden flex flex-col gap-1.5 justify-center max-sm:mr-4 ${
            headerModal ? 'hidden' : ''
          }`}
          onClick={changeModal}>
          <div className="w-[30px] py-0.5 bg-lime-300"></div>
          <div className="w-[30px] py-0.5 bg-lime-300"></div>
          <div className="w-[30px] py-0.5 bg-lime-300"></div>
        </div>
        {headerModal && (
          <div>
            <div
              className={`absolute flex flex-col justify-between top-0 right-0 items-center bg-gray-700 w-[40%] text-start py-5 px-5 z-50 animate-show`}>
              <XIcon color="#DAFF01" className="absolute top-2 right-2" onClick={changeModal} />
              <p className="text-lime-300 border-b w-full py-2">Home</p>
              <p className="text-white border-b w-full py-2">Nossas lojas</p>
              <p className="text-white border-b w-full py-2">Novidades</p>
              <p className="text-white w-full py-2">Promoções</p>
            </div>
          </div>
        )}
      </div>
      <div className="md:mr-7 mr-3 flex md:gap-4 gap-2 items-center justify-end flex-1 md:flex-none max-sm:justify-center max-sm:py-3">
        <input
          className="h-[70%] w-[62%] md:w-2/3 pl-4 text-black outline-none max-sm:border max-sm:border-black max-sm:py-3"
          placeholder="Digite o produto"
          type="search"
          id="busca"
        />
        <label
          className="border border-white md:px-4 px-2 py-1 tracking-wider hover:cursor-pointer md:text-base text-sm max-sm:border max-sm:py-3 max-sm:border-black max-sm:text-black"
          htmlFor="busca">
          Buscar
        </label>
      </div>
    </div>
  )
}
