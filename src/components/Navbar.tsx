
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigations = [
    { title: "Accueil", path: "/" },
    { title: "Formation", path: "/formation" },
    { title: "Communauté", path: "/communaute" },
    { title: "Outils", path: "/outils" },
    { title: "Ressources", path: "/ressources" },
    { title: "Marketplace", path: "/marketplace" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-kea-blue">
                Kingdom<span className="text-kea-gold-dark">Entrepreneurs</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigations.map((nav) => (
              <Link
                key={nav.path}
                to={nav.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === nav.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent"
                )}
              >
                {nav.title}
              </Link>
            ))}
          </nav>

          {/* User menu */}
          <div className="flex items-center space-x-4">
            <UserMenu />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 space-y-2 bg-background border-t">
          {navigations.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={cn(
                "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === nav.path
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
