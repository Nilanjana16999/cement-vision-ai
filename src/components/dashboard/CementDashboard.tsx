import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { ProcessStageCard } from "./ProcessStageCard";
import { AIInsightsPanel } from "./AIInsightsPanel";
import { ProcessDetailModal } from "./ProcessDetailModal";
import { 
  Mountain, 
  Hammer, 
  Wheat, 
  Flame, 
  CircleDot, 
  Wind, 
  Settings, 
  Package, 
  TestTube, 
  Leaf 
} from "lucide-react";

interface ProcessStage {
  id: string;
  title: string;
  icon: typeof Mountain;
  status: "optimal" | "warning" | "critical" | "offline";
  efficiency: number;
  kpis: Array<{
    label: string;
    value: string;
    unit: string;
    status: "optimal" | "warning" | "critical";
    target?: string;
  }>;
  aiInsight: string;
  processColor: string;
}

const processStages: ProcessStage[] = [
  {
    id: "mining",
    title: "Mining & Raw Materials",
    icon: Mountain,
    status: "optimal",
    efficiency: 94,
    kpis: [
      { label: "Fuel Use", value: "2.4", unit: "L/t", status: "optimal", target: "2.5" },
      { label: "Blast Efficiency", value: "87", unit: "%", status: "optimal" },
      { label: "Stockpile Vol", value: "12,450", unit: "t", status: "warning" },
      { label: "Haul Distance", value: "3.2", unit: "km", status: "optimal" }
    ],
    aiInsight: "Drone monitoring suggests optimizing blast pattern for 15% reduction in secondary crushing",
    processColor: "hsl(var(--process-mining))"
  },
  {
    id: "crushing",
    title: "Crushing & Pre-homogenization",
    icon: Hammer,
    status: "warning",
    efficiency: 89,
    kpis: [
      { label: "Throughput", value: "485", unit: "t/h", status: "optimal", target: "500" },
      { label: "Vibration", value: "12.3", unit: "mm/s", status: "warning", target: "<10" },
      { label: "Power Draw", value: "2.1", unit: "MW", status: "optimal" },
      { label: "Mix Quality", value: "96", unit: "%", status: "optimal" }
    ],
    aiInsight: "Predictive maintenance indicates bearing replacement needed in crusher 2 within 72 hours",
    processColor: "hsl(var(--process-crushing))"
  },
  {
    id: "rawmeal",
    title: "Raw Meal Preparation",
    icon: Wheat,
    status: "optimal",
    efficiency: 96,
    kpis: [
      { label: "Mill Energy", value: "24.5", unit: "kWh/t", status: "optimal", target: "25" },
      { label: "Separator Eff", value: "78", unit: "%", status: "optimal" },
      { label: "LSF Index", value: "95.2", unit: "", status: "optimal", target: "95±2" },
      { label: "Fineness", value: "182", unit: "m²/kg", status: "optimal" }
    ],
    aiInsight: "RL optimization suggests increasing separator speed by 5% to improve energy efficiency",
    processColor: "hsl(var(--process-rawmeal))"
  },
  {
    id: "preheating",
    title: "Preheating & Pre-calcination",
    icon: Flame,
    status: "optimal",
    efficiency: 92,
    kpis: [
      { label: "Calcination", value: "89", unit: "%", status: "optimal", target: "85-95" },
      { label: "Fuel Flow", value: "18.2", unit: "t/h", status: "optimal" },
      { label: "CO₂ Emission", value: "845", unit: "kg/t", status: "warning" },
      { label: "Heat Recovery", value: "76", unit: "%", status: "optimal" }
    ],
    aiInsight: "Real-time optimization reducing fuel consumption by 3% while maintaining calcination quality",
    processColor: "hsl(var(--process-preheating))"
  },
  {
    id: "clinkerization",
    title: "Clinkerization (Rotary Kiln)",
    icon: CircleDot,
    status: "critical",
    efficiency: 88,
    kpis: [
      { label: "Temperature", value: "1485", unit: "°C", status: "warning", target: "1480" },
      { label: "Free Lime", value: "0.9", unit: "%", status: "optimal", target: "<1.5" },
      { label: "Fuel Mix", value: "82:18", unit: "Coal:AFR", status: "optimal" },
      { label: "Kiln Torque", value: "87", unit: "%", status: "critical" }
    ],
    aiInsight: "Digital twin model detects kiln ring formation risk - recommend coating adjustment protocol",
    processColor: "hsl(var(--process-clinkerization))"
  },
  {
    id: "cooling",
    title: "Clinker Cooling",
    icon: Wind,
    status: "optimal",
    efficiency: 91,
    kpis: [
      { label: "Outlet Temp", value: "85", unit: "°C", status: "optimal", target: "<100" },
      { label: "Grate Speed", value: "4.2", unit: "m/min", status: "optimal" },
      { label: "Heat Recovery", value: "68", unit: "%", status: "optimal" },
      { label: "Fan Power", value: "1.8", unit: "MW", status: "optimal" }
    ],
    aiInsight: "Cooling fan optimization achieving 12% energy savings while maintaining clinker quality",
    processColor: "hsl(var(--process-cooling))"
  },
  {
    id: "grinding",
    title: "Cement Grinding",
    icon: Settings,
    status: "optimal",
    efficiency: 93,
    kpis: [
      { label: "Power", value: "28.5", unit: "kWh/t", status: "optimal", target: "30" },
      { label: "Blaine", value: "385", unit: "m²/kg", status: "optimal", target: "380±20" },
      { label: "Gypsum %", value: "4.2", unit: "%", status: "optimal" },
      { label: "Mill Load", value: "32", unit: "%", status: "optimal" }
    ],
    aiInsight: "Separator auto-control optimizing fineness while reducing specific energy consumption",
    processColor: "hsl(var(--process-grinding))"
  },
  {
    id: "storage",
    title: "Storage & Packing",
    icon: Package,
    status: "optimal",
    efficiency: 97,
    kpis: [
      { label: "Silo Level", value: "78", unit: "%", status: "optimal" },
      { label: "Pack Rate", value: "145", unit: "bags/min", status: "optimal", target: "150" },
      { label: "Reject Rate", value: "0.8", unit: "%", status: "optimal", target: "<1" },
      { label: "Weight Acc", value: "±0.2", unit: "kg", status: "optimal" }
    ],
    aiInsight: "Vision QC system reducing bag defects by 45% compared to manual inspection",
    processColor: "hsl(var(--process-storage))"
  },
  {
    id: "quality",
    title: "Quality Control & Lab",
    icon: TestTube,
    status: "optimal",
    efficiency: 95,
    kpis: [
      { label: "7-day Strength", value: "42.5", unit: "MPa", status: "optimal", target: ">40" },
      { label: "28-day Pred", value: "58.2", unit: "MPa", status: "optimal" },
      { label: "XRF Accuracy", value: "99.2", unit: "%", status: "optimal" },
      { label: "Test Cycle", value: "18", unit: "min", status: "optimal" }
    ],
    aiInsight: "Predictive strength model achieving 95% accuracy, reducing lab testing by 30%",
    processColor: "hsl(var(--process-quality))"
  },
  {
    id: "emissions",
    title: "Emission Control",
    icon: Leaf,
    status: "warning",
    efficiency: 86,
    kpis: [
      { label: "CO₂", value: "865", unit: "kg/t", status: "warning", target: "<850" },
      { label: "NOx", value: "1,285", unit: "mg/Nm³", status: "optimal", target: "<1300" },
      { label: "Dust", value: "8.5", unit: "mg/Nm³", status: "optimal", target: "<10" },
      { label: "AFR Usage", value: "18.5", unit: "%", status: "optimal" }
    ],
    aiInsight: "Emission forecasting suggests increasing AFR ratio to 22% to meet CO₂ reduction targets",
    processColor: "hsl(var(--process-emissions))"
  }
];

export const CementDashboard = () => {
  const [selectedProcess, setSelectedProcess] = useState<ProcessStage | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Process Stages Grid */}
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processStages.map((stage) => (
                <ProcessStageCard
                  key={stage.id}
                  title={stage.title}
                  icon={stage.icon}
                  status={stage.status}
                  efficiency={stage.efficiency}
                  kpis={stage.kpis}
                  aiInsight={stage.aiInsight}
                  processColor={stage.processColor}
                  onClick={() => setSelectedProcess(stage)}
                />
              ))}
            </div>
          </div>
          
          {/* AI Insights Panel */}
          <div className="xl:col-span-1">
            <AIInsightsPanel />
          </div>
        </div>
      </div>
      
      {/* Process Detail Modal */}
      {selectedProcess && (
        <ProcessDetailModal
          isOpen={!!selectedProcess}
          onClose={() => setSelectedProcess(null)}
          processName={selectedProcess.title}
          processColor={selectedProcess.processColor}
        />
      )}
    </div>
  );
};