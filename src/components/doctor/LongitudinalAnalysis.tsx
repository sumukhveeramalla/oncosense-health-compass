
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LongitudinalAnalysis = () => {
  // Sample data for longitudinal changes
  const longTermData = [
    { month: 'Jan', value: 45, threshold: 50 },
    { month: 'Feb', value: 48, threshold: 50 },
    { month: 'Mar', value: 52, threshold: 50 },
    { month: 'Apr', value: 55, threshold: 50 },
    { month: 'May', value: 59, threshold: 50 },
    { month: 'Jun', value: 62, threshold: 50 },
    { month: 'Jul', value: 60, threshold: 50 },
    { month: 'Aug', value: 58, threshold: 50 },
    { month: 'Sep', value: 63, threshold: 50 },
    { month: 'Oct', value: 65, threshold: 50 },
    { month: 'Nov', value: 68, threshold: 50 },
    { month: 'Dec', value: 72, threshold: 50 },
  ];
  
  const growthRates = [
    { period: '2022 Q1', value: 0.5 },
    { period: '2022 Q2', value: 0.7 },
    { period: '2022 Q3', value: 1.2 },
    { period: '2022 Q4', value: 2.1 },
    { period: '2023 Q1', value: 3.4 },
    { period: '2023 Q2', value: 3.8 },
    { period: '2023 Q3', value: 4.2 },
    { period: '2023 Q4', value: 4.0 },
  ];
  
  // Predictive trend data showing forecasted values
  const predictiveData = [
    { month: 'Jan', actual: 72, predicted: null },
    { month: 'Feb', actual: 74, predicted: null },
    { month: 'Mar', actual: 76, predicted: null },
    { month: 'Apr', actual: null, predicted: 78 },
    { month: 'May', actual: null, predicted: 80 },
    { month: 'Jun', actual: null, predicted: 81 },
    { month: 'Jul', actual: null, predicted: 83 },
    { month: 'Aug', actual: null, predicted: 85 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Longitudinal Analysis</CardTitle>
        <CardDescription>Long-term changes and predictive trends</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="changes">
          <TabsList className="mb-4">
            <TabsTrigger value="changes">Long-Term Changes</TabsTrigger>
            <TabsTrigger value="growth">Growth Rates</TabsTrigger>
            <TabsTrigger value="predictive">Predictive Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="changes">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Annual Progression</h4>
                <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  +27 points over 12 months
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={longTermData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[30, 80]} />
                    <Tooltip />
                    <ReferenceLine y={50} stroke="red" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="text-xs text-muted-foreground">
                <span className="inline-block w-3 h-3 bg-red-400 mr-1"></span> Intervention threshold (score of 50)
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="growth">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Calculated Growth Rates (%/month)</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={growthRates} margin={{ top: 5, right: 5, bottom: 20, left: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" angle={-45} textAnchor="end" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="p-2 bg-blue-50 rounded-md text-xs">
                <strong>Analysis:</strong> Growth rate has increased from 0.5% to 4.0% per month over the past 8 quarters, indicating accelerating change that warrants monitoring.
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="predictive">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">3-Month Projection</h4>
                <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                  Predicted to exceed threshold
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={predictiveData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[65, 90]} />
                    <Tooltip />
                    <ReferenceLine y={80} stroke="red" label="Critical Threshold" />
                    <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} name="Actual" />
                    <Line type="monotone" dataKey="predicted" stroke="#f97316" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3 }} name="Predicted" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="p-2 bg-amber-50 rounded-md">
                <h5 className="text-xs font-medium text-amber-800">Recommendation</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Based on predictive analysis, consider intervention within 45 days to prevent progression beyond critical threshold.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LongitudinalAnalysis;
