import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Zap, ArrowRight, Split, Eye, CheckCircle2, Regex, CircleAlert } from "lucide-react"
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
            With PowerUX, you can add complex logic to your Model-driven applications in just a few minutes without
            having to learn JavaScript!
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="bg-card rounded-lg p-6 border border-border">
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
          <h2 className="text-2xl font-bold text-foreground">Setting up</h2>
          <p className="text-muted-foreground">
            The first step to extending model-driven apps user experience is configuring your settings.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
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
                  Get started by installing PowerUX in your environment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-theme-primary/10 rounded-lg w-fit">
                    <Zap className="h-6 w-6 text-theme-primary" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-theme-primary transition-colors" />
                </div>
                <CardTitle className="text-foreground">Activate your subscription</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Activate your PowerUX subscription to unlock all features
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Node Types Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Node Types</h2>
          <p className="text-muted-foreground">
            Explore the different types of nodes available to build your flows and control form behavior.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/node/condition">
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-yellow-500/10 rounded-lg w-fit">
                      <Split className="h-6 w-6 text-yellow-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">Condition</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Create branching logic with powerful condition rules and groups
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/node/visibility">
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-blue-500/10 rounded-lg w-fit">
                      <Eye className="h-6 w-6 text-blue-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">Visibility</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Control what elements are visible in your forms dynamically
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/node/required">
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-orange-500/10 rounded-lg w-fit">
                      <CheckCircle2 className="h-6 w-6 text-orange-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-orange-400 transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">Required</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Control which fields are required in your forms
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/node/value">
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-purple-500/10 rounded-lg w-fit">
                      <Zap className="h-6 w-6 text-purple-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">Value</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Set or clear field values dynamically in your forms
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/node/validation">
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-green-500/10 rounded-lg w-fit">
                      <Regex className="h-6 w-6 text-green-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-green-400 transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">Validation</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Apply validation rules to ensure data meets requirements
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/node/alert">
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-colors group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-red-500/10 rounded-lg w-fit">
                      <CircleAlert className="h-6 w-6 text-red-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-red-400 transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">Alert</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Configure notifications and confirmations for users
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
