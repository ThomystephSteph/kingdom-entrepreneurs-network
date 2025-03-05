
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const heroImages = [
  {
    id: 1,
    src: '/images/hero-leadership.jpg',
    alt: 'Leadership chrétien en action',
    title: 'Entreprendre avec Foi et Excellence',
    subtitle: 'Développez votre entreprise selon les principes divins'
  },
  {
    id: 2,
    src: '/images/hero-entrepreneurship.jpg',
    alt: 'Entrepreneurs en pleine formation',
    title: 'Bâtissez un Business Qui Transforme',
    subtitle: 'Des formations conçues pour les entrepreneurs chrétiens'
  },
  {
    id: 3,
    src: '/images/hero-faith.jpg',
    alt: 'Moment de prière et réflexion',
    title: 'Votre Foi, Votre Force',
    subtitle: 'Une communauté qui vous soutient dans votre mission'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slideLoaded, setSlideLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-rotate slides
    const interval = setInterval(() => {
      handleNextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSlideLoaded(false);
    const timer = setTimeout(() => setSlideLoaded(true), 300);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 lg:pt-36 h-screen max-h-[800px]">
      {/* Background image slider */}
      <div className="absolute inset-0 w-full h-full bg-kea-gray-50">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60 z-10"></div>
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover object-center transition-all duration-700 ${
                slideLoaded && index === currentSlide ? 'scale-105 animate-image-rotate' : 'scale-100'
              } ${isLoaded ? 'img-loaded' : 'img-loading'}`}
              onLoad={() => index === currentSlide && setSlideLoaded(true)}
            />
          </div>
        ))}
      </div>

      <div className="container-custom relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="bg-kea-blue text-white text-sm uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-5 animate-fade-in">
            Kingdom Entrepreneurs Academy
          </div>
          
          <h1 className={`transition-all duration-700 ${
            slideLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-gradient">{heroImages[currentSlide].title}</span>
          </h1>
          
          <p className={`subtitle mt-6 mb-8 transition-all duration-700 delay-100 ${
            slideLoaded ? 'animate-fade-in-up animate-delay-200' : 'opacity-0 translate-y-4'
          }`}>
            {heroImages[currentSlide].subtitle}
          </p>
          
          <div className={`flex flex-wrap gap-4 transition-all duration-700 ${
            slideLoaded ? 'animate-fade-in-up animate-delay-300' : 'opacity-0 translate-y-4'
          }`}>
            <Button className="btn-primary">
              Découvrir nos formations
            </Button>
            <Button variant="outline" className="btn-secondary">
              Rejoindre la communauté
            </Button>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-2 z-20">
        <button
          onClick={handlePrevSlide}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-kea-gray-600 hover:text-kea-blue transition-all duration-300"
          aria-label="Slide précédente"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextSlide}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-kea-gray-600 hover:text-kea-blue transition-all duration-300"
          aria-label="Slide suivante"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-kea-blue w-6' : 'bg-kea-gray-400'
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 animate-bounce">
        <span className="text-sm text-kea-gray-500 mb-2">Découvrir</span>
        <div className="w-0.5 h-6 bg-kea-gray-300"></div>
      </div>
    </section>
  );
};

export default Hero;
