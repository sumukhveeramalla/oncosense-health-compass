
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const LongitudinalAnalysis = () => {
  // Sample data for longitudinal analysis
  const timeSeriesData = [
    { month: "Jan", value: 28, predictedValue: 29 },
    { month: "Feb", value: 32, predictedValue: 34 },
    { month: "Mar", value: 35, predictedValue: 38 },
    { month: "Apr", value: 40, predictedValue: 42 },
    { month: "May", value: 45, predictedValue: 47 },
    { month: "Jun", value: 50, predictedValue: 52 },
    { month: "Jul", value: 55, predictedValue: 56 },
    { month: "Aug", value: 53, predictedValue: 59 },
    { month: "Sep", value: 58, predictedValue: 61 },
    { month: "Oct", value: 62, predictedValue: 64 },
    { month: "Nov", value: 65, predictedValue: 67 },
    { month: "Dec", value: 64, predictedValue: 70 },
  ];

  const densityTrendData = [
    { month: "Jan", value: 1.02 },
    { month: "Feb", value: 1.03 },
    { month: "Mar", value: 1.05 },
    { month: "Apr", value: 1.07 },
    { month: "May", value: 1.08 },
    { month: "Jun", value: 1.06 },
    { month: "Jul", value: 1.07 },
    { month: "Aug", value: 1.08 },
    { month: "Sep", value: 1.10 },
    { month: "Oct", value: 1.11 },
    { month: "Nov", value: 1.12 },
    { month: "Dec", value: 1.11 },
  ];

  const elasticityTrendData = [
    { month: "Jan", value: 0.42 },
    { month: "Feb", value: 0.41 },
    { month: "Mar", value: 0.40 },
    { month: "Apr", value: 0.39 },
    { month: "May", value: 0.38 },
    { month: "Jun", value: 0.39 },
    { month: "Jul", value: 0.37 },
    { month: "Aug", value: 0.36 },
    { month: "Sep", value: 0.35 },
    { month: "Oct", value: 0.34 },
    { month: "Nov", value: 0.33 },
    { month: "Dec", value: 0.32 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Longitudinal Analysis</CardTitle>
        <CardDescription>Long-term change visualization</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="growth">
          <TabsList className="mb-4">
            <TabsTrigger value="growth">Growth Rate</TabsTrigger>
            <TabsTrigger value="density">Density Trends</TabsTrigger>
            <TabsTrigger value="elasticity">Elasticity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="growth">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSeriesData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    name="Measured Value" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predictedValue" 
                    stroke="#82ca9d" 
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    name="Predicted Trend" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <div className="flex justify-between items-center">
                <div>
                  <span className="inline-block w-3 h-3 rounded-full bg-[#8884d8] mr-2"></span>
                  <span>Measured Growth Rate</span>
                </div>
                <div>
                  <span className="inline-block w-3 h-3 rounded-full bg-[#82ca9d] mr-2"></span>
                  <span>Predicted Trajectory</span>
                </div>
              </div>
              <p className="mt-2">Predictive analysis indicates a 14% annual change rate based on the current trajectory.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="density">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={densityTrendData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0.95, 1.2]} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ff7300" 
                    fill="#ff7300" 
                    fillOpacity={0.3}
                    name="Tissue Density" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Density measurements show a consistent upward trend over the 12-month period, with an 8.8% total increase.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="elasticity">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={elasticityTrendData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0.3, 0.5]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Elasticity Coefficient" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Tissue elasticity coefficient has decreased by 23.8% over the observed period, indicating significant tissue property changes.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LongitudinalAnalysis;
