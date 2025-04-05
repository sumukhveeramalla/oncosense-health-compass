
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Chart } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TreatmentMonitoring = () => {
  // Sample treatment response data
  const responseData = [
    { week: 'Week 1', value: 80 },
    { week: 'Week 2', value: 75 },
    { week: 'Week 3', value: 65 },
    { week: 'Week 4', value: 62 },
    { week: 'Week 5', value: 50 },
    { week: 'Week 6', value: 48 },
    { week: 'Week 7', value: 45 },
    { week: 'Week 8', value: 40 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Treatment Monitoring</CardTitle>
        <CardDescription>Therapy response and recovery tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Chart size={16} className="text-blue-500" />
                Response to Therapy
              </h4>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Positive Trend</span>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" fontSize={10} />
                  <YAxis domain={[0, 100]} fontSize={10} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Post-Surgical Healing Metrics</h4>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Tissue Recovery</span>
                  <span className="text-xs font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Inflammation Reduction</span>
                  <span className="text-xs font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Circulation Improvement</span>
                  <span className="text-xs font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Recurrence Monitoring</h4>
              
              <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
                <span className="text-xs">Primary Site</span>
                <span className="text-xs font-medium text-green-700">No Indicators</span>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
                <span className="text-xs">Adjacent Tissue</span>
                <span className="text-xs font-medium text-green-700">Clear</span>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-md">
                <span className="text-xs">Surgical Margins</span>
                <span className="text-xs font-medium text-yellow-700">Monitor</span>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
                <span className="text-xs">Lymphatic Regions</span>
                <span className="text-xs font-medium text-green-700">No Indicators</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TreatmentMonitoring;
