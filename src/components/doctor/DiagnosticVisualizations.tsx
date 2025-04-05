
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DiagnosticVisualizations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Diagnostic Visualizations</CardTitle>
        <CardDescription>Multi-modal imaging analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList className="mb-4">
            <TabsTrigger value="current">Current Scan</TabsTrigger>
            <TabsTrigger value="history">Historical</TabsTrigger>
            <TabsTrigger value="roi">Region of Interest</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="space-y-4">
            <div className="aspect-video rounded-md bg-slate-100 flex items-center justify-center border">
              <div className="text-center p-4">
                <p className="text-muted-foreground">Thermal + Ultrasound Visualization</p>
                <div className="h-32 bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 rounded-md mt-2 opacity-60"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded bg-slate-100 flex items-center justify-center border">
                <span className="text-xs text-muted-foreground">Structural</span>
              </div>
              <div className="aspect-square rounded bg-slate-100 flex items-center justify-center border">
                <span className="text-xs text-muted-foreground">Thermal</span>
              </div>
              <div className="aspect-square rounded bg-slate-100 flex items-center justify-center border">
                <span className="text-xs text-muted-foreground">Impedance</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Timeline Comparison</span>
                <select className="text-xs border rounded p-1">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                  <option>All history</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6].map((month) => (
                  <div key={month} className="aspect-square bg-slate-100 rounded-md p-1 text-xs flex flex-col items-center justify-center border">
                    <span className="text-muted-foreground font-medium">{month} mo ago</span>
                    <div className="w-full h-10 bg-gradient-to-r from-blue-200 to-blue-300 opacity-40 rounded mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="roi">
            <div className="aspect-video bg-slate-100 rounded-md border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100"></div>
              <div className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full border-2 border-red-500 animate-pulse opacity-70"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full border-2 border-yellow-500 opacity-70"></div>
              <div className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full border-2 border-green-500 opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Region of Interest Highlighting</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DiagnosticVisualizations;
