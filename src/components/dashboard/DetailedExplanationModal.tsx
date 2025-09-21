import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Settings,
  Target,
  Lightbulb,
  BarChart3,
  Cog,
  Award
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
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto bg-white text-slate-900 border-2 border-blue-200">
        {/* Header Section */}
        <DialogHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 -m-6 mb-8 rounded-t-lg">
          <DialogTitle className="text-3xl font-bold text-center flex items-center justify-center gap-4">
            <Brain className="w-10 h-10" />
            AI-Powered Cement Manufacturing Control System
          </DialogTitle>
          <p className="text-blue-100 text-center mt-3 text-lg">
            Revolutionizing Industrial Automation with Google Cloud AI Services
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-3 py-1">
              Google Cloud Native
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-3 py-1">
              Real-time AI Optimization
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-3 py-1">
              Predictive Analytics
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-8 px-2">
          {/* 1. Project Brief */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Project Brief</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-blue-50/30">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-900 text-lg">
                    <Target className="w-5 h-5" />
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    An intelligent cement manufacturing control system that leverages Google Cloud AI services to optimize every stage of production. The system integrates IoT sensors, machine learning models, and real-time analytics to achieve unprecedented efficiency and sustainability.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-900 text-sm">Key Technologies:</p>
                    <p className="text-xs text-gray-600 mt-1">Vertex AI • AutoML • BigQuery ML • Cloud IoT • Pub/Sub</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50/30">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-900 text-lg">
                    <Lightbulb className="w-5 h-5" />
                    Key Demonstration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Real-time monitoring of 10+ production stages</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">AI-powered predictive maintenance alerts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Automated quality control with vision AI</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Carbon emission optimization using ML</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50/30">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-900 text-lg">
                    <Award className="w-5 h-5" />
                    Outcome
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg text-center border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">25%</div>
                      <div className="text-xs text-gray-600">Energy Reduction</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">30%</div>
                      <div className="text-xs text-gray-600">Faster Decisions</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">15%</div>
                      <div className="text-xs text-gray-600">Cost Savings</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">40%</div>
                      <div className="text-xs text-gray-600">CO₂ Reduction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-blue-200" />

          {/* 2. How is it Different */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">How is it Different from Existing Solutions?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-blue-900">End-to-End AI Integration</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Unlike traditional SCADA systems, our solution integrates AI at every production stage, creating a unified intelligent ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-blue-900">Predictive vs Reactive</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Proactive optimization and failure prevention instead of reactive problem-solving approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-blue-900">Cloud-Native Architecture</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Scalable, flexible, and continuously learning system built on Google Cloud infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-blue-200" />

          {/* 3. How does it solve the problem */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">How does it solve the problem?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-white">
                <CardHeader className="bg-blue-50 pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Cpu className="w-5 h-5" />
                    Real-Time Decision Making
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    AI processes thousands of data points per second for instant optimization decisions.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-blue-900">Impact:</p>
                    <p className="text-xs text-gray-600">Response time reduced from hours to milliseconds</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader className="bg-blue-50 pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Database className="w-5 h-5" />
                    Historical Pattern Learning
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    ML models learn from years of operational data to predict equipment failures and quality issues.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-blue-900">Impact:</p>
                    <p className="text-xs text-gray-600">95% accuracy in failure predictions</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader className="bg-blue-50 pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Settings className="w-5 h-5" />
                    Autonomous Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    Self-adjusting parameters based on environmental and operational conditions.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-blue-900">Impact:</p>
                    <p className="text-xs text-gray-600">24/7 autonomous optimization</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-blue-200" />

          {/* 4. USP */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">USP of Our Solution</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">AI-First Design</h3>
                  <p className="text-sm text-gray-700">Built from ground up with AI at the core, not as an add-on</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">Google Cloud Native</h3>
                  <p className="text-sm text-gray-700">Leverages the full power of Google's AI and ML ecosystem</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">Continuous Learning</h3>
                  <p className="text-sm text-gray-700">System improves performance over time through adaptive learning</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-blue-200" />

          {/* 5. Features */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">5</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">List of Features Offered by the Solution</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Real-Time Monitoring & Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Live process visualization</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>KPI dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Equipment health monitoring</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Energy consumption tracking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    AI-Powered Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Automated parameter tuning</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Energy efficiency optimization</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Raw material optimization</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Production scheduling</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Predictive Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Equipment failure prediction</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Quality forecasting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Demand prediction</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Emission forecasting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Cog className="w-5 h-5" />
                    Quality & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Automated quality testing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Compliance monitoring</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Environmental tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Automated reporting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-blue-200" />

          {/* 6. Process Flow Diagram */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">6</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Process Flow Diagram</h2>
            </div>
            
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-white">
              <CardHeader className="bg-blue-600 text-white text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Factory className="w-6 h-6" />
                  AI-Integrated Cement Manufacturing Process Flow
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src={processFlowDiagram} 
                      alt="Process Flow Diagram showing the cement manufacturing process with AI integration points"
                      className="max-w-full h-auto rounded-lg shadow-lg border-2 border-blue-200"
                    />
                    <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg text-xs font-semibold">
                      AI Integration Points Highlighted
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-blue-200" />

          {/* 7. Architecture Diagram */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">7</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Architecture Diagram of the Proposed Solution</h2>
            </div>
            
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-white">
              <CardHeader className="bg-blue-600 text-white text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Layers className="w-6 h-6" />
                  Google Cloud AI Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img 
                      src={architectureDiagram} 
                      alt="System architecture diagram showing Google Cloud AI services integration"
                      className="max-w-full h-auto rounded-lg shadow-lg border-2 border-blue-200"
                    />
                    <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg text-xs font-semibold">
                      Google Cloud Native
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-blue-900 text-center">Data Layer</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="space-y-1 text-sm text-gray-700">
                        <div className="bg-white p-2 rounded border border-blue-200">Cloud IoT Core</div>
                        <div className="bg-white p-2 rounded border border-blue-200">Pub/Sub</div>
                        <div className="bg-white p-2 rounded border border-blue-200">BigQuery</div>
                        <div className="bg-white p-2 rounded border border-blue-200">Cloud Storage</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-blue-900 text-center">AI/ML Layer</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="space-y-1 text-sm text-gray-700">
                        <div className="bg-white p-2 rounded border border-blue-200">Vertex AI</div>
                        <div className="bg-white p-2 rounded border border-blue-200">AutoML</div>
                        <div className="bg-white p-2 rounded border border-blue-200">TensorFlow</div>
                        <div className="bg-white p-2 rounded border border-blue-200">AI Notebooks</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-blue-900 text-center">Application Layer</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="space-y-1 text-sm text-gray-700">
                        <div className="bg-white p-2 rounded border border-blue-200">Cloud Run</div>
                        <div className="bg-white p-2 rounded border border-blue-200">Cloud Functions</div>
                        <div className="bg-white p-2 rounded border border-blue-200">Firebase</div>
                        <div className="bg-white p-2 rounded border border-blue-200">Load Balancer</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">
              Transforming Industrial Manufacturing with AI
            </h3>
            <p className="text-blue-100 mb-4 max-w-3xl mx-auto">
              This prototype demonstrates the transformative potential of Google Cloud AI services in industrial automation, 
              showcasing how advanced machine learning and real-time analytics can revolutionize traditional manufacturing processes.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Cloud className="w-4 h-4 mr-2" />
                Google Cloud AI
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Brain className="w-4 h-4 mr-2" />
                Vertex AI Platform
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Database className="w-4 h-4 mr-2" />
                BigQuery ML
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Real-time IoT
              </Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};