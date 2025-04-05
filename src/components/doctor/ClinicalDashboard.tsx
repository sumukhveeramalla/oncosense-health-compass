
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ClinicalDashboard = () => {
  // Sample patient data
  const patients = [
    { id: 1, name: "Emily Thompson", age: 42, riskScore: 85, riskLevel: "High", change: "+5", compliance: "Good" },
    { id: 2, name: "Maria Garcia", age: 38, riskScore: 35, riskLevel: "Low", change: "0", compliance: "Excellent" },
    { id: 3, name: "Sarah Johnson", age: 51, riskScore: 62, riskLevel: "Moderate", change: "-2", compliance: "Fair" },
    { id: 4, name: "Linda Chen", age: 45, riskScore: 28, riskLevel: "Low", change: "0", compliance: "Good" },
    { id: 5, name: "Jennifer Taylor", age: 55, riskScore: 92, riskLevel: "Critical", change: "+12", compliance: "Poor" },
  ];

  const getRiskBadge = (riskLevel: string) => {
    switch (riskLevel) {
      case "Low":
        return <Badge className="bg-green-500">Low</Badge>;
      case "Moderate":
        return <Badge className="bg-yellow-500">Moderate</Badge>;
      case "High":
        return <Badge className="bg-red-500">High</Badge>;
      case "Critical":
        return <Badge className="bg-red-700 animate-pulse">Critical</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getChangeIndicator = (change: string) => {
    const value = parseInt(change);
    if (value > 0) return <span className="text-red-500">+{value} ↑</span>;
    if (value < 0) return <span className="text-green-500">{value} ↓</span>;
    return <span className="text-gray-500">0</span>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Roster</CardTitle>
        <CardDescription>Risk stratification and monitoring</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Risk Score</TableHead>
              <TableHead>Risk Level</TableHead>
              <TableHead>Recent Change</TableHead>
              <TableHead>Compliance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id} className={patient.riskLevel === "Critical" ? "bg-red-50" : ""}>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.riskScore}</TableCell>
                <TableCell>{getRiskBadge(patient.riskLevel)}</TableCell>
                <TableCell>{getChangeIndicator(patient.change)}</TableCell>
                <TableCell>{patient.compliance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ClinicalDashboard;
