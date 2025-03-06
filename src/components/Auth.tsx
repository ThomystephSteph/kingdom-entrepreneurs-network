
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AtSign, Lock, User } from 'lucide-react';

interface AuthProps {
  onClose: () => void;
}

const Auth: React.FC<AuthProps> = ({ onClose }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This would be replaced with actual authentication logic
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ 
        email: loginEmail,
        name: loginEmail.split('@')[0],
      }));
      
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur Kingdom Entrepreneurs Academy",
      });
      
      onClose();
      window.location.reload();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Échec de la connexion",
        description: "Veuillez vérifier vos identifiants et réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This would be replaced with actual registration logic
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ 
        email: registerEmail,
        name: registerName,
      }));
      
      toast({
        title: "Inscription réussie",
        description: "Bienvenue sur Kingdom Entrepreneurs Academy",
      });
      
      onClose();
      window.location.reload();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Échec de l'inscription",
        description: "Veuillez vérifier vos informations et réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-gradient">Kingdom Entrepreneurs Academy</CardTitle>
        <CardDescription className="text-center">Connectez-vous ou créez un compte pour accéder à toutes nos ressources.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="register">Inscription</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <AtSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre@email.com" 
                    className="pl-10"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Jean Dupont" 
                    className="pl-10"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <div className="relative">
                  <AtSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="register-email" 
                    type="email" 
                    placeholder="votre@email.com" 
                    className="pl-10"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="register-password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Inscription...' : 'S\'inscrire'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          En vous connectant, vous acceptez nos conditions d'utilisation.
        </p>
      </CardFooter>
    </Card>
  );
};

export default Auth;
