
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Info } from "lucide-react";

const TissueAnalysis = () => {
  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <div className="h-1 tissue-analysis-gradient" />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Tissue Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-2 rounded-lg overflow-hidden aspect-[4/3] bg-black/5">
          <img 
            src="/lovable-uploads/86ca5b23-7d7e-42c9-b557-791ad2a44895.png" 
            alt="Breast tissue scan visualization" 
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" className="text-blue-400 opacity-30" />
              <path d="M12 2a10 10 0 0 1 10 10" className="text-blue-500 animate-pulse-subtle" />
            </svg>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div>
            <h4 className="font-medium text-sm">Latest Analysis</h4>
            <p className="text-xs text-muted-foreground">Normal tissue patterns detected</p>
          </div>
          <Button variant="ghost" size="sm" className="gap-1">
            <span className="text-xs">Details</span>
            <ChevronRight size={16} />
          </Button>
        </div>

        <div className="mt-3 bg-muted/50 p-3 rounded-lg flex items-start gap-3">
          <div className="bg-white p-1.5 rounded-full mt-0.5">
            <Info size={16} className="text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Educational note</p>
            <p className="text-xs">Breast tissue naturally varies in density. The lighter areas represent denser tissue which is normal and can change throughout your monthly cycle.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TissueAnalysis;
