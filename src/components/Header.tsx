
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-primary">
          <span role="img" aria-label="Ribbon">🎗️</span> OncoSense
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={isMobile ? 20 : 24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-accent">
          <User size={isMobile ? 20 : 24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
