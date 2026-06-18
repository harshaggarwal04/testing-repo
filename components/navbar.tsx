import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-zinc-900 text-white">
      
      <h1 className="text-2xl font-bold">
        Logo
      </h1>

      <ul className="flex items-center gap-6">
        <li>
          <Link href="/" className="hover:text-zinc-400 transition">
            Home
          </Link>
        </li>

        <li>
          <Link href="/about" className="hover:text-zinc-400 transition">
            About
          </Link>
        </li>

        <li>
          <Link href="/contact" className="hover:text-zinc-400 transition">
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar