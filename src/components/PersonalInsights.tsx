
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChevronRight, HeartPulse, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PersonalInsights = () => {
  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <div className="h-1 insights-gradient" />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Personal Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full">
                <Shield size={18} className="text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Risk Profile</p>
                <p className="text-xs text-muted-foreground">Based on age, genetics, lifestyle</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight size={16} />
            </Button>
          </div>
          
          <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full">
                <HeartPulse size={18} className="text-rose-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Health Tips</p>
                <p className="text-xs text-muted-foreground">Personalized preventive care</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight size={16} />
            </Button>
          </div>
          
          <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full">
                <BookOpen size={18} className="text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Education</p>
                <p className="text-xs text-muted-foreground">4 new modules available</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInsights;
