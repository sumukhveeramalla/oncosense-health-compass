
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Battery, TrendingUp } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ActivityTrends = () => {
  // Mock data for health trend
  const data = [
    { day: 'Mon', score: 75 },
    { day: 'Tue', score: 78 },
    { day: 'Wed', score: 76 },
    { day: 'Thu', score: 80 },
    { day: 'Fri', score: 82 },
    { day: 'Sat', score: 85 },
    { day: 'Sun', score: 87 }
  ];
  
  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <div className="h-1 activity-gradient" />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Activity & Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-32 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
              <YAxis domain={[50, 100]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  fontSize: '12px',
                  padding: '8px' 
                }}
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#20B2AA" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#20B2AA" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#20B2AA" 
                strokeWidth={2}
                fill="url(#scoreGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-between gap-3">
          <div className="flex-1 bg-muted/50 p-2 rounded-lg text-center">
            <div className="flex justify-center mb-1">
              <TrendingUp size={16} className="text-green-500" />
            </div>
            <p className="text-xs text-muted-foreground">Weekly Trend</p>
            <p className="text-sm font-medium">+12%</p>
          </div>
          
          <div className="flex-1 bg-muted/50 p-2 rounded-lg text-center">
            <div className="flex justify-center mb-1">
              <BarChart size={16} className="text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Monthly Average</p>
            <p className="text-sm font-medium">82/100</p>
          </div>
          
          <div className="flex-1 bg-muted/50 p-2 rounded-lg text-center">
            <div className="flex justify-center mb-1">
              <Battery size={16} className="text-blue-500" />
            </div>
            <p className="text-xs text-muted-foreground">Scan Streak</p>
            <p className="text-sm font-medium">6 days</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTrends;
