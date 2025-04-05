
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const TreatmentMonitoring = () => {
  // Sample healing progress data
  const healingData = [
    { week: 1, value: 10 },
    { week: 2, value: 25 },
    { week: 3, value: 40 },
    { week: 4, value: 55 },
    { week: 5, value: 70 },
    { week: 6, value: 85 },
    { week: 7, value: 92 },
    { week: 8, value: 95 },
  ];
  
  // Sample therapy response data
  const therapyResponseData = [
    { month: "Jan", value: 85 },
    { month: "Feb", value: 75 },
    { month: "Mar", value: 65 },
    { month: "Apr", value: 58 },
    { month: "May", value: 52 },
    { month: "Jun", value: 48 },
    { month: "Jul", value: 45 },
    { month: "Aug", value: 42 },
    { month: "Sep", value: 40 },
  ];
  
  // Sample recurrence monitoring data
  const recurrenceData = [
    { month: "Jan", value: 5 },
    { month: "Feb", value: 5 },
    { month: "Mar", value: 6 },
    { month: "Apr", value: 5 },
    { month: "May", value: 7 },
    { month: "Jun", value: 8 },
    { month: "Jul", value: 10 },
    { month: "Aug", value: 12 },
    { month: "Sep", value: 14 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Treatment Monitoring</CardTitle>
        <CardDescription>Track treatment efficacy and recovery metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="healing">
          <TabsList className="mb-4">
            <TabsTrigger value="healing">Post-Surgical Healing</TabsTrigger>
            <TabsTrigger value="therapy">Therapy Response</TabsTrigger>
            <TabsTrigger value="recurrence">Recurrence Monitoring</TabsTrigger>
          </TabsList>
          
          <TabsContent value="healing">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Overall Healing Progress</h4>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Tissue Integrity</h4>
                  <Progress value={92} className="h-2" />
                  <span className="text-xs text-muted-foreground">92% restored</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Inflammation</h4>
                  <Progress value={88} className="h-2" />
                  <span className="text-xs text-muted-foreground">88% reduced</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Circulation</h4>
                  <Progress value={96} className="h-2" />
                  <span className="text-xs text-muted-foreground">96% normal</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Nerve Function</h4>
                  <Progress value={85} className="h-2" />
                  <span className="text-xs text-muted-foreground">85% restored</span>
                </div>
              </div>
              
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={healingData} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" label={{ value: 'Weeks', position: 'insideBottom', offset: -5 }} />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#22c55e" dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="therapy">
            <div className="space-y-4">
              <div className="border rounded-md p-3">
                <h4 className="text-sm font-medium mb-2">Tumor Response Metrics</h4>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <span className="text-xs text-muted-foreground">Size Reduction</span>
                    <p className="text-sm font-medium">-53% <span className="text-green-500 text-xs">(Excellent)</span></p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Density Change</span>
                    <p className="text-sm font-medium">-42% <span className="text-green-500 text-xs">(Good)</span></p>
                  </div>
                </div>
              </div>
              
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={therapyResponseData} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="text-center text-xs text-muted-foreground mt-2">
                  Treatment efficacy over time (lower values indicate positive response)
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recurrence">
            <div className="space-y-4">
              <div className="border rounded-md p-3">
                <h4 className="text-sm font-medium mb-2">Risk Monitoring</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-amber-500">14%</span>
                    <span className="text-xs text-muted-foreground">Current Risk</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-green-500">5%</span>
                    <span className="text-xs text-muted-foreground">Baseline</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-red-500">+9%</span>
                    <span className="text-xs text-muted-foreground">Change</span>
                  </div>
                </div>
              </div>
              
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={recurrenceData} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 20]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="text-center text-xs text-muted-foreground mt-2">
                  Recurrence risk indicators over time
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TreatmentMonitoring;
