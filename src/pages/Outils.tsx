
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wrench, Calendar, FileText, CreditCard, Users, BarChart, Download, Briefcase, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Outils = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toolCategories = [
    { id: 'business', name: 'Business Planning' },
    { id: 'finance', name: 'Finance' },
    { id: 'time', name: 'Gestion du temps' },
    { id: 'marketing', name: 'Marketing' },
  ];

  const tools = [
    {
      id: 1,
      title: 'Modèle de Business Plan Biblique',
      description: 'Un template complet pour créer un business plan aligné sur les principes bibliques.',
      category: 'business',
      format: 'PDF et DOCX',
      icon: Briefcase,
      downloadLink: '#'
    },
    {
      id: 2,
      title: 'Tableau de Flux de Trésorerie',
      description: 'Suivez vos entrées et sorties d\'argent avec ce modèle Excel intuitif.',
      category: 'finance',
      format: 'XLSX',
      icon: CreditCard,
      downloadLink: '#'
    },
    {
      id: 3,
      title: 'Planificateur Hebdomadaire',
      description: 'Organisez votre semaine avec ce planificateur incluant des moments de prière et réflexion.',
      category: 'time',
      format: 'PDF',
      icon: Calendar,
      downloadLink: '#'
    },
    {
      id: 4,
      title: 'Template Plan Marketing Éthique',
      description: 'Stratégies de marketing alignées sur des valeurs chrétiennes pour promouvoir votre entreprise.',
      category: 'marketing',
      format: 'PPTX et PDF',
      icon: BarChart,
      downloadLink: '#'
    },
    {
      id: 5,
      title: 'Outil d\'Analyse SWOT Spirituel',
      description: 'Évaluez les forces, faiblesses, opportunités et menaces avec une perspective biblique.',
      category: 'business',
      format: 'PDF',
      icon: FileText,
      downloadLink: '#'
    },
    {
      id: 6,
      title: 'Tableau de Gestion des Objectifs',
      description: 'Définissez et suivez vos objectifs d\'entreprise alignés sur votre mission.',
      category: 'time',
      format: 'XLSX',
      icon: Clock,
      downloadLink: '#'
    },
  ];

  const coaches = [
    {
      id: 1,
      name: 'David Moreau',
      title: 'Expert en Leadership Chrétien',
      specialties: ['Leadership', 'Vision stratégique', 'Management biblique'],
      image: 'https://i.pravatar.cc/150?img=11',
      availability: 'Lun, Mer, Ven'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Conseillère en Finance Éthique',
      specialties: ['Investissement', 'Finance d\'entreprise', 'Croissance durable'],
      image: 'https://i.pravatar.cc/150?img=9',
      availability: 'Mar, Jeu'
    },
    {
      id: 3,
      name: 'Jean-Pierre Dupont',
      title: 'Coach en Marketing Digital',
      specialties: ['Stratégies digitales', 'Réseaux sociaux', 'Communication chrétienne'],
      image: 'https://i.pravatar.cc/150?img=13',
      availability: 'Mer, Ven, Sam'
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
                MissionPreneur
              </Badge>
              <h1 className="mb-6">
                Outils & <span className="text-gradient">Coaching</span>
              </h1>
              <p className="subtitle mb-8">
                Des ressources pratiques et un accompagnement personnalisé pour vous aider 
                à développer votre entreprise selon les principes divins.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">
                  Explorer les outils
                </Button>
                <Button variant="outline" className="btn-secondary">
                  Réserver un coaching
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <Wrench size={300} className="absolute top-1/2 right-24 -translate-y-1/2 text-kea-blue" />
          </div>
        </section>
        
        {/* Tools Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Boîte à Outils de l'Entrepreneur</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Des modèles, templates et outils pratiques pour structurer votre entreprise
                et optimiser vos processus selon des principes d'excellence et d'intégrité.
              </p>
            </div>
            
            <Tabs defaultValue="business" className="mb-12">
              <div className="flex justify-center mb-6">
                <TabsList className="bg-white shadow-sm p-1 rounded-full">
                  {toolCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="rounded-full data-[state=active]:bg-kea-blue data-[state=active]:text-white px-4 py-2"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {toolCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools
                      .filter((tool) => tool.category === category.id)
                      .map((tool) => (
                        <Card key={tool.id} className="glass-card border-none hover:shadow-md transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start">
                              <div className="p-3 rounded-lg bg-kea-blue/10 text-kea-blue mr-4">
                                <tool.icon size={24} />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold mb-1">{tool.title}</h3>
                                <p className="text-sm text-kea-gray-500 mb-1">Format: {tool.format}</p>
                              </div>
                            </div>
                            <p className="text-kea-gray-600 my-4">{tool.description}</p>
                            <Button className="w-full" variant="outline">
                              <Download size={16} className="mr-2" />
                              Télécharger
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Coaching Section */}
        <section className="bg-kea-blue/5 py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Coaching & Mentorat</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Bénéficiez d'un accompagnement personnalisé avec nos experts pour accélérer 
                votre croissance et surmonter les défis entrepreneuriaux.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coaches.map((coach) => (
                <Card key={coach.id} className="glass-card border-none hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-white shadow-md">
                        <img 
                          src={coach.image} 
                          alt={coach.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mt-4 mb-1">{coach.name}</h3>
                      <p className="text-kea-blue">{coach.title}</p>
                    </div>
                    
                    <div className="border-t border-b border-kea-gray-200 py-4 my-4">
                      <h4 className="font-medium mb-2 text-sm text-kea-gray-500">Spécialités:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="bg-white">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-sm text-kea-gray-600 mb-6">
                      <span className="font-medium text-kea-gray-700">Disponibilité:</span> {coach.availability}
                    </div>
                    
                    <Button className="mt-auto">
                      Réserver une session
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="subtitle mb-6">
                Vous ne trouvez pas le mentor idéal ? Contactez-nous pour une recommandation personnalisée.
              </p>
              <Button variant="outline" className="mx-auto">
                Voir tous les mentors
              </Button>
            </div>
          </div>
        </section>
        
        {/* Dashboard Preview */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Votre <span className="text-gradient">Tableau de Bord</span> Personnalisé</h2>
                <p className="subtitle mb-8">
                  Suivez vos progrès, gérez vos objectifs et accédez à tous vos outils depuis votre espace personnel.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-kea-blue text-white">
                      <BarChart size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Suivi de progression</h4>
                      <p className="text-kea-gray-600">
                        Visualisez votre avancement dans les formations et l'atteinte de vos objectifs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-kea-gold text-white">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Planification intégrée</h4>
                      <p className="text-kea-gray-600">
                        Gérez votre agenda, vos tâches et vos rendez-vous de coaching en un seul endroit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-green-500 text-white">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Bibliothèque personnelle</h4>
                      <p className="text-kea-gray-600">
                        Accédez à tous vos documents, modèles et outils téléchargés.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-8 btn-primary">
                  Accéder à mon tableau de bord
                </Button>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Tableau de bord" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Outils;
