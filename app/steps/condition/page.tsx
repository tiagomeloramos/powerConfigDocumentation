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
            <span>Steps</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary/10 rounded-lg">
              <Split className="h-6 w-6 text-yellow-400" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Step Condition</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Create branching logic in your flows with powerful condition rules and groups.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-muted border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Branching Logic</h2>
              <p className="text-muted-foreground">
                The Step Condition evaluates expressions and directs the flow based on whether conditions are true or
                false.
              </p>

              <div className="bg-card rounded-lg border border-border mt-6 overflow-hidden">
                <Image
                  src="/powerConfigDocumentation/images/condition/condition-builder-interface.png"
                  alt="Condition Builder Interface"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Create complex logic with AND/OR conditions</li>
                <li>Nest condition groups for advanced rules</li>
                <li>Visual interface for easy configuration</li>
                <li>Works with all field types and values</li>
                <li>Immediate feedback on condition validity</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="how-it-works" className="space-y-6 pt-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Branching Behavior</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Your flow takes different paths based on condition results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-theme-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">True Path</h4>
                    <p className="text-muted-foreground">Executes when all conditions are met</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">
                      Example: When condition is met, record will be saved
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CircleAlert className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">False Path</h4>
                    <p className="text-muted-foreground">Executes when conditions are not met</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">
                      Example: When condition fails, notification will display
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Condition Types</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Different ways to evaluate your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <Image
                    src="/powerConfigDocumentation/images/condition/condition-types-example.png"
                    alt="Condition Types Example"
                    width={600}
                    height={300}
                    className="w-full rounded border border-border"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="configuration" className="space-y-6 pt-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Step-by-Step Setup</CardTitle>
                <CardDescription className="text-muted-foreground">
                  How to configure your condition groups
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Click Add Condition</h4>
                      <p className="text-muted-foreground mt-1">The configuration window will open</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Choose AND or OR logic</h4>
                      <p className="text-muted-foreground mt-1">
                        "A AND B" requires both conditions. "A OR B" requires either condition.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Add conditions and groups</h4>
                      <p className="text-muted-foreground mt-1">
                        Use the interface to build nested logic with multiple conditions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <Image
                    src="/powerConfigDocumentation/images/condition/condition-group-example.png"
                    alt="Condition Group Example"
                    width={600}
                    height={400}
                    className="w-full rounded border border-border"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DocumentationLayout>
  )
}
