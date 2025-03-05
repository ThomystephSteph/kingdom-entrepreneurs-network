
import { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "La Kingdom Entrepreneurs Academy a complètement transformé ma vision des affaires. J'ai appris à intégrer ma foi dans chaque décision professionnelle.",
    author: "Marie Dubois",
    role: "Fondatrice, Lumière Consulting",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "Les cours sur le leadership chrétien m'ont aidé à diriger mon équipe avec intégrité et compassion. Les résultats ont dépassé mes attentes.",
    author: "Thomas Leroux",
    role: "CEO, Grâce Technologies",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "Grâce à la communauté, j'ai trouvé des partenaires qui partagent mes valeurs. Mon entreprise agricole prospère maintenant tout en respectant la création.",
    author: "Jeanne Moreau",
    role: "Fondatrice, EcoHarvest",
    image: "/images/testimonial-3.jpg"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startAutoRotation = () => {
    intervalRef.current = window.setInterval(() => {
      rotateTestimonial('next');
    }, 8000);
  };

  const stopAutoRotation = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const rotateTestimonial = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(prev => {
      if (direction === 'next') {
        return prev >= testimonials.length - 1 ? 0 : prev + 1;
      } else {
        return prev <= 0 ? testimonials.length - 1 : prev - 1;
      }
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    startAutoRotation();
    return () => stopAutoRotation();
  }, []);

  return (
    <section className="section-padding bg-kea-blue/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-kea-blue/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-kea-gold/10 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Quote size={42} className="text-kea-blue/20 mx-auto mb-6" />
          <h2 className="mb-4">Ce que disent nos <span className="text-gradient">Entrepreneurs</span></h2>
          <p className="subtitle">
            Découvrez comment notre plateforme transforme la vie des entrepreneurs chrétiens.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeIndex || (activeIndex === 0 && index === testimonials.length - 1)
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="glass-card flex flex-col md:flex-row items-center gap-8 p-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-soft">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-lg md:text-xl italic mb-6 text-kea-gray-700">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-semibold text-kea-gray-900">{testimonial.author}</h4>
                      <p className="text-kea-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  stopAutoRotation();
                  startAutoRotation();
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-kea-blue w-6' : 'bg-kea-gray-400'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
