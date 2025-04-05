
import { Home, PieChart, Bell, Settings, User, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = ({ activeTab = "home" }) => {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "stats", label: "Stats", icon: PieChart },
    { id: "assessment", label: "Assessment", icon: ClipboardList },
    { id: "notifications", label: "Alerts", icon: Bell },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-4 z-10">
      <div className="flex justify-between items-center">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={cn(
              "flex flex-col items-center gap-1 h-auto py-1 px-2",
              activeTab === tab.id ? "text-primary" : "text-muted-foreground"
            )}
          >
            <tab.icon size={20} />
            <span className="text-[10px]">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
