import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface KPI {
  label: string;
  value: string;
  unit: string;
  status: "optimal" | "warning" | "critical";
  target?: string;
}

interface ProcessStageCardProps {
  title: string;
  icon: LucideIcon;
  status: "optimal" | "warning" | "critical" | "offline";
  efficiency: number;
  kpis: KPI[];
  aiInsight: string;
  processColor: string;
  onClick?: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "optimal": return "text-status-optimal bg-status-optimal/10";
    case "warning": return "text-status-warning bg-status-warning/10";
    case "critical": return "text-status-critical bg-status-critical/10";
    case "offline": return "text-status-offline bg-status-offline/10";
    default: return "text-muted-foreground bg-muted/10";
  }
};

export const ProcessStageCard = ({
  title,
  icon: Icon,
  status,
  efficiency,
  kpis,
  aiInsight,
  processColor,
  onClick
}: ProcessStageCardProps) => {
  return (
    <Card 
      className="bg-gradient-process border-border/50 shadow-industrial hover:shadow-glow transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Icon className="w-5 h-5" style={{ color: processColor }} />
            {title}
          </CardTitle>
          <Badge variant="outline" className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Efficiency Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Efficiency</span>
            <span className="font-medium text-foreground">{efficiency}%</span>
          </div>
          <Progress value={efficiency} className="h-2" />
        </div>
        
        {/* KPIs Grid */}
        <div className="grid grid-cols-2 gap-3">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">{kpi.label}</p>
              <div className="flex items-baseline gap-1">
                <span 
                  className={`text-sm font-bold ${
                    kpi.status === "optimal" ? "text-status-optimal" :
                    kpi.status === "warning" ? "text-status-warning" :
                    "text-status-critical"
                  }`}
                >
                  {kpi.value}
                </span>
                <span className="text-xs text-muted-foreground">{kpi.unit}</span>
              </div>
              {kpi.target && (
                <p className="text-xs text-muted-foreground mt-1">Target: {kpi.target}</p>
              )}
            </div>
          ))}
        </div>
        
        {/* AI Insight */}
        <div className="bg-ai-panel/20 border border-ai-accent/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-ai-accent rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-ai-accent">AI Insight</span>
          </div>
          <p className="text-xs text-ai-foreground">{aiInsight}</p>
        </div>
      </CardContent>
    </Card>
  );
};