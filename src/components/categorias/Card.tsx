interface CardContent {
  name: string
  imageSrc: string
}

export default function Card({ name, imageSrc }: CardContent) {
  return (
    <div>
      <div>
        <img className="w-full" src={imageSrc} alt="" />
      </div>
      <div className="bg-black py-2 hover:cursor-pointer">
        <p className="text-white">{name}</p>
      </div>
    </div>
  )
}
