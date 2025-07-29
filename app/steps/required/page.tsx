import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { List } from "@radix-ui/react-tabs"
import { CheckCircle2, Circle, CircleDot } from "lucide-react"
import Image from "next/image"

export default function RequiredPage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Steps</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary/10 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-orange-400" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Step Required</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">Control which fields are required in your forms.</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-muted border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="validation">How It Works</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Dynamic Required Fields</h2>
              <p className="text-muted-foreground">
                Step Required let you specify which fields must be filled out before form submission, creating more
                robust data collection.
              </p>

              <div className="bg-card rounded-lg border border-border mt-6">
                <Image
                  src="/powerConfigDocumentation/images/required/required-fields-overview.png"
                  alt="Required Fields Interface"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mark fields as required or optional</li>
                <li>Add multiple required/optional fields actions for complex forms</li>
                <li>Works with all field types</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="validation" className="space-y-6 pt-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Field Required Actions</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage which fields are required in your form
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <List className="h-5 w-5 text-theme-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">Types</h4>
                      <div className="flex gap-6 mt-2">
                        <div className="flex items-center gap-2">
                          <CircleDot className="h-4 w-4 text-theme-primary" />
                          <span className="text-muted-foreground">Required</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Circle className="h-4 w-4 text-blue-400" />
                          <span className="text-muted-foreground">Optional</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <Image
                      src="/powerConfigDocumentation/images/required/required-fields-list.png"
                      alt="Required Fields List"
                      width={600}
                      height={300}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-medium text-foreground">Adding a New Required Action</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Click "Add Action"</h4>
                        <p className="text-muted-foreground mt-1">Open the field required configuration</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Select Field</h4>
                        <p className="text-muted-foreground mt-1">Choose which field to validate</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Choose Type</h4>
                        <p className="text-muted-foreground mt-1">
                          Select whether the field should be required or optional
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg border border-border mt-4">
                    <Image
                      src="/powerConfigDocumentation/images/required/add-validation-rule.png"
                      alt="Add Validation Rule"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DocumentationLayout>
  )
}
