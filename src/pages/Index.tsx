
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import TissueAnalysis from "@/components/TissueAnalysis";
import MonitoringMetrics from "@/components/MonitoringMetrics";
import PersonalInsights from "@/components/PersonalInsights";
import NotificationCenter from "@/components/NotificationCenter";
import ActivityTrends from "@/components/ActivityTrends";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 container max-w-md mx-auto p-4 pb-20">
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Good morning, Sarah</h1>
            <p className="text-sm text-muted-foreground">Your breast health dashboard</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TissueAnalysis />
            <MonitoringMetrics />
          </div>
          
          <PersonalInsights />
          <NotificationCenter />
          <ActivityTrends />
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Index;
