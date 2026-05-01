export default function Projects() {
  return (
    <section id="projects" className="px-20 py-20">

      <h2 className="text-2xl text-gray-500 mb-10 tracking-widest">
        WORKS
      </h2>

      <div className="space-y-8">

        <a 
          href="https://interntrack-pro-ten.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:text-gray-400"
        >
          <h3 className="text-3xl">InternTrack</h3>
          <p className="text-gray-500 text-sm">
            Internship tracking system with analytics dashboard
          </p>
        </a>

        <a 
          href="https://safe-dine-lovat.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:text-gray-400"
        >
          <h3 className="text-3xl">Safe Dine</h3>
          <p className="text-gray-500 text-sm">
            Allergy-aware dining system with QR-based flow
          </p>
        </a>

        <a 
          href="https://movieholic-pi.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:text-gray-400"
        >
          <h3 className="text-3xl">MovieHolic</h3>
          <p className="text-gray-500 text-sm">
            Movie discovery app with real-time search
          </p>
        </a>

      </div>

    </section>
  );
}
