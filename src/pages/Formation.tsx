
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, GraduationCap, Book, Video, FileText, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Formation = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseCategories = [
    { id: 'all', name: 'Tous les cours' },
    { id: 'mindset', name: 'Mindset' },
    { id: 'business', name: 'Business' },
    { id: 'agrobusiness', name: 'Agrobusiness' },
    { id: 'leadership', name: 'Leadership Chrétien' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Fondements Bibliques du Business',
      description: 'Découvrez comment aligner votre entreprise sur les principes bibliques pour un succès durable et éthique.',
      category: 'mindset',
      level: 'Débutant',
      duration: '6 semaines',
      modules: 12,
      image: '/images/course-biblical.jpg'
    },
    {
      id: 2,
      title: 'Marketing Digital pour Entrepreneurs Chrétiens',
      description: 'Stratégies de marketing éthiques et efficaces pour développer votre entreprise tout en restant fidèle à vos valeurs.',
      category: 'business',
      level: 'Intermédiaire',
      duration: '8 semaines',
      modules: 16,
      image: '/images/course-marketing.jpg'
    },
    {
      id: 3,
      title: 'Agriculture Durable et Profit',
      description: 'Comment créer une entreprise agricole rentable et respectueuse de la création, avec des modèles durables.',
      category: 'agrobusiness',
      level: 'Tous niveaux',
      duration: '10 semaines',
      modules: 20,
      image: '/images/course-agriculture.jpg'
    },
    {
      id: 4,
      title: 'Leadership Serviteur dans l\'Entreprise',
      description: 'Diriger comme Christ pour un impact transformationnel dans votre organisation et votre écosystème.',
      category: 'leadership',
      level: 'Avancé',
      duration: '5 semaines',
      modules: 10,
      image: '/images/course-leadership.jpg'
    },
    {
      id: 5,
      title: 'Finance Chrétienne et Éthique',
      description: 'Gérer vos finances d\'entreprise selon les principes bibliques d\'intendance et de générosité.',
      category: 'business',
      level: 'Intermédiaire',
      duration: '7 semaines',
      modules: 14,
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 6,
      title: 'Mindset de l\'Entrepreneur de Foi',
      description: 'Développez une mentalité biblique pour surmonter les défis et saisir les opportunités dans votre parcours entrepreneurial.',
      category: 'mindset',
      level: 'Débutant',
      duration: '4 semaines',
      modules: 8,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
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
                Divine Business Academy
              </Badge>
              <h1 className="mb-6">
                Formations <span className="text-gradient">Excellence & Foi</span>
              </h1>
              <p className="subtitle mb-8">
                Des cours conçus pour équiper les entrepreneurs chrétiens avec des compétences pratiques
                et une perspective spirituelle solide pour réussir dans leur mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">
                  Explorer les cours
                </Button>
                <Button variant="outline" className="btn-secondary">
                  Comment ça marche ?
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nos Modules de Formation</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Chaque formation combine enseignement biblique, stratégies d'entreprise et conseils
                pratiques pour vous aider à développer un business qui glorifie Dieu.
              </p>
            </div>
            
            <Tabs defaultValue="all" className="mb-12">
              <div className="flex justify-center mb-6">
                <TabsList className="bg-white shadow-sm p-1 rounded-full">
                  {courseCategories.map((category) => (
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

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="glass-card overflow-hidden border-none transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <Badge className="absolute top-3 left-3 z-20 bg-white text-kea-blue-dark">
                          {course.level}
                        </Badge>
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 text-sm text-kea-gray-500 mb-3">
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.modules} modules</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-kea-gray-500 text-sm mb-4">{course.description}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-kea-gray-200">
                          <div className="flex items-center space-x-1">
                            <CheckCircle size={16} className="text-kea-blue" />
                            <span className="text-sm text-kea-gray-600">Certification</span>
                          </div>
                          <Button variant="ghost" className="text-kea-blue hover:text-kea-blue-dark hover:bg-kea-blue-light/10 p-0">
                            Découvrir <ChevronRight size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {courseCategories.slice(1).map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses
                      .filter((course) => course.category === category.id)
                      .map((course) => (
                        <Card key={course.id} className="glass-card overflow-hidden border-none transition-all duration-300 hover:shadow-lg">
                          <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                            <Badge className="absolute top-3 left-3 z-20 bg-white text-kea-blue-dark">
                              {course.level}
                            </Badge>
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-2 text-sm text-kea-gray-500 mb-3">
                              <span>{course.duration}</span>
                              <span>•</span>
                              <span>{course.modules} modules</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                            <p className="text-kea-gray-500 text-sm mb-4">{course.description}</p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-kea-gray-200">
                              <div className="flex items-center space-x-1">
                                <CheckCircle size={16} className="text-kea-blue" />
                                <span className="text-sm text-kea-gray-600">Certification</span>
                              </div>
                              <Button variant="ghost" className="text-kea-blue hover:text-kea-blue-dark hover:bg-kea-blue-light/10 p-0">
                                Découvrir <ChevronRight size={16} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Course Structure */}
        <section className="bg-kea-blue/5 py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Structure de <span className="text-gradient">nos formations</span></h2>
                <p className="subtitle mb-8">
                  Chaque module est soigneusement conçu pour offrir une expérience d'apprentissage complète,
                  combinant théorie biblique et applications pratiques pour votre entreprise.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-kea-blue text-white">
                      <Video size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Vidéos d'enseignement</h4>
                      <p className="text-kea-gray-600">
                        Des leçons vidéo engageantes présentées par des experts chrétiens en entrepreneuriat.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-kea-gold text-white">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Documents téléchargeables</h4>
                      <p className="text-kea-gray-600">
                        Des PDF, modèles et guides pratiques pour approfondir vos connaissances et les appliquer.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-green-500 text-white">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Quiz et évaluations</h4>
                      <p className="text-kea-gray-600">
                        Des tests interactifs pour valider vos connaissances et suivre votre progression.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-purple-500 text-white">
                      <Book size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Études de cas bibliques</h4>
                      <p className="text-kea-gray-600">
                        Analyse de principes entrepreneuriaux tirés des Écritures et appliqués au monde moderne.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                    alt="Entrepreneurs en formation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap size={20} className="text-kea-blue" />
                    <span className="font-semibold">Certifications reconnues</span>
                  </div>
                  <p className="text-sm text-kea-gray-600">
                    Obtenez des certificats d'accomplissement pour valoriser votre parcours entrepreneurial.
                  </p>
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

export default Formation;
