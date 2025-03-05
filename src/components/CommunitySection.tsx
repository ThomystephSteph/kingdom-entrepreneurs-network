
import { Users, MessageSquare, Calendar, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
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

  return (
    <section id="community" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-kea-blue/5 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-kea-gold/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <Badge variant="outline" className="bg-white border-kea-blue text-kea-blue mb-4">
              Faith Entrepreneur Hub
            </Badge>
            <h2 className="mb-6">Rejoignez une <span className="text-gradient">Communauté Vibrante</span></h2>
            <p className="text-kea-gray-600 mb-8">
              Connectez-vous avec des entrepreneurs chrétiens partageant les mêmes valeurs. 
              Échangez, apprenez et grandissez ensemble dans un environnement bienveillant et stimulant.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {communityFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in-up" 
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-2 rounded-lg bg-kea-blue/10 text-kea-blue flex-shrink-0">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-base mb-1">{feature.title}</h4>
                    <p className="text-sm text-kea-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary">
              Rejoindre la communauté
            </Button>
          </div>
          
          <div className="order-1 md:order-2 relative animate-fade-in">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img 
                  src="/images/community.jpg" 
                  alt="Communauté d'entrepreneurs chrétiens" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Forum preview card */}
              <Card className="glass-card absolute -bottom-6 -left-6 w-64 shadow-lg animate-fade-in animate-delay-300 z-20">
                <CardContent className="p-4">
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <MessageSquare size={16} className="inline mr-2 text-kea-blue" />
                    Forum des Entrepreneurs
                  </h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-kea-gray-50 rounded-lg text-xs">
                      <span className="font-medium">Marie C.</span>
                      <p className="text-kea-gray-600 mt-1">Comment intégrer la prière dans votre routine d'entrepreneur ?</p>
                      <div className="flex items-center mt-1 text-kea-gray-400">
                        <span>Il y a 2h</span>
                        <span className="mx-1">•</span>
                        <span>12 réponses</span>
                      </div>
                    </div>
                    <div className="p-2 bg-kea-gray-50 rounded-lg text-xs">
                      <span className="font-medium">Jean P.</span>
                      <p className="text-kea-gray-600 mt-1">Besoin de conseils pour mon entreprise de coaching biblique</p>
                      <div className="flex items-center mt-1 text-kea-gray-400">
                        <span>Il y a 5h</span>
                        <span className="mx-1">•</span>
                        <span>8 réponses</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Events card */}
              <Card className="glass-card absolute -top-6 -right-6 w-64 shadow-lg animate-fade-in animate-delay-500 z-10">
                <CardContent className="p-4">
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <Calendar size={16} className="inline mr-2 text-kea-blue" />
                    Événements à venir
                  </h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-kea-gray-50 rounded-lg text-xs">
                      <span className="text-kea-blue font-medium">21 Oct</span>
                      <p className="font-medium mt-1">Webinaire: Leadership selon Christ</p>
                      <p className="text-kea-gray-500">14:00 - 15:30</p>
                    </div>
                    <div className="p-2 bg-kea-gray-50 rounded-lg text-xs">
                      <span className="text-kea-blue font-medium">28 Oct</span>
                      <p className="font-medium mt-1">Atelier: Finances et foi</p>
                      <p className="text-kea-gray-500">10:00 - 12:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
