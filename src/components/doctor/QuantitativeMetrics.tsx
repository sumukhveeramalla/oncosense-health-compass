
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const QuantitativeMetrics = () => {
  // Sample data for metrics
  const structuralData = [
    { name: "Density", value: 45 },
    { name: "Elasticity", value: 62 },
    { name: "Thickness", value: 38 },
    { name: "Composition", value: 52 }
  ];

  const thermalData = [
    { name: "Region 1", value: 36.5 },
    { name: "Region 2", value: 37.2 },
    { name: "Region 3", value: 36.8 },
    { name: "Region 4", value: 36.7 }
  ];
  
  const bioimpedanceData = [
    { time: "Week 1", value: 240 },
    { time: "Week 2", value: 237 },
    { time: "Week 3", value: 250 },
    { time: "Week 4", value: 255 },
    { time: "Week 5", value: 245 },
    { time: "Week 6", value: 230 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quantitative Metrics</CardTitle>
        <CardDescription>Tissue measurement analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Tissue Structural Measurements</h4>
          <div className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={structuralData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Thermal Variation Map (°C)</h4>
          <div className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={thermalData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={10} />
                <YAxis domain={[36, 38]} fontSize={10} />
                <Tooltip />
                <Bar dataKey="value" fill="#ff7d7d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Bioimpedance Tracking (Ohms)</h4>
          <div className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bioimpedanceData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuantitativeMetrics;
