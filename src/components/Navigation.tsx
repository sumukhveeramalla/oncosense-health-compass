
import { Home, PieChart, Bell, Settings, User, ClipboardList, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = ({ activeTab = "home" }) => {
  const tabs = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "stats", label: "Stats", icon: PieChart, path: "/stats" },
    { id: "assessment", label: "Assessment", icon: ClipboardList, path: "/assessment" },
    { id: "doctor", label: "Doctor", icon: Stethoscope, path: "/doctor" },
    { id: "profile", label: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className={cn(
                "flex items-center gap-2 h-auto py-2 px-3",
                activeTab === tab.id ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
              )}
              asChild
            >
              <Link to={tab.path}>
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
