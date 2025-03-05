
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, MessageSquare, Calendar, User, Heart, MessageCircle, Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Communaute = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const communityFeatures = [
    {
      icon: Users,
      title: "Groupes Thématiques",
      description: "Rejoignez des discussions spécialisées sur le business digital, leadership, agro-industrie et plus encore."
    },
    {
      icon: MessageSquare,
      title: "Messagerie Privée",
      description: "Échangez directement avec d'autres entrepreneurs pour partager conseils et expériences."
    },
    {
      icon: Calendar,
      title: "Événements Live",
      description: "Participez à des webinaires, sessions de formation et rencontres en ligne avec des experts."
    },
    {
      icon: User,
      title: "Profil Personnalisé",
      description: "Créez votre profil d'entrepreneur et partagez votre parcours avec la communauté."
    }
  ];

  const forumTopics = [
    {
      id: 1,
      category: "Leadership",
      title: "Comment intégrer la prière dans votre routine d'entrepreneur ?",
      author: "Marie C.",
      time: "Il y a 2h",
      replies: 12,
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      category: "Business",
      title: "Besoin de conseils pour mon entreprise de coaching biblique",
      author: "Jean P.",
      time: "Il y a 5h",
      replies: 8,
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      category: "Agrobusiness",
      title: "Recherche partenaires pour projet agricole durable au Togo",
      author: "Paul M.",
      time: "Il y a 1j",
      replies: 15,
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      category: "Mindset",
      title: "Surmonter la peur de l'échec avec une perspective biblique",
      author: "Sophie T.",
      time: "Il y a 3j",
      replies: 24,
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: 5,
      category: "Finances",
      title: "Gestion des finances selon les principes bibliques",
      author: "Luc B.",
      time: "Il y a 4j",
      replies: 19,
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Webinaire: Leadership selon Christ",
      date: "21 Oct",
      time: "14:00 - 15:30",
      type: "En ligne",
      speakers: ["David Johnson", "Marie Dubois"]
    },
    {
      id: 2,
      title: "Atelier: Finances et foi",
      date: "28 Oct",
      time: "10:00 - 12:00",
      type: "En ligne",
      speakers: ["Thomas Leroux"]
    },
    {
      id: 3,
      title: "Rencontre des entrepreneurs chrétiens",
      date: "5 Nov",
      time: "18:00 - 20:00",
      type: "Paris",
      speakers: ["Équipe KEA"]
    }
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
                Faith Entrepreneur Hub
              </Badge>
              <h1 className="mb-6">
                Notre <span className="text-gradient">Communauté Vibrante</span>
              </h1>
              <p className="subtitle mb-8">
                Connectez-vous avec des entrepreneurs chrétiens partageant les mêmes valeurs. 
                Échangez, apprenez et grandissez ensemble dans un environnement bienveillant et stimulant.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">
                  Rejoindre la communauté
                </Button>
                <Button variant="outline" className="btn-secondary">
                  Explorer le forum
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <Users size={300} className="absolute top-1/2 right-24 -translate-y-1/2 text-kea-blue" />
          </div>
        </section>
        
        {/* Community Features */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Fonctionnalités de la Communauté</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Notre plateforme offre tous les outils nécessaires pour créer des connexions 
                significatives et soutenir votre parcours entrepreneurial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityFeatures.map((feature, index) => (
                <Card key={index} className="glass-card border-none hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-kea-blue/10 text-kea-blue inline-flex mb-4">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-kea-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Forum Preview */}
        <section className="bg-kea-blue/5 py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="mb-2">Forum des Entrepreneurs</h2>
                <p className="subtitle">
                  Discussions, questions et partage d'expériences entre membres.
                </p>
              </div>
              <Button className="mt-4 md:mt-0">
                Toutes les discussions
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {forumTopics.map((topic) => (
                <Card key={topic.id} className="glass-card border-none hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="rounded-full overflow-hidden w-12 h-12 mr-4 flex-shrink-0">
                        <img src={topic.avatar} alt={topic.author} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center mb-1">
                          <Badge className="bg-kea-blue/10 text-kea-blue hover:bg-kea-blue/20 mr-2">
                            {topic.category}
                          </Badge>
                          <span className="text-sm text-kea-gray-500">{topic.time}</span>
                        </div>
                        <h3 className="text-lg font-medium mb-1 hover:text-kea-blue transition-colors duration-200">
                          {topic.title}
                        </h3>
                        <div className="flex items-center text-sm text-kea-gray-500">
                          <span className="mr-2">Par {topic.author}</span>
                          <div className="flex items-center">
                            <MessageCircle size={14} className="mr-1" />
                            <span>{topic.replies} réponses</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" className="text-kea-blue hover:text-kea-blue-dark hover:bg-kea-blue/10 flex-shrink-0">
                        Voir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="mb-2">Événements à venir</h2>
                <p className="subtitle">
                  Webinaires, ateliers et rencontres pour apprendre et réseauter.
                </p>
              </div>
              <Button className="mt-4 md:mt-0" variant="outline">
                Tous les événements
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="glass-card border-none hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-kea-blue/10 text-kea-blue rounded-lg flex flex-col items-center justify-center mr-4">
                        <span className="text-lg font-bold">{event.date.split(' ')[0]}</span>
                        <span className="text-sm">{event.date.split(' ')[1]}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{event.title}</h3>
                        <p className="text-sm text-kea-gray-500">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <Badge variant="outline" className="bg-white">
                        {event.type}
                      </Badge>
                      <div className="flex items-center text-kea-gray-500">
                        <Users size={14} className="mr-1" />
                        <span>{event.speakers.join(', ')}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      S'inscrire
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial */}
        <section className="bg-kea-gold/5 py-16">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-kea-gold mb-6 flex justify-center">
                <Heart size={40} fill="currentColor" />
              </div>
              <h2 className="mb-6">L'esprit de notre communauté</h2>
              <blockquote className="text-xl italic text-kea-gray-700 mb-8">
                "J'étais un entrepreneur isolé avant de rejoindre cette communauté. Aujourd'hui, je me sens soutenu, 
                inspiré et équipé pour bâtir une entreprise qui honore Dieu. Le réseau de frères et sœurs en Christ 
                qui partagent la même vision est inestimable."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://i.pravatar.cc/150?img=8" 
                    alt="Thomas Entrepreneur" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Thomas Lombard</h4>
                  <p className="text-kea-gray-500">Fondateur, Grâce Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 text-center">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-6">Prêt à rejoindre notre communauté?</h2>
              <p className="subtitle mb-8">
                Connectez-vous avec des entrepreneurs partageant vos valeurs et votre foi.
                Ensemble, nous pouvons bâtir des entreprises qui transforment le monde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary" size="lg">
                  <Coffee className="mr-2 h-5 w-5" />
                  Rejoindre maintenant
                </Button>
                <Button variant="outline" className="btn-secondary" size="lg">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Communaute;
