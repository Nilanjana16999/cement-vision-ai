import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertCircle, Lightbulb } from "lucide-react";

interface AIInsight {
  type: "optimization" | "prediction" | "alert" | "recommendation";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  confidence: number;
  timestamp: string;
}

const insights: AIInsight[] = [
  {
    type: "optimization",
    title: "Kiln Fuel Optimization",
    description: "AI model suggests reducing coal feed by 3% and increasing AFR ratio to 15% for optimal energy efficiency.",
    impact: "high",
    confidence: 94,
    timestamp: "2 min ago"
  },
  {
    type: "prediction",
    title: "Crusher Maintenance Alert",
    description: "Predictive model forecasts bearing replacement needed in crusher unit 2 within 72 hours based on vibration patterns.",
    impact: "medium",
    confidence: 87,
    timestamp: "5 min ago"
  },
  {
    type: "alert",
    title: "Emission Threshold Warning",
    description: "NOx levels approaching regulatory limits. Recommend activating SNCR system and adjusting combustion air flow.",
    impact: "high",
    confidence: 91,
    timestamp: "8 min ago"
  },
  {
    type: "recommendation",
    title: "Raw Mix Adjustment",
    description: "LSF trending high - recommend increasing limestone proportion by 1.2% in next batch to maintain chemistry targets.",
    impact: "medium",
    confidence: 89,
    timestamp: "12 min ago"
  }
];

const getInsightIcon = (type: string) => {
  switch (type) {
    case "optimization": return TrendingUp;
    case "prediction": return Brain;
    case "alert": return AlertCircle;
    case "recommendation": return Lightbulb;
    default: return Brain;
  }
};

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "high": return "text-status-critical bg-status-critical/10";
    case "medium": return "text-status-warning bg-status-warning/10";
    case "low": return "text-status-optimal bg-status-optimal/10";
    default: return "text-muted-foreground bg-muted/10";
  }
};

export const AIInsightsPanel = () => {
  return (
    <Card className="bg-gradient-ai border-ai-accent/30 shadow-ai">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-ai-foreground flex items-center gap-2">
          <Brain className="w-6 h-6 text-ai-accent" />
          Gemini AI Insights & Recommendations
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = getInsightIcon(insight.type);
          
          return (
            <div 
              key={index}
              className="bg-ai-panel/40 border border-ai-accent/20 rounded-lg p-4 hover:bg-ai-panel/60 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-ai-accent" />
                  <span className="font-medium text-ai-foreground">{insight.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getImpactColor(insight.impact)}>
                    {insight.impact} impact
                  </Badge>
                  <span className="text-xs text-ai-foreground/70">{insight.timestamp}</span>
                </div>
              </div>
              
              <p className="text-sm text-ai-foreground/90 mb-3">{insight.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-ai-foreground/70">Confidence:</span>
                  <div className="flex items-center gap-1">
                    <div className="w-16 h-2 bg-ai-panel/60 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-ai-accent rounded-full"
                        style={{ width: `${insight.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-ai-accent">{insight.confidence}%</span>
                  </div>
                </div>
                
                <button className="text-xs text-ai-accent hover:text-ai-accent/80 transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          );
        })}
        
        <div className="border-t border-ai-accent/20 pt-4">
          <div className="flex items-center justify-center gap-2 text-sm text-ai-foreground/70">
            <div className="w-2 h-2 bg-ai-accent rounded-full animate-pulse"></div>
            <span>Powered by Google Cloud Vertex AI & Gemini</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};