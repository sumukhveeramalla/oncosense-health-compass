
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const HealthScore = () => {
  const { toast } = useToast();
  
  // Mock data - in a real app this would come from an API
  const score = 87;
  const riskLevel = score >= 80 ? "Low" : score >= 50 ? "Moderate" : "High";
  const riskColorClass = 
    riskLevel === "Low" ? "score-low" : 
    riskLevel === "Moderate" ? "score-moderate" : "score-high";
  
  const handleInfoClick = () => {
    toast({
      title: "Breast Health Score",
      description: "This score is calculated based on your scan results, medical history, and risk factors. Higher scores indicate better breast health.",
    });
  };

  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <div className="h-1 health-score-gradient" />
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Breast Health Score</CardTitle>
        <Button variant="ghost" size="icon" onClick={handleInfoClick}>
          <Info size={18} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-end">
            <span className="text-4xl font-bold">{score}</span>
            <span className="text-sm text-muted-foreground ml-1">/100</span>
          </div>
          <div className={`text-sm font-medium px-2 py-1 rounded-full ${riskColorClass} bg-opacity-10 border border-current`}>
            {riskLevel} Risk
          </div>
        </div>
        <Progress value={score} className="h-2 mb-4" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Last scan: Today, 8:45 AM</span>
          <span className="text-primary">+2 from last week</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthScore;
