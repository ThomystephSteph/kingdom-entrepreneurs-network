
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCart, Tag, Search, Filter, Award, Eye, Heart, MessageSquare, Star, ShoppingBag, UsersRound, BadgePercent } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Marketplace = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'services', name: 'Services' },
    { id: 'products', name: 'Produits' },
    { id: 'opportunities', name: 'Opportunités' },
    { id: 'events', name: 'Événements' },
  ];

  const products = [
    {
      id: 1,
      title: 'Consultation en Marketing Digital',
      description: 'Analyse et stratégie de marketing en ligne pour entrepreneurs chrétiens.',
      price: '€120 / heure',
      category: 'services',
      seller: 'Thomas Marketing',
      location: 'En ligne',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 23
    },
    {
      id: 2,
      title: 'Template Canva - Médias Sociaux Chrétiens',
      description: 'Pack de 50 templates édités pour réseaux sociaux avec citations bibliques.',
      price: '€35',
      category: 'products',
      seller: 'CreativeGrace',
      location: 'Digital',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviews: 47
    },
    {
      id: 3,
      title: 'Recherche Associé(e) - Ferme Bio Éthique',
      description: 'Projet d\'agriculture durable basé sur les principes d\'intendance de la création.',
      price: 'Négociable',
      category: 'opportunities',
      seller: 'Terre Promise SARL',
      location: 'Normandie, France',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: null,
      reviews: 0
    },
    {
      id: 4,
      title: 'Formation Leadership & Foi - En présentiel',
      description: 'Journée intensive sur le leadership serviteur dans l\'entreprise.',
      price: '€199',
      category: 'events',
      seller: 'Institut Vision Chrétienne',
      location: 'Lyon, France',
      date: '15 novembre 2023',
      image: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 31
    },
    {
      id: 5,
      title: 'Coaching Business & Spiritualité',
      description: 'Programme de 3 mois pour aligner votre entreprise sur votre mission spirituelle.',
      price: '€1,200',
      category: 'services',
      seller: 'Marie Vision Coach',
      location: 'En ligne',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 18
    },
    {
      id: 6,
      title: 'Livre: "Entrepreneur selon le Cœur de Dieu"',
      description: 'Guide pratique pour développer une entreprise alignée sur les valeurs bibliques.',
      price: '€24.90',
      category: 'products',
      seller: 'Éditions Lumière',
      location: 'Digital & Physique',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      reviews: 72
    },
  ];

  const featuredSellers = [
    {
      id: 1,
      name: 'GrâceTech Solutions',
      description: 'Développement web et applications pour ministères et entreprises chrétiennes.',
      image: 'https://i.pravatar.cc/150?img=21',
      verified: true,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Harvest Consulting',
      description: 'Conseil en stratégie d\'entreprise avec une perspective biblique.',
      image: 'https://i.pravatar.cc/150?img=32',
      verified: true,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Kingdom Media',
      description: 'Services de création de contenu et marketing pour initiatives chrétiennes.',
      image: 'https://i.pravatar.cc/150?img=18',
      verified: true,
      rating: 4.7
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative bg-kea-blue/5 py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <Badge variant="outline" className="bg-white border-kea-blue text-kea-blue mb-4">
                EntrepreneurDeFoi
              </Badge>
              <h1 className="mb-6">
                Marketplace & <span className="text-gradient">Opportunités</span>
              </h1>
              <p className="subtitle mb-8">
                Un espace d'échange où les entrepreneurs chrétiens peuvent proposer leurs services, 
                produits et opportunités de partenariat dans un cadre de confiance et d'intégrité.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kea-gray-400" size={18} />
                  <Input 
                    type="search" 
                    placeholder="Rechercher dans la marketplace..." 
                    className="pl-10 bg-white border-kea-gray-200 w-full"
                  />
                </div>
                <Button className="btn-primary sm:flex-shrink-0">
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <ShoppingCart size={300} className="absolute top-1/2 right-24 -translate-y-1/2 text-kea-blue" />
          </div>
        </section>
        
        {/* Marketplace Listings */}
        <section className="py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="mb-2">Produits & Services</h2>
                <p className="subtitle">
                  Découvrez les offres de notre communauté d'entrepreneurs chrétiens.
                </p>
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-4">
                <Button variant="outline" className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  Filtres
                </Button>
                <Button className="bg-kea-gold text-white hover:bg-kea-gold-dark">
                  <Tag size={16} className="mr-2" />
                  Publier une offre
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="mb-12">
              <div className="flex justify-center mb-6 overflow-x-auto pb-2">
                <TabsList className="bg-white shadow-sm p-1 rounded-full">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="rounded-full data-[state=active]:bg-kea-blue data-[state=active]:text-white px-4 py-2 whitespace-nowrap"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              {categories.slice(1).map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products
                      .filter((product) => product.category === category.id)
                      .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center">
              <Button variant="outline" className="mx-auto">
                Voir plus d'offres
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Sellers */}
        <section className="bg-kea-blue/5 py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Vendeurs Recommandés</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Des entrepreneurs chrétiens de confiance proposant des services et produits de qualité.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredSellers.map((seller) => (
                <Card key={seller.id} className="glass-card border-none hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={seller.image} 
                          alt={seller.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold">{seller.name}</h3>
                          {seller.verified && (
                            <Badge className="ml-2 bg-green-100 text-green-800 border-green-200">
                              <Award size={12} className="mr-1" />
                              Vérifié
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              fill={i < Math.floor(seller.rating) ? "currentColor" : "none"} 
                              className="mr-0.5"
                            />
                          ))}
                          <span className="text-kea-gray-600 text-sm ml-1">{seller.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-kea-gray-600 mb-6">
                      {seller.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Voir le profil
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Comment Ça Fonctionne</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Notre marketplace est conçue pour faciliter les échanges entre entrepreneurs 
                chrétiens dans un esprit d'intégrité et de service mutuel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-kea-blue/10 text-kea-blue flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Parcourir les offres</h3>
                <p className="text-kea-gray-600">
                  Explorez notre sélection de produits, services et opportunités proposés par des 
                  entrepreneurs chrétiens.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-kea-blue/10 text-kea-blue flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Contactez les vendeurs</h3>
                <p className="text-kea-gray-600">
                  Échangez directement avec les entrepreneurs pour poser vos questions et discuter 
                  des détails.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-kea-blue/10 text-kea-blue flex items-center justify-center mx-auto mb-4">
                  <UsersRound size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Collaborez avec confiance</h3>
                <p className="text-kea-gray-600">
                  Établissez des partenariats durables basés sur des valeurs communes et des 
                  principes d'intégrité.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Banner */}
        <section className="relative py-12 bg-kea-blue text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-kea-gold blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Vous avez quelque chose à proposer ?</h3>
              <p className="text-white/80">
                Partagez vos produits, services ou opportunités avec notre communauté.
              </p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-white text-kea-blue hover:bg-white/90">
                <Tag size={16} className="mr-2" />
                Publier une offre
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                En savoir plus
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="glass-card overflow-hidden border-none transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge 
          className={`absolute top-3 left-3 ${
            product.category === 'services' ? 'bg-blue-100 text-blue-800' :
            product.category === 'products' ? 'bg-green-100 text-green-800' :
            product.category === 'opportunities' ? 'bg-purple-100 text-purple-800' :
            'bg-amber-100 text-amber-800'
          }`}
        >
          {product.category === 'services' ? 'Service' :
          product.category === 'products' ? 'Produit' :
          product.category === 'opportunities' ? 'Opportunité' :
          'Événement'}
        </Badge>
        <Button variant="ghost" className="absolute top-3 right-3 h-8 w-8 p-0 rounded-full bg-white/80 hover:bg-white text-kea-gray-600">
          <Heart size={16} />
        </Button>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="text-lg font-semibold mb-1 hover:text-kea-blue transition-colors duration-200">
          {product.title}
        </div>
        <p className="text-kea-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex items-center text-sm text-kea-gray-500 mb-3">
          <span className="font-medium">{product.seller}</span>
          <span className="mx-2">•</span>
          <span>{product.location}</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-kea-gray-200">
          <div className="flex items-center">
            {product.rating ? (
              <div className="flex items-center text-amber-500">
                <Star size={14} fill="currentColor" />
                <span className="ml-1 text-kea-gray-700 font-medium">{product.rating}</span>
                <span className="ml-1 text-kea-gray-500">({product.reviews})</span>
              </div>
            ) : (
              <span className="text-kea-gray-500 text-sm">Nouveau</span>
            )}
          </div>
          <div className="font-semibold text-kea-blue">{product.price}</div>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <Button className="flex-grow">
            <Eye size={16} className="mr-2" />
            Voir l'offre
          </Button>
          <Button variant="outline" className="p-2">
            <MessageSquare size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Marketplace;
