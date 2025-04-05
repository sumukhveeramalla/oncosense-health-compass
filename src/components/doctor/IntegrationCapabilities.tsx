
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, Share2 } from "lucide-react";

const IntegrationCapabilities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integration Capabilities</CardTitle>
        <CardDescription>EHR and external system connections</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-md">
            <div className="p-2 bg-blue-100 rounded-md">
              <Database size={20} className="text-blue-700" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">EHR Data Integration</h4>
              <p className="text-xs text-muted-foreground mt-1">Connected to Epic Systems</p>
              <div className="mt-2 flex gap-2">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">FHIR</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">HL7</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Last synchronized: Today, 10:45 AM</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-md">
            <div className="p-2 bg-purple-100 rounded-md">
              <Share2 size={20} className="text-purple-700" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">Imaging Comparison</h4>
              <p className="text-xs text-muted-foreground mt-1">Connected to PACS System</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Mammography (3 months ago)</span>
                  <span className="text-blue-600 cursor-pointer">View</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Ultrasound (1 month ago)</span>
                  <span className="text-blue-600 cursor-pointer">View</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>MRI (6 months ago)</span>
                  <span className="text-blue-600 cursor-pointer">View</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-md">
            <div className="p-2 bg-amber-100 rounded-md">
              <FileText size={20} className="text-amber-700" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">Exportable Reports</h4>
              <p className="text-xs text-muted-foreground mt-1">Generate and export clinical reports</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200">
                  Tumor Board Report
                </button>
                <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200">
                  Clinical Summary
                </button>
                <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200">
                  Patient Handout
                </button>
                <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200">
                  Research Export
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationCapabilities;
