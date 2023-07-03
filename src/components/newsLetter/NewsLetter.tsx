'use client'
import { useState } from 'react'
import NewsLetterModal from './NewsLetterModal'

export default function NewsLetter() {
  const [newsLetterModal, setNewsLetterModal] = useState(false)

  function handleModal(event: any) {
    event.preventDefault()

    if (newsLetterModal) {
      setNewsLetterModal(false)
    } else {
      setNewsLetterModal(true)
    }
  }

  return (
    <div>
      {newsLetterModal && <NewsLetterModal handleModal={(e) => handleModal(e)} />}
      <div className="md:w-1/2 w-3/4 border border-black mx-auto my-20 p-10 max-sm:p-4 max-sm:w-[88%]">
        <h1 className="text-center text-2xl max-sm:text-lg">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra?
          <strong className="text-lg"> Cadastre-se!</strong>
        </h1>
        <form className="flex justify-center mt-4 w-full" onSubmit={handleModal}>
          <input type="text" placeholder="Digite seu email" className="pl-3 border border-black w-2/3" required />
          <button className="bg-purple-600 text-white py-1.5 px-4">Enviar</button>
        </form>
      </div>
    </div>
  )
}
