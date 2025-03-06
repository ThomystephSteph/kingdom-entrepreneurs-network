
import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface NotificationCenterProps {
  notifications?: Notification[];
}

const DEMO_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Nouveau cours disponible',
    description: 'Le cours "Leadership biblique" est maintenant disponible dans la section Formation.',
    timestamp: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
    read: false,
    type: 'info'
  },
  {
    id: '2',
    title: 'Nouveau message',
    description: 'Vous avez reçu un message de Jean dans la communauté.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    read: false,
    type: 'info'
  },
  {
    id: '3',
    title: 'Webinaire à venir',
    description: 'Rappel : Webinaire "Foi et Business" demain à 18h.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    read: true,
    type: 'warning'
  },
  {
    id: '4',
    title: 'Nouveau partenariat',
    description: 'Découvrez notre nouveau partenaire dans la section Marketplace.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
    type: 'success'
  }
];

const NotificationCenter: React.FC<NotificationCenterProps> = ({ 
  notifications = DEMO_NOTIFICATIONS 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localNotifications, setLocalNotifications] = useState<Notification[]>(notifications);
  
  const unreadCount = localNotifications.filter(n => !n.read).length;
  
  const toggleOpen = () => setIsOpen(!isOpen);
  
  const markAsRead = (id: string) => {
    setLocalNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };
  
  const markAllAsRead = () => {
    setLocalNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };
  
  const removeNotification = (id: string) => {
    setLocalNotifications(prev => 
      prev.filter(notif => notif.id !== id)
    );
  };
  
  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) {
      return `Il y a ${diffMins} minute${diffMins > 1 ? 's' : ''}`;
    } else if (diffMins < 1440) {
      const hours = Math.floor(diffMins / 60);
      return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    } else {
      const days = Math.floor(diffMins / 1440);
      return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
    }
  };
  
  const getTypeStyles = (type: Notification['type']) => {
    switch (type) {
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500';
      default:
        return 'bg-gray-50 dark:bg-gray-800/50 border-l-4 border-gray-500';
    }
  };
  
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={toggleOpen}
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-background border border-border z-50">
          <div className="p-4 flex items-center justify-between">
            <h3 className="font-medium">Notifications</h3>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                Tout marquer comme lu
              </Button>
            )}
          </div>
          
          <Separator />
          
          <ScrollArea className="h-[400px]">
            {localNotifications.length > 0 ? (
              <div className="py-2">
                {localNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={cn(
                      "p-3 mx-2 my-1 rounded-md relative",
                      notification.read ? "opacity-70" : "opacity-100",
                      getTypeStyles(notification.type)
                    )}
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label="Supprimer la notification"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm mt-1">{notification.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto py-1 px-2 text-xs"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Marquer comme lu
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                <p>Aucune notification</p>
              </div>
            )}
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
