'use client'
import { useState } from 'react'
import Card from './Card'
import produtos from '@/json/produtos.json'
import Modal from './Modal'

export default function Novidades() {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <div className="mt-14 relative">
      {isOpen && <Modal isOpen={isOpen} openModal={openModal} />}
      <h1 className="text-center mb-8 text-3xl font-semibold">Produtos que estão bombando!</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center max-w-[690px] md:max-w-[1110px] mx-auto gap-y-6 max-sm:grid-cols-1">
        {produtos.map((produto) => {
          return (
            <Card
              key={produto.nome}
              image={produto.image}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              openModal={openModal}
            />
          )
        })}
      </div>
    </div>
  )
}
