import Image from "next/image";
import spiceBoard from "../../../public/spicesBoard.png";
import msme from "../../../public/msme-logo.png";
import apeda from "../../../public/apeda.jpg";
import dgft from "../../../public/dgft.png";
import fssai from "../../../public/fssai.png";
import gst from "../../../public/gst.png";
import udhyam from "../../../public/udyom.png";




export default function Certification() {
  const data = [
    { id: 1, title: "SPICES BOARD", img: spiceBoard },
    { id: 2, title: "MSME", img: msme },
    { id: 3, title: "APEDA", img: apeda },
    { id: 4, title: "DGFT", img: dgft },
    { id: 5, title: "FSSAI", img: fssai },
    { id: 6, title: "GST", img: gst },
    { id: 7, title: "UDHYAM", img: udhyam },
  ];

  return (
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="relative h-[300px] sm:h-[300px] md:h-[500px]">
          <Image
              src="/aerial-view-container-cargo-ship-sea-min.jpg"
              alt="Premium Produce Export"
              fill
              className="rounded-3xl shadow-2xl object-cover object-center brightness-90"
              priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 rounded-3xl flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl uppercase font-bold text-white mb-4 md:mb-8 tracking-tight drop-shadow-lg">
              Certification
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed font-light drop-shadow-md px-2">
              Delivering Premium Indian Produce to the World
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {data.map((item) => (
                  <div
                      key={item.id}
                      className="bg-white rounded-2xl border-2 border-neutral-200 shadow-lg p-4 flex flex-col items-center"
                  >
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-md"
                    />
                    <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
                  </div>
              ))}
            </div>
          </div>

          <div className="mt-16 md:mt-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center text-blue-950 tracking-tight">
              World-Class Export Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {[
                {
                  step: 1,
                  title: "Strategic Sourcing",
                  desc: "Partnering with certified farmers to source the finest produce from premium agricultural regions",
                },
                {
                  step: 2,
                  title: "Quality Assurance",
                  desc: "Rigorous multi-stage quality control with state-of-the-art testing facilities ensuring international standards",
                },
                {
                  step: 3,
                  title: "Advanced Processing",
                  desc: "Modern climate-controlled facilities with cutting-edge technology for optimal produce handling and preservation",
                },
                {
                  step: 4,
                  title: "Global Distribution",
                  desc: "Efficient cold chain logistics ensuring maximum freshness from farm to international markets",
                },
              ].map((step) => (
                  <div
                      key={step.step}
                      className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-2xl hover:shadow-xl bg-white/50 hover:bg-white"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                      <span className="text-2xl sm:text-3xl text-white font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{step.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
