import Link from "next/link";


export default function Header() {
  return (
    <header className="p-4 border-b border-gray-700">
      <nav className="flex justify-between items-center max-w-3xl mx-auto">
        <div className="text-sm font-semibold">
          <Link href="/">My Portfolio</Link>
        </div>
        <div className="space-x-6 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/blogs" className="hover:underline">
            Blogs
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
