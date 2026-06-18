type CardProps = {
  title?: React.ReactNode
  description?: string
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="w-[350px] bg-zinc-900 text-white p-6 rounded-2xl shadow-lg border border-zinc-800">
      
      <h1 className="text-2xl font-bold mb-3">
        {title}
      </h1>

      <p className="text-zinc-400">
        {description}
      </p>

      <button className="mt-5 px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-300 transition">
        Learn More
      </button>

    </div>
  )
}

export default Card