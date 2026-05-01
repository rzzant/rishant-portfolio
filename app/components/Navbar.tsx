export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur z-50 px-10 py-4 flex justify-between items-center">
      
      <h1 className="font-bold text-lg">Rishant</h1>

      <div className="space-x-6 text-sm">
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>

    </nav>
  );
}