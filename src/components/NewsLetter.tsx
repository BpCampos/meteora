export default function NewsLetter() {
  return (
    <div>
      <div className="md:w-1/2 w-3/4 border border-black mx-auto my-20 p-10">
        <h1 className="text-center">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra?
          <strong>Cadastre-se!</strong>
        </h1>
        <div className="flex justify-center mt-4">
          <input type="text" placeholder="Digite seu email" className="pl-3 border border-black w-2/3" />
          <button className="bg-purple-600 text-white py-1.5 px-4">Enviar</button>
        </div>
      </div>
    </div>
  )
}
