import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <span>Get Started</span>
          </div>
          <h1 className="text-4xl font-bold text-white">Welcome to Power Config</h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            With Power Config, you can enhance your Dynamics 365 portals with dynamic, user-friendly experiences—no JavaScript required!
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <Image
            src="/images/power-config.png"
            alt="PowerUX Workflow Diagram"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Setting up Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Setting up</h2>
          <p className="text-gray-400">
            The first step to extending model-driven apps user experience is configuring your settings.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-colors group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-emerald-500/10 rounded-lg w-fit">
                    <Download className="h-6 w-6 text-emerald-400" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <CardTitle className="text-white">Installation</CardTitle>
                <CardDescription className="text-gray-400">
                  Get started by installing PowerUX in your environment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-colors group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-emerald-500/10 rounded-lg w-fit">
                    <Zap className="h-6 w-6 text-emerald-400" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <CardTitle className="text-white">Activate your subscription</CardTitle>
                <CardDescription className="text-gray-400">
                  Activate your Power Config subscription to unlock all features
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  )
}
