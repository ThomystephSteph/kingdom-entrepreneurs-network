
import { useState } from 'react';
import { Book, Video, FileText, CheckCircle, Brain, Briefcase, Leaf, Users, Clock6 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const courseCategories = [
  { id: 'all', name: 'Tous', icon: Book },
  { id: 'mindset', name: 'Mindset', icon: Brain },
  { id: 'business', name: 'Business', icon: Briefcase },
  { id: 'agrobusiness', name: 'Agrobusiness', icon: Leaf },
  { id: 'leadership', name: 'Leadership Chrétien', icon: Users },
];

const courses = [
  {
    id: 1,
    title: 'Fondements Bibliques du Business',
    description: 'Découvrez comment aligner votre entreprise sur les principes bibliques.',
    category: 'mindset',
    level: 'Débutant',
    duration: '6 semaines',
    modules: 12,
    image: '/images/course-biblical.jpg'
  },
  {
    id: 2,
    title: 'Marketing Digital pour Entrepreneurs Chrétiens',
    description: 'Stratégies de marketing éthiques et efficaces pour votre entreprise.',
    category: 'business',
    level: 'Intermédiaire',
    duration: '8 semaines',
    modules: 16,
    image: '/images/course-marketing.jpg'
  },
  {
    id: 3,
    title: 'Agriculture Durable et Profit',
    description: 'Comment créer une entreprise agricole rentable et respectueuse de la création.',
    category: 'agrobusiness',
    level: 'Tous niveaux',
    duration: '10 semaines',
    modules: 20,
    image: '/images/course-agriculture.jpg'
  },
  {
    id: 4,
    title: 'Leadership Serviteur dans l\'Entreprise',
    description: 'Diriger comme Christ pour un impact transformationnel.',
    category: 'leadership',
    level: 'Avancé',
    duration: '5 semaines',
    modules: 10,
    image: '/images/course-leadership.jpg'
  },
];

const CoursePreview = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="section-padding bg-kea-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="bg-white border-kea-blue text-kea-blue mb-4">
            Divine Business Academy
          </Badge>
          <h2 className="mb-4">Formations Excellence <span className="gold-accent">&</span> Foi</h2>
          <p className="subtitle">
            Des cours conçus pour équiper les entrepreneurs chrétiens avec des compétences pratiques
            et une perspective spirituelle solide.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-white shadow-sm p-1 rounded-full">
              {courseCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="rounded-full data-[state=active]:bg-kea-blue data-[state=active]:text-white px-4 py-2 flex items-center gap-2"
                >
                  <category.icon size={16} />
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <Card key={course.id} className="glass-card overflow-hidden border-none transition-all duration-300 hover:shadow-lg animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
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
                      <Clock6 size={14} />
                      <span>{course.duration}</span>
                      <span>•</span>
                      <FileText size={14} />
                      <span>{course.modules} modules</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-kea-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-kea-gray-200">
                      <div className="flex items-center space-x-1">
                        <CheckCircle size={16} className="text-kea-blue" />
                        <span className="text-sm text-kea-gray-600">Certification</span>
                      </div>
                      <Button variant="ghost" className="text-kea-blue hover:text-kea-blue-dark hover:bg-kea-blue-light/10 p-0">
                        Découvrir →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="btn-primary mx-auto">
            Voir tous les cours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
