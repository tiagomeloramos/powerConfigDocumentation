import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Split, Eye, CheckCircle2, Zap, Regex, CircleAlert, ArrowRight, Settings, Rocket } from "lucide-react"
import Link from "next/link"

export default function TriggersPage() {
  const nodeTypes = [
    {
      title: "Condition",
      description: "Create branching logic with powerful condition rules and groups to control your application flow",
      icon: <Split className="h-6 w-6 text-theme-primary" />,
      href: "/node/condition",
    },
    {
      title: "Visibility",
      description: "Control what elements are visible in your forms dynamically based on user input and conditions",
      icon: <Eye className="h-6 w-6 text-theme-primary" />,
      href: "/node/visibility",
    },
    {
      title: "Required Fields",
      description: "Define which fields should be required or optional in your forms to ensure proper data collection",
      icon: <CheckCircle2 className="h-6 w-6 text-theme-primary" />,
      href: "/node/required",
    },
    {
      title: "Value Actions",
      description: "Set or clear field values dynamically to automate form population and data management processes",
      icon: <Zap className="h-6 w-6 text-theme-primary" />,
      href: "/node/value",
    },
    {
      title: "Validation Rules",
      description: "Apply validation rules to ensure field data meets your requirements before form submission",
      icon: <Regex className="h-6 w-6 text-theme-primary" />,
      href: "/node/validation",
    },
    {
      title: "Alert Notifications",
      description: "Configure notifications and confirmations to communicate important information to your users",
      icon: <CircleAlert className="h-6 w-6 text-theme-primary" />,
      href: "/node/alert",
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
          <h1 className="text-4xl font-bold text-white">Triggers & Node Types</h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            Explore all the available node types and triggers to build powerful, dynamic forms and workflows in your
            Power Platform applications.
          </p>
        </div>

        {/* Node Types Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {nodeTypes.map((nodeType, index) => (
            <Link key={index} href={nodeType.href}>
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-200 group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-theme-primary/10 rounded-lg w-fit">{nodeType.icon}</div>
                    <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-theme-primary transition-colors mt-2" />
                  </div>
                  <CardTitle className="text-white text-xl">{nodeType.title}</CardTitle>
                  <CardDescription className="text-gray-400 leading-relaxed">{nodeType.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Getting Started</h3>
          <p className="text-gray-400 mb-4">
            Each node type serves a specific purpose in building your application logic. Start with the basics like
            Conditions and Visibility, then explore more features like Validation Rules and Alert
            Notifications.
          </p>
          <div className="flex gap-4">
            <Link href="/node/condition">
              <Card className="bg-gray-700/50 border-gray-600 hover:border-theme-primary transition-colors cursor-pointer">
                <CardHeader className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Split className="h-4 w-4 text-theme-primary" />
                    <span className="text-white font-medium">Start with Conditions</span>
                  </div>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/node/visibility">
              <Card className="bg-gray-700/50 border-gray-600 hover:border-theme-primary transition-colors cursor-pointer">
                <CardHeader className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-theme-primary" />
                    <span className="text-white font-medium">Learn Visibility</span>
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
