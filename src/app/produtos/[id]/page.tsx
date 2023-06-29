'use client'
import produtos from '@/json/produtos.json'
import { useEffect } from 'react'

type Params = {
  params: {
    id: string
  }
}

export default function productPage({ params: { id } }: Params) {
  const produtoSelecionado = produtos.filter((produto) => {
    return produto.id === id
  })

  return (
    <div>
      {produtoSelecionado.map((produto) => {
        return <div></div>
      })}
    </div>
  )
}
