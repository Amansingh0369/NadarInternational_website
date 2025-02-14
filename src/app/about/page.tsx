import Image from 'next/image'
import thank from "../../../public/thank.jpeg"

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="relative h-[400px] sm:h-[500px] md:h-[700px]">
        <Image 
          src="/aerial-view-container-cargo-ship-sea-min.jpg"
          alt="Premium Produce Export"
          fill
          className="rounded-3xl shadow-2xl object-cover object-center brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 rounded-3xl flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-8 tracking-tight drop-shadow-lg">
            Excellence in Global Exports
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed font-light drop-shadow-md px-2">
            Delivering Premium Indian Produce to the World
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-8 text-amber-600 font-extralight tracking-tight">ABOUT US</h2>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-8 text-gray-800 tracking-tight font-light tracking-wider">Leading</h2>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-8 text-gray-800 tracking-tight font-light tracking-wider">Tomorrow</h2>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-8 text-gray-800 tracking-tight font-light tracking-wide">Together.</h2>
            <p className="text-gray-700 text-lg sm:text-xl mb-6 md:mb-8 leading-relaxed">
              <span className='text-2xl sm:text-3xl md:text-4xl text-orange-500 font-bold'>Nadar International</span> stands as a premier global exporter, specializing in premium-quality fruits and vegetables 
              sourced from India's finest agricultural regions. Our state-of-the-art facilities and rigorous quality control 
              processes ensure that every product meets and exceeds international standards.
            </p>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              With expertise in global trade, we've built strong partnerships with farmers and international clients,
              ensuring a seamless supply chain that delivers freshness and quality to markets worldwide. Our commitment to 
              sustainable farming practices, farmer welfare, and environmental responsibility sets us apart in the industry.
            </p>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] group mt-8 md:mt-0">
            <Image
              src="/aerial-view-container-cargo-ship-sea-min.jpg"
              alt="Premium Produce Export"
              fill
              className="rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
          </div>
        </div>

        <div className="mt-16 md:mt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center text-blue-950 tracking-tight">World-Class Export Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {[
              { 
                step: 1, 
                title: 'Strategic Sourcing', 
                desc: 'Partnering with certified farmers to source the finest produce from premium agricultural regions' 
              },
              { 
                step: 2, 
                title: 'Quality Assurance', 
                desc: 'Rigorous multi-stage quality control with state-of-the-art testing facilities ensuring international standards' 
              },
              { 
                step: 3, 
                title: 'Advanced Processing', 
                desc: 'Modern climate-controlled facilities with cutting-edge technology for optimal produce handling and preservation' 
              },
              { 
                step: 4, 
                title: 'Global Distribution', 
                desc: 'Efficient cold chain logistics ensuring maximum freshness from farm to international markets' 
              }
            ].map((step) => (
              <div key={step.step} className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-2xl hover:shadow-xl bg-white/50 hover:bg-white">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                  <span className="text-2xl sm:text-3xl text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto  px-10 sm:px-0 py-12 md:py-24 w-full h-full">
        <div className="flex justify-center">
          <img
              src="/thank.jpeg"
              alt="Premium Produce Export"
              className="rounded-3xl shadow-2xl w-full sm:w-[50rem] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>



    </div>
  );
}