
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

const NotificationCenter = () => {
  // Mock notification data
  const notifications = [
    {
      id: 1,
      type: "reminder",
      message: "Time for your daily scan",
      time: "2 hours ago",
      icon: Clock,
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      type: "success",
      message: "Scan results processed successfully",
      time: "Yesterday",
      icon: CheckCircle,
      iconColor: "text-green-500"
    },
    {
      id: 3,
      type: "alert",
      message: "Follow-up recommended for symptom report",
      time: "2 days ago",
      icon: AlertCircle,
      iconColor: "text-yellow-500"
    }
  ];
  
  return (
    <Card className="shadow-md border-0 overflow-hidden">
      <div className="h-1 notification-gradient" />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Notification Center</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map(notification => (
            <div key={notification.id} className="flex gap-3 p-2 border-b border-gray-100 last:border-0">
              <div className={`p-1.5 rounded-full h-fit bg-white`}>
                <notification.icon size={16} className={notification.iconColor} />
              </div>
              <div>
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCenter;
