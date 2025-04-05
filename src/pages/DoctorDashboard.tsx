
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ClinicalDashboard from "@/components/doctor/ClinicalDashboard";
import DiagnosticVisualizations from "@/components/doctor/DiagnosticVisualizations";
import QuantitativeMetrics from "@/components/doctor/QuantitativeMetrics";
import ClinicalDecisionSupport from "@/components/doctor/ClinicalDecisionSupport";
import TreatmentMonitoring from "@/components/doctor/TreatmentMonitoring";
import IntegrationCapabilities from "@/components/doctor/IntegrationCapabilities";
import ResearchAnalytics from "@/components/doctor/ResearchAnalytics";
import LongitudinalAnalysis from "@/components/doctor/LongitudinalAnalysis";

const DoctorDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto p-4 pb-20">
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Doctor Dashboard</h1>
            <p className="text-sm text-muted-foreground">Clinical monitoring and analysis tools</p>
          </div>
          
          <ClinicalDashboard />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DiagnosticVisualizations />
            <QuantitativeMetrics />
          </div>
          
          <ClinicalDecisionSupport />
          <TreatmentMonitoring />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <IntegrationCapabilities />
            <ResearchAnalytics />
          </div>
          
          <LongitudinalAnalysis />
        </div>
      </main>
      
      <Navigation activeTab="doctor" />
    </div>
  );
};

export default DoctorDashboard;
