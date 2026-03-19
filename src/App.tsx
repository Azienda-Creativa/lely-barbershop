import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-pattern min-h-screen">
      {/* Navigatie */}
      <nav className="fixed w-full z-50 nav-glass">
        <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold tracking-widest uppercase gold-gradient">Lely</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-semibold">
            <a href="#over-ons" className="hover:text-[#c5a059] transition">Over Ons</a>
            <a href="#diensten" className="hover:text-[#c5a059] transition">Diensten</a>
            <a href="#reviews" className="hover:text-[#c5a059] transition">Reviews</a>
            <a href="#locatie" className="hover:text-[#c5a059] transition">Locatie</a>
          </div>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn-gold px-6 py-2 rounded-full text-black font-bold text-sm uppercase tracking-tighter">
            Boek Nu
          </a>
        </div>
      </nav>

      {/* Hero Sectie */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" alt="Barbershop Interieur" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 animate-fade">
          <p className="uppercase tracking-[0.5em] text-[#c5a059] mb-4 text-sm font-semibold">Station Lelylaan • Amsterdam</p>
          <h1 className="text-6xl md:text-8xl font-serif mb-6">Barbershop <span className="block italic gold-gradient">Lely</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed font-light">
            Tevreden klanten is onze kwaliteit.
            Ervaar een masterclass in grooming, fades en traditionele baardverzorging.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#diensten" className="border border-[#c5a059] text-[#c5a059] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-black transition">Bekijk Menu</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition">Instagram</a>
          </div>
        </div>
      </header>

      {/* Over Ons Sectie */}
      <section id="over-ons" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c5a059]"></div>
          <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1000" alt="Barber aan het werk" className="rounded-sm shadow-2xl relative z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#c5a059]"></div>
        </div>
        <div>
          <h2 className="text-4xl font-serif mb-6">Meesterschap in elke <span className="italic text-[#c5a059]">Beweging</span></h2>
          <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          Gelegen bij Station Lelylaan, is Barbershop Lely meer dan alleen een kapsalon. Wij dragen een erfenis van barbiers-excellentie met ons mee, gespecialiseerd in strakke contouren, perfecte skin fades.          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center space-x-3">
              <span className="text-[#c5a059]"><i className="fas fa-check-circle"></i></span>
              <span>Ervaren Heren Stylisten</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#c5a059]"><i className="fas fa-check-circle"></i></span>
              <span>Professionele Omgeving</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#c5a059]"><i className="fas fa-check-circle"></i></span>
              <span>Hoogwaardige Precisietechnieken</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Diensten Sectie */}
      <section id="diensten" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4">Onze Diensten</h2>
            <div className="h-1 w-24 bg-[#c5a059] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-sm card-hover transition duration-300">
              <div className="text-3xl text-[#c5a059] mb-6"><i className="fas fa-scissors"></i></div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Knippen & Stylen</h3>
              <p className="text-gray-400 mb-6">Kenmerkende stijlen inclusief low/mid/high fades, buzz cuts en klassiek schaarwerk.</p>
              <p className="text-[#c5a059] font-bold text-2xl">Vanaf €25</p>
            </div>
            
            <div className="p-8 border border-white/10 rounded-sm card-hover transition duration-300">
              <div className="text-3xl text-[#c5a059] mb-6"><i className="fas fa-brush"></i></div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Baardverzorging</h3>
              <p className="text-gray-400 mb-6">Symmetrische baardvorming, contouren en een verzorgende behandeling.</p>
              <p className="text-[#c5a059] font-bold text-2xl">Vanaf €15</p>
            </div>

            <div className="p-8 border border-white/10 rounded-sm card-hover transition duration-300">
              <div className="text-3xl text-[#c5a059] mb-6"><i className="fas fa-hot-tub"></i></div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">De Volledige Ervaring</h3>
              <p className="text-gray-400 mb-6">Complete combo: Knippen, baard en more.</p>
              <p className="text-[#c5a059] font-bold text-2xl">Vanaf €40</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Sectie */}
      <section id="reviews" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4">Wat Onze Klanten Zeggen</h2>
            <p className="text-[#c5a059] uppercase tracking-widest font-semibold">4.5 Sterren op Google Maps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#151515] p-10 rounded-sm relative border border-white/5">
              <div className="flex text-yellow-500 mb-4 text-sm">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "Echt top treatment. Marc nam de tijd om me te laten zien hoe ik het zelf kan stylen. Ik ging weg met een masterclass en een strakke nieuwe look."
              </p>
              <p className="font-bold uppercase tracking-tighter text-sm">— Bastiaan</p>
            </div>

            <div className="bg-[#151515] p-10 rounded-sm relative border border-white/5">
              <div className="flex text-yellow-500 mb-4 text-sm">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "Hij was super zelfverzekerd en wist meteen welk kapsel ik wilde. Veel kennis van zaken. Ik kom hier zeker terug!"
              </p>
              <p className="font-bold uppercase tracking-tighter text-sm">— Vlad</p>
            </div>

            <div className="bg-[#151515] p-10 rounded-sm relative border border-white/5">
              <div className="flex text-yellow-500 mb-4 text-sm">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "Beste barbier in de buurt van Station Lelylaan. De sfeer is relaxed en de fade is altijd on point. Vakmanschap op hoog niveau."
              </p>
              <p className="font-bold uppercase tracking-tighter text-sm">— Omar</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="text-sm underline hover:text-[#c5a059] transition">Bekijk alle reviews op Google</a>
          </div>
        </div>
      </section>

      {/* Locatie & Contact */}
      <section id="locatie" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif mb-8 italic">Vind ons bij Station Lelylaan</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-[#c5a059] mt-1"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4 className="font-bold uppercase mb-2">Adres</h4>
                  <p className="text-gray-400">Cornelis Lelylaan 1, 1062 HD Amsterdam</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-[#c5a059] mt-1"><i className="fas fa-clock"></i></div>
                <div>
                  <h4 className="font-bold uppercase mb-2">Openingstijden</h4>
                  <p className="text-gray-400">Ma - Za: 09:30 - 19:30</p>
                  <p className="text-gray-400">Zo: 10:00 - 19:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-[#c5a059] mt-1"><i className="fas fa-phone"></i></div>
                <div>
                  <h4 className="font-bold uppercase mb-2">Contact</h4>
                  <a href="tel:+31612345678" className="text-gray-400 hover:text-[#c5a059] transition block">(+31) 0612345678</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-sm overflow-hidden grayscale contrast-125 border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.566113110255!2d4.832049315804899!3d52.35821597978434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e206b1286b73%3A0x6b7726487e8346b9!2sAmsterdam%20Lelylaan!5e0!3m2!1sen!2snl!4v1620000000000!5m2!1sen!2snl" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-2xl hover:text-[#c5a059] transition"><i className="fab fa-instagram"></i></a>
        </div>
        <p className="text-gray-500 text-xs uppercase tracking-widest">&copy; 2024 Barbershop Lely. Ontworpen voor Excellentie.</p>
      </footer>
    </div>
  );
}
