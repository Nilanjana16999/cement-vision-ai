import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Thermometer, Gauge, Zap, TrendingUp } from "lucide-react";

interface ProcessDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  processName: string;
  processColor: string;
}

// Sample data for different chart types
const temperatureData = [
  { time: "00:00", value: 1450, target: 1480 },
  { time: "04:00", value: 1465, target: 1480 },
  { time: "08:00", value: 1472, target: 1480 },
  { time: "12:00", value: 1481, target: 1480 },
  { time: "16:00", value: 1478, target: 1480 },
  { time: "20:00", value: 1485, target: 1480 },
];

const fuelConsumptionData = [
  { hour: "00", coal: 45, afr: 12, natural_gas: 8 },
  { hour: "04", coal: 43, afr: 14, natural_gas: 7 },
  { hour: "08", coal: 42, afr: 15, natural_gas: 6 },
  { hour: "12", coal: 41, afr: 16, natural_gas: 5 },
  { hour: "16", coal: 40, afr: 17, natural_gas: 4 },
  { hour: "20", coal: 39, afr: 18, natural_gas: 3 },
];

const efficiencyData = [
  { time: "00:00", efficiency: 89 },
  { time: "04:00", efficiency: 91 },
  { time: "08:00", efficiency: 94 },
  { time: "12:00", efficiency: 96 },
  { time: "16:00", efficiency: 95 },
  { time: "20:00", efficiency: 97 },
];

export const ProcessDetailModal = ({ isOpen, onClose, processName, processColor }: ProcessDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-industrial border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: processColor }}
            />
            {processName} - Detailed Analysis
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Real-time Temperature Monitoring */}
          <Card className="bg-gradient-process border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Thermometer className="w-5 h-5 text-status-critical" />
                Temperature Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Line type="monotone" dataKey="value" stroke={processColor} strokeWidth={3} />
                  <Line type="monotone" dataKey="target" stroke="hsl(var(--muted-foreground))" strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex justify-between mt-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Current</p>
                  <p className="text-lg font-bold text-status-critical">1485°C</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Target</p>
                  <p className="text-lg font-bold text-muted-foreground">1480°C</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Variance</p>
                  <p className="text-lg font-bold text-status-warning">+5°C</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Fuel Consumption Analysis */}
          <Card className="bg-gradient-process border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="w-5 h-5 text-warning" />
                Fuel Mix Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={fuelConsumptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="coal" fill="hsl(var(--muted))" />
                  <Bar dataKey="afr" fill="hsl(var(--process-emissions))" />
                  <Bar dataKey="natural_gas" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-between mt-4">
                <Badge variant="outline" className="text-muted bg-muted/10">
                  Coal: 39 t/h
                </Badge>
                <Badge variant="outline" className="text-process-emissions bg-process-emissions/10">
                  AFR: 18%
                </Badge>
                <Badge variant="outline" className="text-primary bg-primary/10">
                  Gas: 3 m³/h
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Efficiency Trend */}
          <Card className="bg-gradient-process border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-status-optimal" />
                Efficiency Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={efficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="efficiency" 
                    stroke="hsl(var(--status-optimal))" 
                    fill="hsl(var(--status-optimal) / 0.3)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-status-optimal/10 rounded-lg border border-status-optimal/30">
                <p className="text-sm text-status-optimal font-medium mb-1">AI Optimization Impact</p>
                <p className="text-xs text-muted-foreground">
                  Efficiency improved by 8% over last 24 hours through automated adjustments
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Control Parameters */}
          <Card className="bg-gradient-process border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Gauge className="w-5 h-5 text-primary" />
                Live Control Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground mb-2">Kiln Speed</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">3.2</span>
                    <span className="text-sm text-muted-foreground">rpm</span>
                  </div>
                  <p className="text-xs text-status-optimal mt-1">Optimal Range</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground mb-2">Draft Pressure</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-warning">-18.5</span>
                    <span className="text-sm text-muted-foreground">mbar</span>
                  </div>
                  <p className="text-xs text-status-warning mt-1">Near Limit</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground mb-2">O₂ Content</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-status-optimal">2.8</span>
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                  <p className="text-xs text-status-optimal mt-1">Target Range</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground mb-2">Free Lime</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-status-optimal">0.9</span>
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                  <p className="text-xs text-status-optimal mt-1">Excellent Quality</p>
                </div>
              </div>
              
              <div className="bg-ai-panel/20 border border-ai-accent/30 rounded-lg p-3">
                <p className="text-sm font-medium text-ai-accent mb-1">Autonomous Control Active</p>
                <p className="text-xs text-ai-foreground/80">
                  AI agent is automatically adjusting parameters for optimal performance. Manual override available.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};