import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { List } from "@radix-ui/react-tabs"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

export default function VisibilityPage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Steps</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary/10 rounded-lg">
              <Eye className="h-6 w-6 text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Step Visibility</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Control what are visible in your forms with dynamic visibility rules.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-muted border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="actions">Visibility Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Dynamic Field Visibility</h2>
              <p className="text-muted-foreground">
                Step Visibility allow you to show or hide fields/sections/tabs based on conditions, creating adaptive
                forms that respond to user input.
              </p>

              <div className="bg-card rounded-lg border border-border mt-6">
                <Image
                  src="/powerConfigDocumentation/images/visibility/visibility-actions-overview.png"
                  alt="Visibility Actions Interface"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Show or hide UI elements</li>
                <li>Create cleaner, more focused forms</li>
                <li>Group visibility actions for complex scenarios</li>
                <li>Optimize form complexity by hiding irrelevant fields</li>
                <li>Works with all field types</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="space-y-6 pt-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Visibility Actions</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage which fields are visible in your form
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <List className="h-5 w-5 text-theme-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">Action Types</h4>
                      <div className="flex gap-6 mt-2">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-theme-primary" />
                          <span className="text-muted-foreground">Show</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <EyeOff className="h-4 w-4 text-amber-400" />
                          <span className="text-muted-foreground">Hide</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg border border-border">
                    <Image
                      src="/powerConfigDocumentation/images/visibility/visibility-actions-list.png"
                      alt="Visibility Actions List"
                      width={600}
                      height={300}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-medium text-foreground">Adding a New Action</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Click "Add Action"</h4>
                        <p className="text-muted-foreground mt-1">Open the visibility action configuration</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Select Field / Tab / Section</h4>
                        <p className="text-muted-foreground mt-1">Choose one to show or hide</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Choose Action</h4>
                        <p className="text-muted-foreground mt-1">Select whether to show or hide</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg border border-border mt-4">
                    <Image
                      src="/powerConfigDocumentation/images/visibility/add-visibility-action.png"
                      alt="Add Visibility Action"
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
