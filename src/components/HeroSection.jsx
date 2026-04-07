

const HeroSection = () => {
  return (
   <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        
        {/* Logo */}
        <div className="inline-block bg-yellow-400 px-6 py-3 border-4 border-black shadow-[6px_6px_0px_black] mb-6">
          <h1 className="text-2xl font-bold">Devicharan</h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Frontend Developer
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          I build responsive and modern websites with clean design and smooth user experience.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          
          <button className="bg-black text-white px-6 py-2 rounded 
          hover:bg-gray-800 transition">
            View Projects
          </button>

          <button className="border-2 border-black px-6 py-2 rounded 
          hover:bg-black hover:text-white transition">
            Contact Me
          </button>

        </div>

      </div>
    </div>
  )
}

export default HeroSection