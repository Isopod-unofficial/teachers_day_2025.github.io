import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export const DigitalGifts = () => {
  const { toast } = useToast();

  const downloadWallpaper = (type: string) => {
    toast({
      title: "Download Started!",
      description: `Your ${type} wallpaper is being prepared for download.`,
    });
    // In a real app, this would trigger an actual download
  };

  const downloadCard = (type: string) => {
    toast({
      title: "Card Ready!",
      description: `Your ${type} greeting card has been generated.`,
    });
    // In a real app, this would trigger an actual download
  };

  const gifts = [
    {
      category: "Desktop Wallpapers",
      icon: "🖥️",
      items: [
        { name: "Teachers' Day Special", type: "HD Desktop Wallpaper", action: () => downloadWallpaper("Teachers' Day Special") },
        { name: "Motivational Quotes", type: "4K Desktop Wallpaper", action: () => downloadWallpaper("Motivational Quotes") },
        { name: "Classroom Memories", type: "HD Desktop Wallpaper", action: () => downloadWallpaper("Classroom Memories") }
      ]
    },
    {
      category: "Mobile Wallpapers",
      icon: "📱",
      items: [
        { name: "Inspirational", type: "Mobile Wallpaper", action: () => downloadWallpaper("Inspirational Mobile") },
        { name: "Floral Design", type: "Mobile Wallpaper", action: () => downloadWallpaper("Floral Mobile") }
      ]
    },
    {
      category: "Greeting Cards",
      icon: "💌",
      items: [
        { name: "Thank You Card", type: "Digital Card", action: () => downloadCard("Thank You") },
        { name: "Appreciation Card", type: "Digital Card", action: () => downloadCard("Appreciation") },
        { name: "Custom Message Card", type: "Personalized Card", action: () => downloadCard("Custom Message") }
      ]
    }
  ];

  return (
    <Card className="card-festive">
      <CardHeader className="text-center">
        <div className="text-4xl mb-2">🎁</div>
        <CardTitle className="text-2xl font-bold text-gradient">
          Digital Tech Gifts
        </CardTitle>
        <p className="text-muted-foreground">
          Beautiful wallpapers and greeting cards created specially for you
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {gifts.map((category, categoryIdx) => (
          <div key={categoryIdx} className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="text-2xl">{category.icon}</span>
              {category.category}
            </h3>
            
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  className="bg-gradient-to-br from-white to-muted/50 p-4 rounded-lg border border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {item.type}
                      </Badge>
                    </div>
                    
                    <Button
                      onClick={item.action}
                      size="sm"
                      className="btn-celebration w-full"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-6 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> Right-click and "Save As" to keep these beautiful gifts on your device!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};