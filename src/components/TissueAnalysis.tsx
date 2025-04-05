
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const TissueAnalysis = () => {
  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <div className="h-1 tissue-analysis-gradient" />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Tissue Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-2 rounded-lg overflow-hidden aspect-[4/3] bg-black/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Tap to view your latest scan</p>
            </div>
          </div>
          {/* This would be an actual visualization in a real app */}
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
            <p className="text-xs text-muted-foreground">No suspicious regions detected</p>
          </div>
          <Button variant="ghost" size="sm" className="gap-1">
            <span className="text-xs">Details</span>
            <ChevronRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TissueAnalysis;
