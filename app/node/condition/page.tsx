import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, CircleAlert, Split } from "lucide-react"
import Image from "next/image"

export default function ConditionBuilderPage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Actions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary/10 rounded-lg">
              <Split className="h-6 w-6 text-yellow-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">Condition Node</h1>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            Create branching logic in your flows with powerful condition rules and groups.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Branching Logic</h2>
              <p className="text-gray-400">
                The Condition Node evaluates expressions and directs the flow based on whether conditions are true or
                false.
              </p>

              <div className="bg-gray-800/50 rounded-lg border border-gray-700 mt-6 overflow-hidden">
                <Image
                  src="/images/condition/condition-builder-interface.png"
                  alt="Condition Builder Interface"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mt-8">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Create complex logic with AND/OR conditions</li>
                <li>Nest condition groups for advanced rules</li>
                <li>Visual interface for easy configuration</li>
                <li>Works with all field types and values</li>
                <li>Immediate feedback on condition validity</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="how-it-works" className="space-y-6 pt-4">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Branching Behavior</CardTitle>
                <CardDescription className="text-gray-400">
                  Your flow takes different paths based on condition results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-theme-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">True Path</h4>
                    <p className="text-gray-400">Executes when all conditions are met</p>
                    <p className="text-sm text-gray-500 mt-1">Example: When condition is met, record will be saved</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CircleAlert className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">False Path</h4>
                    <p className="text-gray-400">Executes when conditions are not met</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Example: When condition fails, notification will display
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Condition Types</CardTitle>
                <CardDescription className="text-gray-400">Different ways to evaluate your data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Image
                    src="/images/condition/condition-types-example.png"
                    alt="Condition Types Example"
                    width={600}
                    height={300}
                    className="w-full rounded border border-gray-700"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="configuration" className="space-y-6 pt-4">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Step-by-Step Setup</CardTitle>
                <CardDescription className="text-gray-400">How to configure your condition groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Click Add Condition</h4>
                      <p className="text-gray-400 mt-1">The configuration window will open</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Choose AND or OR logic</h4>
                      <p className="text-gray-400 mt-1">
                        "A AND B" requires both conditions. "A OR B" requires either condition.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Add conditions and groups</h4>
                      <p className="text-gray-400 mt-1">
                        Use the interface to build nested logic with multiple conditions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-6">
                  <Image
                    src="/images/condition/condition-group-example.png"
                    alt="Condition Group Example"
                    width={600}
                    height={400}
                    className="w-full rounded border border-gray-700"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/*<div className="flex gap-4 mt-8">
          <Card className="bg-gray-800/50 border-gray-700 flex-1 hover:border-gray-600 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-theme-primary" />
                <CardTitle className="text-white">Interactive Demo</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                Try building conditions in our live playground
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 flex-1 hover:border-gray-600 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-theme-primary" />
                <CardTitle className="text-white">Video Guide</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                Watch our 5-minute tutorial on advanced branching
              </CardDescription>
            </CardHeader>
          </Card>
        </div>*/}
      </div>
    </DocumentationLayout>
  )
}
