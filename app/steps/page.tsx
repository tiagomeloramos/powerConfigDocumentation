import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Split, Eye, CheckCircle2, Zap, Regex, CircleAlert, ArrowRight, Settings } from "lucide-react"
import Link from "next/link"

export default function ActionsPage() {
  const steps = [
    {
      title: "Step Condition",
      description: "Create branching logic with powerful condition rules and groups to control your application flow",
      icon: <Split className="h-6 w-6 text-yellow-400" />,
      color: "text-yellow-400",
      href: "/steps/condition",
    },
    {
      title: "Step Visibility",
      description: "Control what elements are visible in your forms dynamically based on user input and conditions",
      icon: <Eye className="h-6 w-6 text-blue-400" />,
      color: "text-blue-400",
      href: "/steps/visibility",
    },
    {
      title: "Step Required Fields",
      description: "Define which fields should be required or optional in your forms to ensure proper data collection",
      icon: <CheckCircle2 className="h-6 w-6 text-orange-400" />,
      color: "text-orange-400",
      href: "/steps/required",
    },
    {
      title: "Step Value Actions",
      description: "Set or clear field values dynamically to automate form population and data management processes",
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      color: "text-purple-400",
      href: "/steps/value",
    },
    {
      title: "Step Validation Rules",
      description: "Apply validation rules to ensure field data meets your requirements before form submission",
      icon: <Regex className="h-6 w-6 text-green-400" />,
      color: "text-green-400",
      href: "/steps/validation",
    },
    {
      title: "Step Alert Notifications",
      description: "Configure notifications and confirmations to communicate important information to your users",
      icon: <CircleAlert className="h-6 w-6 text-red-400" />,
      color: "text-red-400",
      href: "/steps/alert",
    },
  ]

  return (
    <DocumentationLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Essentials</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Steps</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore all the available steps to build powerful, dynamic forms and workflows in your
            Power Platform applications.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Link key={index} href={step.href}>
              <Card className="bg-card border-border hover:border-theme-primary/50 transition-all duration-200 group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-theme-primary/10 rounded-lg w-fit">{step.icon}</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-theme-primary transition-colors mt-2" />
                  </div>
                  <CardTitle className="text-foreground text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Getting Started</h3>
          <p className="text-muted-foreground mb-4">
            Each action type serves a specific purpose in building your application logic. Start with the basics like
            Conditions and Visibility, then explore more features like Validation Rules and Alert
            Notifications.
          </p>
          <div className="flex gap-4">
            <Link href="/steps/condition">
              <Card className="bg-muted border-border hover:border-theme-primary transition-colors cursor-pointer">
                <CardHeader className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Split className="h-4 w-4 text-theme-primary" />
                    <span className="text-foreground font-medium">Start with Step Conditions</span>
                  </div>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/steps/visibility">
              <Card className="bg-muted border-border hover:border-theme-primary transition-colors cursor-pointer">
                <CardHeader className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-theme-primary" />
                    <span className="text-foreground font-medium">Learn Step Visibility</span>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  )
}
