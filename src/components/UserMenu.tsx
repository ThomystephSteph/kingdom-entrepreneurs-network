
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { User, LogOut, Settings, UserCircle } from 'lucide-react';
import Auth from './Auth';
import NotificationCenter from './NotificationCenter';

const UserMenu = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  useEffect(() => {
    // Check authentication status from localStorage
    const auth = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('user');
    
    if (auth === 'true' && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt sur Kingdom Entrepreneurs Academy",
    });
  };

  const closeAuthDialog = () => {
    setAuthDialogOpen(false);
  };

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-4">
        <NotificationCenter />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Paramètres</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Se déconnecter</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <Dialog open={authDialogOpen} onOpenChange={setAuthDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="default">
          <User className="mr-2 h-4 w-4" />
          Se connecter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Auth onClose={closeAuthDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default UserMenu;
