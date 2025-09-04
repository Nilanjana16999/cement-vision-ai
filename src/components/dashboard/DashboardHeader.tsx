import { Activity, Zap, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const DashboardHeader = () => {
  return (
    <div className="bg-gradient-industrial border-b border-border/50 shadow-industrial">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              AI Cement Plant Control Center
            </h1>
            <p className="text-muted-foreground">
              Real-time monitoring & AI-driven optimization powered by Google Cloud
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-status-optimal rounded-full animate-pulse-glow"></div>
            <span className="text-sm text-status-optimal font-medium">System Online</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-process border-border/50 shadow-glow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Efficiency</p>
                  <p className="text-2xl font-bold text-status-optimal">94.2%</p>
                </div>
                <Activity className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-process border-border/50 shadow-glow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Energy Consumption</p>
                  <p className="text-2xl font-bold text-warning">112.4 MW</p>
                </div>
                <Zap className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-process border-border/50 shadow-glow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Production Rate</p>
                  <p className="text-2xl font-bold text-primary">2,847 TPD</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-process border-border/50 shadow-glow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Alerts</p>
                  <p className="text-2xl font-bold text-status-critical">3</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-status-critical" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};