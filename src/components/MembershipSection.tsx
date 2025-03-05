
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MembershipSection = () => {
  const plans = [
    {
      id: 'gratuit',
      name: 'Accès Découverte',
      description: 'Pour découvrir la plateforme',
      price: {
        monthly: 0,
        yearly: 0
      },
      features: [
        { text: 'Accès à 3 cours gratuits', included: true },
        { text: 'Participation au forum communautaire', included: true },
        { text: 'Newsletter mensuelle', included: true },
        { text: 'Accès à la bibliothèque de ressources', included: false },
        { text: 'Sessions de mentorat', included: false },
        { text: 'Accès à tous les cours', included: false },
        { text: 'Outils de business premium', included: false }
      ],
      cta: 'Commencer gratuitement',
      popular: false
    },
    {
      id: 'essentiel',
      name: 'Disciple Entrepreneur',
      description: 'Pour les entrepreneurs en développement',
      price: {
        monthly: 29.99,
        yearly: 299.99
      },
      features: [
        { text: 'Accès à 15 cours premium', included: true },
        { text: 'Participation au forum communautaire', included: true },
        { text: 'Newsletter hebdomadaire', included: true },
        { text: 'Accès à la bibliothèque de ressources', included: true },
        { text: '1 session de mentorat par mois', included: true },
        { text: 'Accès à tous les cours', included: false },
        { text: 'Outils de business premium', included: false }
      ],
      cta: 'S\'abonner',
      popular: true
    },
    {
      id: 'premium',
      name: 'Visionnaire du Royaume',
      description: 'Pour les entrepreneurs déterminés',
      price: {
        monthly: 79.99,
        yearly: 799.99
      },
      features: [
        { text: 'Accès à tous les cours', included: true },
        { text: 'Participation privilégiée au forum communautaire', included: true },
        { text: 'Newsletter personnalisée', included: true },
        { text: 'Bibliothèque complète de ressources', included: true },
        { text: '4 sessions de mentorat par mois', included: true },
        { text: 'Masterclasses exclusives', included: true },
        { text: 'Outils de business premium', included: true }
      ],
      cta: 'Devenir Visionnaire',
      popular: false
    }
  ];

  return (
    <section id="membership" className="section-padding bg-gradient-to-b from-white to-kea-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="bg-white border-kea-blue text-kea-blue mb-4">
            Abonnements
          </Badge>
          <h2 className="mb-4">Investissez dans votre <span className="text-gradient">Mission Divine</span></h2>
          <p className="subtitle">
            Choisissez le forfait qui correspond à vos besoins et à votre étape de croissance entrepreneuriale.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-sm p-1 rounded-full">
              <TabsTrigger 
                value="monthly"
                className="rounded-full data-[state=active]:bg-kea-blue data-[state=active]:text-white px-6 py-2"
              >
                Mensuel
              </TabsTrigger>
              <TabsTrigger 
                value="yearly"
                className="rounded-full data-[state=active]:bg-kea-blue data-[state=active]:text-white px-6 py-2"
              >
                Annuel <span className="ml-1 text-xs bg-kea-gold py-0.5 px-1.5 rounded-full">-15%</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {['monthly', 'yearly'].map((period) => (
            <TabsContent key={period} value={period} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                  <Card 
                    key={plan.id}
                    className={`border overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in-up ${
                      plan.popular 
                        ? 'relative border-kea-blue shadow-lg ring-1 ring-kea-blue/20' 
                        : 'border-kea-gray-200'
                    }`}
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-kea-blue text-white text-xs uppercase font-semibold py-1 px-3 rounded-bl-lg">
                          Populaire
                        </div>
                      </div>
                    )}
                    <CardHeader className="pb-0">
                      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                      <p className="text-sm text-kea-gray-500">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold">
                            {plan.price[period as keyof typeof plan.price] === 0 
                              ? 'Gratuit' 
                              : `${plan.price[period as keyof typeof plan.price]}€`}
                          </span>
                          {plan.price[period as keyof typeof plan.price] !== 0 && (
                            <span className="text-kea-gray-500 ml-2">/{period === 'monthly' ? 'mois' : 'an'}</span>
                          )}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            {feature.included ? (
                              <CheckCircle size={18} className="mr-2 text-kea-blue flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle size={18} className="mr-2 text-kea-gray-400 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={`text-sm ${feature.included ? 'text-kea-gray-800' : 'text-kea-gray-400'}`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-kea-blue hover:bg-kea-blue-dark text-white' 
                            : 'bg-white border border-kea-gray-200 text-kea-gray-800 hover:bg-kea-gray-50'
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="bg-kea-blue/5 rounded-2xl p-8 border border-kea-blue/20 text-center max-w-3xl mx-auto animate-fade-in">
          <h3 className="text-xl font-semibold mb-2">Besoin d'une solution personnalisée?</h3>
          <p className="text-kea-gray-600 mb-6">
            Nous proposons des plans sur mesure pour les églises, organisations chrétiennes et groupes d'entrepreneurs.
          </p>
          <Button variant="outline" className="bg-white hover:bg-kea-gray-50">
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
