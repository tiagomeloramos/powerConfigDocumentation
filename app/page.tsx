import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Zap, ArrowRight, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Get Started</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Welcome to Power Config</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            With Power Config, you can enhance your Dynamics 365 portals with dynamic, user-friendly experiences—no JavaScript required!
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <Image
            src="./images/power-config.png"
            alt="Power Config Workflow Diagram"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Setting up Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Setting up</h2>
          <p className="text-muted-foreground">
            The first step is to install our solution in your environment.
          </p>

          <div className="grid md:grid-cols-1 gap-6">
            <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-theme-primary/10 rounded-lg w-fit">
                    <Download className="h-6 w-6 text-theme-primary" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-theme-primary transition-colors" />
                </div>
                <CardTitle className="text-foreground">Installation</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Get started by installing Power Config in your environment
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Node Types Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Essentials</h2>
          <p className="text-muted-foreground">
            Explore the different types of nodes available to build your flows and control form behavior.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <Link href="/triggers">
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-theme-primary/10 rounded-lg w-fit">
                      <Zap className="h-6 w-6 text-theme-primary" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-theme-primary transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">Triggers</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Get started by installing Power Config in your environment
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/actions">
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-theme-primary/10 rounded-lg w-fit">
                      <Terminal className="h-6 w-6 text-theme-primary" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-theme-primary transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">Actions</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Get started by installing Power Config in your environment
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  )
}
