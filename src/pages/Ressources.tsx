
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Bookmark, PlayCircle, Headphones, Search, Filter, BookMarked, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Ressources = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resourceTypes = [
    { id: 'all', name: 'Toutes les ressources', icon: BookOpen },
    { id: 'articles', name: 'Articles', icon: Bookmark },
    { id: 'videos', name: 'Vidéos', icon: PlayCircle },
    { id: 'podcasts', name: 'Podcasts', icon: Headphones },
    { id: 'verses', name: 'Versets & Méditations', icon: BookMarked },
  ];

  const resources = [
    {
      id: 1,
      title: 'Les principes de Joseph pour gérer l\'abondance et la pénurie',
      description: 'Découvrez comment appliquer la sagesse de Joseph en Égypte dans votre entreprise moderne.',
      type: 'articles',
      author: 'David Cohen',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Finance', 'Sagesse biblique']
    },
    {
      id: 2,
      title: 'Servir par l\'excellence : le modèle de Daniel',
      description: 'Comment Daniel a excellé en territoire étranger tout en restant fidèle à Dieu.',
      type: 'articles',
      author: 'Marie Durand',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Leadership', 'Intégrité']
    },
    {
      id: 3,
      title: 'Comment intégrer la prière dans votre routine d\'entrepreneur',
      description: 'Stratégies pratiques pour maintenir une vie spirituelle riche malgré un emploi du temps chargé.',
      type: 'videos',
      author: 'Sarah Williams',
      duration: '18:24',
      image: 'https://images.unsplash.com/photo-1607827448387-a75fa6e6c986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Vie spirituelle', 'Productivité']
    },
    {
      id: 4,
      title: 'Marketing éthique : promouvoir sans compromettre vos valeurs',
      description: 'Comment développer des stratégies marketing authentiques et alignées sur les principes bibliques.',
      type: 'podcasts',
      author: 'Thomas Leroux',
      duration: '42:15',
      image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Marketing', 'Éthique']
    },
    {
      id: 5,
      title: 'Proverbes pour entrepreneurs : sagesse intemporelle pour le business moderne',
      description: 'Une compilation des proverbes les plus pertinents pour guider vos décisions d\'affaires.',
      type: 'verses',
      verses: 'Proverbes 10:4, 11:1, 16:3, 22:29',
      image: 'https://images.unsplash.com/photo-1504052434669-c4a44582a2c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Sagesse biblique', 'Principes']
    },
    {
      id: 6,
      title: 'Méditation sur la multiplication des pains : principes d\'abondance',
      description: 'Leçons entrepreneuriales tirées du miracle de la multiplication des pains et des poissons.',
      type: 'verses',
      verses: 'Matthieu 14:13-21',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Abondance', 'Gestion']
    },
  ];

  const featuredResource = {
    title: "Le Royaume des Cieux comme modèle d'entreprise",
    description: "Découvrez comment les principes du Royaume de Dieu peuvent transformer votre approche entrepreneuriale et créer un impact durable.",
    author: "John Maxwell",
    type: "E-book",
    image: "https://images.unsplash.com/photo-1519834022362-8ea9b30a29b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative bg-kea-blue/5 py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <Badge variant="outline" className="bg-white border-kea-blue text-kea-blue mb-4">
                VisionnaireChretien
              </Badge>
              <h1 className="mb-6">
                Ressources & <span className="text-gradient">Inspiration</span>
              </h1>
              <p className="subtitle mb-8">
                Une bibliothèque de contenus inspirants pour nourrir votre foi et stimuler 
                votre vision entrepreneuriale selon les principes bibliques.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kea-gray-400" size={18} />
                  <Input 
                    type="search" 
                    placeholder="Rechercher une ressource..." 
                    className="pl-10 bg-white border-kea-gray-200 w-full"
                  />
                </div>
                <Button className="btn-primary sm:flex-shrink-0">
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Resource */}
        <section className="py-16">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="absolute inset-0">
                <img 
                  src={featuredResource.image} 
                  alt={featuredResource.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-kea-blue/90 to-kea-blue/50"></div>
              </div>
              
              <div className="relative p-8 md:p-16 text-white max-w-2xl">
                <Badge className="bg-white/20 hover:bg-white/30 text-white mb-4">
                  {featuredResource.type}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredResource.title}</h2>
                <p className="text-white/80 text-lg mb-6">
                  {featuredResource.description}
                </p>
                <p className="mb-8">Par {featuredResource.author}</p>
                <Button className="bg-white text-kea-blue hover:bg-white/90 hover:text-kea-blue-dark">
                  Télécharger gratuitement
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Library */}
        <section className="py-16 bg-kea-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="mb-2">Bibliothèque de Ressources</h2>
                <p className="subtitle">
                  Explorez notre collection d'articles, vidéos, podcasts et méditations.
                </p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 flex items-center">
                <Filter size={16} className="mr-2" />
                Filtres avancés
              </Button>
            </div>
            
            <Tabs defaultValue="all" className="mb-12">
              <div className="flex justify-center mb-6 overflow-x-auto md:overflow-visible">
                <TabsList className="bg-white shadow-sm p-1 rounded-full">
                  {resourceTypes.map((type) => (
                    <TabsTrigger 
                      key={type.id} 
                      value={type.id}
                      className="rounded-full data-[state=active]:bg-kea-blue data-[state=active]:text-white px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                    >
                      <type.icon size={16} />
                      <span>{type.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </TabsContent>
              
              {resourceTypes.slice(1).map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources
                      .filter((resource) => resource.type === type.id)
                      .map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center">
              <Button className="mx-auto">
                Charger plus de ressources
              </Button>
            </div>
          </div>
        </section>
        
        {/* Bible Verses Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Versets pour Entrepreneurs</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Une sélection de passages bibliques pour vous guider, vous inspirer et vous encourager 
                dans votre parcours entrepreneurial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card border-none hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="bg-kea-blue/10 text-kea-blue mb-4">Leadership</Badge>
                  <blockquote className="text-lg italic mb-4 text-kea-gray-700">
                    "Que tout ce que vous faites soit fait avec amour."
                  </blockquote>
                  <p className="font-medium text-right">— 1 Corinthiens 16:14</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-none hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="bg-kea-blue/10 text-kea-blue mb-4">Travail</Badge>
                  <blockquote className="text-lg italic mb-4 text-kea-gray-700">
                    "Tout ce que ta main trouve à faire avec ta force, fais-le."
                  </blockquote>
                  <p className="font-medium text-right">— Ecclésiaste 9:10</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-none hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="bg-kea-blue/10 text-kea-blue mb-4">Intégrité</Badge>
                  <blockquote className="text-lg italic mb-4 text-kea-gray-700">
                    "Mieux vaut peu avec la justice que beaucoup de revenus sans droiture."
                  </blockquote>
                  <p className="font-medium text-right">— Proverbes 16:8</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-none hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="bg-kea-blue/10 text-kea-blue mb-4">Persévérance</Badge>
                  <blockquote className="text-lg italic mb-4 text-kea-gray-700">
                    "Ne nous lassons pas de faire le bien; car nous moissonnerons au temps convenable, si nous ne nous relâchons pas."
                  </blockquote>
                  <p className="font-medium text-right">— Galates 6:9</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-none hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="bg-kea-blue/10 text-kea-blue mb-4">Sagesse</Badge>
                  <blockquote className="text-lg italic mb-4 text-kea-gray-700">
                    "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse."
                  </blockquote>
                  <p className="font-medium text-right">— Proverbes 3:5</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-none hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="bg-kea-blue/10 text-kea-blue mb-4">Vision</Badge>
                  <blockquote className="text-lg italic mb-4 text-kea-gray-700">
                    "Écris la vision, grave-la sur des tablettes, afin qu'on puisse la lire couramment."
                  </blockquote>
                  <p className="font-medium text-right">— Habacuc 2:2</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Resource Card Component
const ResourceCard = ({ resource }: { resource: any }) => {
  return (
    <Card className="glass-card overflow-hidden border-none transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {resource.type === 'videos' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-3">
              <PlayCircle size={40} className="text-white" />
            </div>
          </div>
        )}
        {resource.type === 'podcasts' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-3">
              <Headphones size={40} className="text-white" />
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="mb-3">
          {resource.tags && resource.tags.map((tag: string, index: number) => (
            <Badge key={index} className="bg-kea-blue/10 text-kea-blue mr-2 mb-2">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
        <p className="text-kea-gray-600 text-sm mb-4 flex-grow">{resource.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-kea-gray-200">
          <div className="flex items-center text-sm text-kea-gray-500">
            {resource.type === 'articles' ? (
              <>
                <BookOpen size={14} className="mr-1" />
                <span>{resource.readTime} de lecture</span>
              </>
            ) : resource.type === 'videos' || resource.type === 'podcasts' ? (
              <>
                <PlayCircle size={14} className="mr-1" />
                <span>{resource.duration}</span>
              </>
            ) : (
              <>
                <BookMarked size={14} className="mr-1" />
                <span>{resource.verses}</span>
              </>
            )}
          </div>
          <Button variant="ghost" className="p-0 h-auto text-kea-blue hover:text-kea-blue-dark">
            Voir <ChevronRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Ressources;
