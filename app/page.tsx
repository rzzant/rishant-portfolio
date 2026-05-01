import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      <Sidebar />

      <div className="ml-32">
        <Hero />
        <Projects />
      </div>

    </main>
  );
}