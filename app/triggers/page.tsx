import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCw, Circle, Send, Zap, MousePointer } from "lucide-react"
import Image from "next/image"

export default function TriggersPage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Essentials</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Triggers</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Triggers are the entry points that determine when your flows and logic should execute. They define the
            specific events that will start your automation workflows.
          </p>
        </div>

        {/* Trigger Interface */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <Image
            src="./images/triggers/trigger-interface.png"
            alt="Trigger Configuration Interface"
            width={400}
            height={300}
            className="mx-auto rounded-lg border border-border"
          />
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-muted border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="types">Trigger Types</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How Triggers Work</h2>
              <p className="text-muted-foreground">
                Triggers act as the starting point for your Power Config flows. When a specific event occurs in your form or
                application, the associated trigger fires and executes the connected actions and logic. Each trigger
                type responds to different user interactions or system events.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg w-fit">
                      <Circle className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-foreground">Event Detection</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Monitors for specific events like form loads, field changes, or form submissions
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg w-fit">
                      <Zap className="h-6 w-6 text-green-400" />
                    </div>
                    <CardTitle className="text-foreground">Flow Execution</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Automatically starts the connected workflow when the trigger condition is met
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg w-fit">
                      <MousePointer className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-foreground">User Experience</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Provides seamless, responsive interactions without requiring manual intervention
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="types" className="space-y-6 pt-4">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Available Trigger Types</h2>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Circle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">On Form Load</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Executes when the form is first loaded or opened
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    This trigger fires immediately when a user opens or navigates to your form. It's perfect for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Setting default field values based on user context</li>
                    <li>Hiding or showing sections based on user permissions</li>
                    <li>Pre-populating fields with data from other sources</li>
                    <li>Initializing form state and configurations</li>
                  </ul>
                  <div className="bg-muted p-3 rounded-lg mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Example:</strong> When a customer opens a support ticket form, automatically populate
                      their contact information and show relevant service options based on their subscription level.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <RefreshCw className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">On Field Change</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Executes when a specific field value is modified
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    This trigger activates whenever a user changes the value of a monitored field. It enables real-time
                    form interactions:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Dynamic field visibility based on selections</li>
                    <li>Conditional validation rules</li>
                    <li>Auto-calculation of dependent fields</li>
                    <li>Real-time data lookups and population</li>
                  </ul>
                  <div className="bg-muted p-3 rounded-lg mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Example:</strong> When a user selects "International" for shipping, automatically show
                      additional customs fields and update shipping cost calculations in real-time.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Send className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">On Form Submit</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Executes when the user attempts to submit the form
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    This trigger fires when a user clicks the submit button, before the form is actually processed. It's
                    ideal for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Final validation checks and confirmations</li>
                    <li>Data transformation before submission</li>
                    <li>User confirmation dialogs</li>
                    <li>Preventing submission under certain conditions</li>
                  </ul>
                  <div className="bg-muted p-3 rounded-lg mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Example:</strong> Before submitting an expense report, validate that all receipts are
                      attached and the total doesn't exceed the user's approval limit, showing a confirmation dialog
                      with the summary.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="configuration" className="space-y-6 pt-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Setting Up Triggers</CardTitle>
                <CardDescription className="text-muted-foreground">
                  How to configure triggers for your flows
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Create a New Flow</h4>
                      <p className="text-muted-foreground mt-1">
                        Start by creating a new flow in your Power Config configuration
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Select Trigger Type</h4>
                      <p className="text-muted-foreground mt-1">
                        Choose from On Form Load, On Field Change, or On Form Submit based on your needs
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Configure Trigger Settings</h4>
                      <p className="text-muted-foreground mt-1">
                        For field change triggers, specify which field(s) to monitor
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-theme-primary font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Add Actions</h4>
                      <p className="text-muted-foreground mt-1">
                        Connect your trigger to the actions that should execute when it fires
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-2">Best Practices</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Use On Form Load for initialization and setup tasks</li>
                    <li>Use On Field Change for dynamic, real-time interactions</li>
                    <li>Use On Form Submit for validation and final processing</li>
                    <li>Avoid complex logic in field change triggers to maintain performance</li>
                    <li>Test triggers thoroughly with different user scenarios</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DocumentationLayout>
  )
}
