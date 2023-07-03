import { XIcon } from 'lucide-react'

interface NewsLetterModal {
  handleModal: (e: any) => void
}

export default function NewsLetterModal({ handleModal }: NewsLetterModal) {
  return (
    <div className="relative top-5 w-1/2 left-[25%] z-10 shadow-lg">
      <div className="bg-black flex justify-between py-3 text-white">
        <div className="flex gap-4">
          <img className="pl-3" src="" alt="" />
          <p>E-mail cadastrado com sucesso</p>
        </div>
        <XIcon onClick={handleModal} className="mr-4 opacity-50" />
      </div>
      <div>
        <p className="py-4 pl-3">Em breve você receberá novidades exclusivas da Meteora</p>
      </div>
    </div>
  )
}
