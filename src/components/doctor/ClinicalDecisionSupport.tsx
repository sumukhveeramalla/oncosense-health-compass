
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClinicalDecisionSupport = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clinical Decision Support</CardTitle>
        <CardDescription>Evidence-based recommendations</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="riskFactors">
          <TabsList className="mb-4">
            <TabsTrigger value="riskFactors">Risk Factors</TabsTrigger>
            <TabsTrigger value="similarCases">Similar Cases</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="riskFactors" className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                <span className="text-sm font-medium">Age Factor</span>
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Moderate Impact</div>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                <span className="text-sm font-medium">Family History</span>
                <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">High Impact</div>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                <span className="text-sm font-medium">Hormonal Factors</span>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Low Impact</div>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                <span className="text-sm font-medium">Tissue Density</span>
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Moderate Impact</div>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                <span className="text-sm font-medium">Previous Biopsies</span>
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Moderate Impact</div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="similarCases">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-md">
                <div className="w-16 h-16 bg-slate-200 rounded-md flex items-center justify-center text-xs text-slate-500">Case #8721</div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">93% Similarity</h4>
                  <p className="text-xs text-muted-foreground mt-1">51-year-old female, dense tissue pattern, similar thermal signature</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Diagnostic Imaging</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Biopsy</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-md">
                <div className="w-16 h-16 bg-slate-200 rounded-md flex items-center justify-center text-xs text-slate-500">Case #9045</div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">87% Similarity</h4>
                  <p className="text-xs text-muted-foreground mt-1">48-year-old female, comparable bioimpedance values</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Follow-up</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Benign</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-md">
                <div className="w-16 h-16 bg-slate-200 rounded-md flex items-center justify-center text-xs text-slate-500">Case #7634</div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">78% Similarity</h4>
                  <p className="text-xs text-muted-foreground mt-1">55-year-old female, similar structural patterns</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">MRI Recommended</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recommendations">
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-3 py-1">
                <h4 className="text-sm font-medium">Primary Recommendation</h4>
                <p className="text-xs text-muted-foreground mt-1">Schedule diagnostic mammogram within 2 weeks</p>
                <div className="mt-1 text-xs text-blue-600">Evidence Level: A</div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-3 py-1">
                <h4 className="text-sm font-medium">Alternative Approach</h4>
                <p className="text-xs text-muted-foreground mt-1">Ultrasound-guided assessment of region of interest</p>
                <div className="mt-1 text-xs text-green-600">Evidence Level: B</div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-3 py-1">
                <h4 className="text-sm font-medium">Further Evaluation</h4>
                <p className="text-xs text-muted-foreground mt-1">Consider MRI for additional tissue characterization</p>
                <div className="mt-1 text-xs text-purple-600">Evidence Level: B</div>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-3 py-1">
                <h4 className="text-sm font-medium">Follow-up Plan</h4>
                <p className="text-xs text-muted-foreground mt-1">Repeat OncoSense monitoring in 30 days</p>
                <div className="mt-1 text-xs text-orange-600">Practice Recommendation</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ClinicalDecisionSupport;
