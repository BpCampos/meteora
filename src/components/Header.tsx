'use client'
export default function Header() {
  return (
    <div className="flex md:justify-between justify-center text-white bg-black h-[58px]">
      <div className="flex items-center gap-4 md:gap-10 md:text-xl text-sm">
        <img className="h-3/4 ml-4 w-[132px] hover:cursor-pointer" src="../../Desktop/Logo desktop.png" alt="" />
        <p>Home</p>
        <p>Nossas Lojas</p>
        <p>Novidades</p>
        <p>Promoções</p>
      </div>
      <div className="md:mr-7 mr-3 flex md:gap-4 gap-2 items-center justify-end flex-1 md:flex-none">
        <input
          className="h-[70%] w-[62%] md:w-2/3 pl-4 text-black outline-none"
          placeholder="Digite o produto"
          type="search"
          id="busca"
        />
        <label
          className="border border-white md:px-4 px-2 py-1 tracking-wider hover:cursor-pointer md:text-base text-sm"
          htmlFor="busca">
          Buscar
        </label>
      </div>
    </div>
  )
}
