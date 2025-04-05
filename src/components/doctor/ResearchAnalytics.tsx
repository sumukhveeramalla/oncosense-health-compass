
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ResearchAnalytics = () => {
  // Sample population data
  const demographicData = [
    { name: '30-40', value: 25 },
    { name: '41-50', value: 35 },
    { name: '51-60', value: 30 },
    { name: '61+', value: 10 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const treatmentData = [
    { name: 'Protocol A', success: 65, failure: 35 },
    { name: 'Protocol B', success: 75, failure: 25 },
    { name: 'Protocol C', success: 45, failure: 55 },
    { name: 'Protocol D', success: 80, failure: 20 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Analytics</CardTitle>
        <CardDescription>Anonymized population insights</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Demographic Distribution</h4>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demographicData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {demographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Treatment Efficacy Metrics</h4>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={treatmentData}
                  margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={10} />
                  <YAxis fontSize={10} />
                  <Tooltip />
                  <Bar dataKey="success" fill="#4ade80" stackId="a" />
                  <Bar dataKey="failure" fill="#f87171" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Pattern Identification</h4>
            <div className="border rounded-md p-2">
              <h5 className="text-xs font-medium text-blue-700">Key Finding #1</h5>
              <p className="text-xs text-muted-foreground mt-1">
                Patients with adherence to daily monitoring show 27% improved detection rates
              </p>
            </div>
            <div className="border rounded-md p-2">
              <h5 className="text-xs font-medium text-blue-700">Key Finding #2</h5>
              <p className="text-xs text-muted-foreground mt-1">
                Correlation between thermal variations and early-stage detection in 42% of cases
              </p>
            </div>
            <div className="border rounded-md p-2">
              <h5 className="text-xs font-medium text-blue-700">Key Finding #3</h5>
              <p className="text-xs text-muted-foreground mt-1">
                Bioimpedance changes preceded standard imaging findings by average of 30 days
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchAnalytics;
