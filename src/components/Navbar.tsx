
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Formation', href: '#courses' },
    { name: 'Communauté', href: '#community' },
    { name: 'Ressources', href: '#resources' },
    { name: 'Marketplace', href: '#marketplace' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3 shadow-soft' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-kea-blue">Kingdom</span>
          <span className="text-2xl font-semibold text-kea-gold-dark">Entrepreneurs</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-kea-gray-600 hover:text-kea-blue transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-kea-blue hover:text-kea-blue-dark transition-colors duration-300">
              Connexion
            </a>
            <Button className="btn-primary animate-pulse-soft">
              S'inscrire
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-kea-gray-600 hover:text-kea-blue focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden glass-effect absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-kea-gray-600 hover:text-kea-blue transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-kea-gray-200 flex flex-col space-y-3">
            <a 
              href="#" 
              className="block py-2 text-center text-kea-blue hover:text-kea-blue-dark transition-colors duration-300"
            >
              Connexion
            </a>
            <Button className="btn-primary w-full">
              S'inscrire
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
