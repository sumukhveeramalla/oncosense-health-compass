
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Calendar, Signal } from "lucide-react";

const MonitoringMetrics = () => {
  // Mock data for device health
  const batteryLevel = 78;
  const signalStrength = 92;
  const nextScanDate = "Tomorrow, 9:00 AM";
  
  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <div className="h-1 monitoring-gradient" />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Monitoring Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-lg">
            <div className="bg-white p-1.5 rounded-full">
              <Battery size={18} className="text-green-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Device Battery</p>
              <p className="text-sm font-medium">{batteryLevel}%</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-lg">
            <div className="bg-white p-1.5 rounded-full">
              <Signal size={18} className="text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Signal</p>
              <p className="text-sm font-medium">{signalStrength}%</p>
            </div>
          </div>
        </div>
        
        <div className="mt-3 bg-muted/50 p-3 rounded-lg flex items-center gap-3">
          <div className="bg-white p-2 rounded-full">
            <Calendar size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Next Deep Scan</p>
            <p className="text-sm font-medium">{nextScanDate}</p>
          </div>
        </div>
        
        <div className="mt-3">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xs text-muted-foreground">Daily Scan Compliance</p>
            <span className="text-xs font-medium text-green-500">6/7 days</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div 
                key={day+i} 
                className={`h-1.5 rounded-full ${i !== 5 ? 'bg-green-500' : 'bg-gray-200'}`}
              />
            ))}
            <div className="col-span-7 flex justify-between mt-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <span key={day+i} className="text-[10px] text-muted-foreground">{day}</span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonitoringMetrics;
