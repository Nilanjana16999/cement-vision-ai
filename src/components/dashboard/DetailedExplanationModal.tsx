import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Cloud, 
  Factory, 
  Cpu, 
  Database, 
  Zap, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Layers,
  Settings
} from 'lucide-react';
import processFlowDiagram from '@/assets/process-flow-diagram.png';
import architectureDiagram from '@/assets/architecture-diagram.png';

interface DetailedExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DetailedExplanationModal: React.FC<DetailedExplanationModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white text-slate-900">
        <DialogHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 -m-6 mb-6 rounded-t-lg">
          <DialogTitle className="text-2xl font-semibold text-center flex items-center justify-center gap-3">
            <Brain className="w-8 h-8" />
            AI-Powered Cement Manufacturing Control System
          </DialogTitle>
          <p className="text-blue-100 text-center mt-2">
            Revolutionizing Industrial Automation with Google Cloud AI
          </p>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6 bg-gray-100">
            <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
            <TabsTrigger value="solution" className="text-sm">Solution</TabsTrigger>
            <TabsTrigger value="features" className="text-sm">Features</TabsTrigger>
            <TabsTrigger value="architecture" className="text-sm">Architecture</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Factory className="w-5 h-5" />
                  Project Brief
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-900">Overview</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      An intelligent cement manufacturing control system that leverages Google Cloud AI services to optimize every stage of production - from raw material mining to final packaging. The system integrates IoT sensors, machine learning models, and real-time analytics to achieve unprecedented efficiency and sustainability.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-900">Key Demonstration</h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Real-time monitoring of 10+ production stages
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        AI-powered predictive maintenance alerts
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Automated quality control with vision AI
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Carbon emission optimization using ML
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-amber-900">Outcome</h4>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        25% Energy Reduction
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        30% Faster Decision Making
                      </Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        15% Cost Savings
                      </Badge>
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        40% Emission Reduction
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <Cloud className="w-5 h-5" />
                  Google Cloud AI Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Core AI Services Used</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Brain className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-900">Vertex AI</p>
                          <p className="text-sm text-blue-700">ML model training & deployment</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <Zap className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium text-green-900">AutoML</p>
                          <p className="text-sm text-green-700">Predictive quality control</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <Database className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="font-medium text-purple-900">BigQuery ML</p>
                          <p className="text-sm text-purple-700">Large-scale analytics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">AI-Powered Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        <span>Real-time anomaly detection in kiln operations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Reinforcement learning for mill optimization</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-purple-500" />
                        <span>Computer vision for quality inspection</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-red-500" />
                        <span>Predictive maintenance using IoT data</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-amber-500" />
                        <span>Natural language insights generation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="solution" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-900">How is it Different?</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">End-to-End AI Integration</p>
                        <p className="text-sm text-gray-600">Unlike traditional SCADA systems, our solution integrates AI at every production stage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Predictive vs Reactive</p>
                        <p className="text-sm text-gray-600">Proactive optimization instead of reactive problem-solving</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Cloud className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Cloud-Native Architecture</p>
                        <p className="text-sm text-gray-600">Scalable, flexible, and continuously learning system</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-900">Problem Solving Approach</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Real-Time Decision Making</p>
                        <p className="text-sm text-gray-600">AI processes thousands of data points per second for instant optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Historical Pattern Learning</p>
                        <p className="text-sm text-gray-600">ML models learn from years of operational data to predict failures</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Autonomous Optimization</p>
                        <p className="text-sm text-gray-600">Self-adjusting parameters based on environmental and operational conditions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <Zap className="w-5 h-5" />
                  Unique Selling Propositions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">AI-First Design</h4>
                    <p className="text-sm text-gray-600">Built from ground up with AI at the core, not as an add-on</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Cloud className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Google Cloud Native</h4>
                    <p className="text-sm text-gray-600">Leverages the full power of Google's AI and ML ecosystem</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                    <p className="text-sm text-gray-600">System improves performance over time through adaptive learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-2 text-purple-900">
                  <Layers className="w-5 h-5" />
                  Comprehensive Feature Set
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Real-Time Monitoring</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Live process stage visualization
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          KPI dashboard with trend analysis
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Equipment health monitoring
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Energy consumption tracking
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Predictive Analytics</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          Equipment failure prediction
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          Quality deviation forecasting
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          Demand-based production planning
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          Emission level predictions
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">AI-Powered Optimization</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          Automated parameter tuning
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          Energy efficiency optimization
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          Raw material blend optimization
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          Production schedule optimization
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Quality & Compliance</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-red-500" />
                          Automated quality testing
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-red-500" />
                          Compliance monitoring
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-red-500" />
                          Environmental impact tracking
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-red-500" />
                          Automated reporting
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Layers className="w-5 h-5" />
                  Process Flow Diagram
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <img 
                    src={processFlowDiagram} 
                    alt="Process Flow Diagram showing the cement manufacturing process with AI integration points"
                    className="max-w-full h-auto rounded-lg border shadow-sm"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Database className="w-5 h-5" />
                  Architecture Diagram
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <img 
                    src={architectureDiagram} 
                    alt="System architecture diagram showing Google Cloud AI services integration"
                    className="max-w-full h-auto rounded-lg border shadow-sm"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Cloud className="w-5 h-5" />
                  Google Cloud Architecture Components
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-900">Data Layer</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cloud IoT Core</li>
                      <li>• Pub/Sub messaging</li>
                      <li>• BigQuery data warehouse</li>
                      <li>• Cloud Storage</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-900">AI/ML Layer</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Vertex AI platform</li>
                      <li>• AutoML models</li>
                      <li>• TensorFlow serving</li>
                      <li>• AI Platform Notebooks</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-900">Application Layer</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cloud Run containers</li>
                      <li>• Cloud Functions</li>
                      <li>• Firebase hosting</li>
                      <li>• Load balancing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator className="my-6" />
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Powered by Google Cloud AI
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              This prototype demonstrates the transformative potential of AI in industrial automation, 
              showcasing how Google Cloud's advanced AI services can revolutionize traditional manufacturing processes.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                Vertex AI
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                AutoML
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">
                BigQuery ML
              </Badge>
              <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">
                Cloud IoT
              </Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};