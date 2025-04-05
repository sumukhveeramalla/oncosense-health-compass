
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";

const Header = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Define subtitle based on current route
  const getSubtitle = () => {
    if (location.pathname === "/assessment") {
      return "Self-Assessment Tools";
    } else if (location.pathname === "/doctor") {
      return "Clinical Dashboard";
    }
    return "Patient Health Dashboard";
  };
  
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-primary">
          <span role="img" aria-label="Ribbon">🎗️</span> OncoSense
        </span>
        <span className="text-xs text-muted-foreground hidden sm:inline-block ml-2">{getSubtitle()}</span>
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
