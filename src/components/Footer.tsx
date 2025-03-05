
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Formation",
      links: [
        { label: "Tous les cours", href: "#" },
        { label: "Mindset", href: "#" },
        { label: "Business", href: "#" },
        { label: "Agrobusiness", href: "#" },
        { label: "Leadership Chrétien", href: "#" }
      ]
    },
    {
      title: "Communauté",
      links: [
        { label: "Forum", href: "#" },
        { label: "Événements", href: "#" },
        { label: "Groupes", href: "#" },
        { label: "Témoignages", href: "#" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { label: "Articles", href: "#" },
        { label: "Podcasts", href: "#" },
        { label: "Livres recommandés", href: "#" },
        { label: "Méditations", href: "#" }
      ]
    },
    {
      title: "À propos",
      links: [
        { label: "Notre mission", href: "#" },
        { label: "L'équipe", href: "#" },
        { label: "Partenaires", href: "#" },
        { label: "Contactez-nous", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" }
  ];

  return (
    <footer className="bg-kea-gray-50 border-t border-kea-gray-200">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand and newsletter */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-kea-blue">Kingdom</span>
              <span className="text-2xl font-semibold text-kea-gold-dark">Entrepreneurs</span>
            </a>
            <p className="text-kea-gray-600 mb-6">
              Équiper les entrepreneurs chrétiens pour bâtir des entreprises prospères alignées avec leur foi et leurs valeurs.
            </p>
            
            <h4 className="font-semibold mb-4">Restez inspiré</h4>
            <div className="flex gap-2 mb-6">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white border-kea-gray-200"
              />
              <Button className="bg-kea-blue text-white hover:bg-kea-blue-dark">
                S'abonner
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-kea-gray-600 hover:text-kea-blue transition-colors p-2 rounded-full hover:bg-kea-blue/10"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-kea-gray-600 hover:text-kea-blue transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact info */}
        <div className="border-t border-kea-gray-200 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-4 sm:mb-0">
            <a href="mailto:contact@kingdom-entrepreneurs.com" className="flex items-center text-kea-gray-600 hover:text-kea-blue">
              <Mail size={16} className="mr-2" />
              contact@kingdom-entrepreneurs.com
            </a>
            <a href="tel:+33123456789" className="flex items-center text-kea-gray-600 hover:text-kea-blue">
              <Phone size={16} className="mr-2" />
              +33 1 23 45 67 89
            </a>
            <span className="flex items-center text-kea-gray-600">
              <MapPin size={16} className="mr-2" />
              Paris, France
            </span>
          </div>
          
          <div className="flex items-center text-kea-gray-500 text-sm">
            <p>© {currentYear} Kingdom Entrepreneurs Academy. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
