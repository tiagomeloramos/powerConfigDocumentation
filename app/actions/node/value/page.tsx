import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { List } from "@radix-ui/react-tabs"
import { Zap, Plus, Minus } from "lucide-react"
import Image from "next/image"

export default function ValuePage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Actions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary/10 rounded-lg">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">Value Node</h1>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            Set or clear field values dynamically in your application forms and flows.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="actions">Value Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Dynamic Value Control</h2>
              <p className="text-gray-400">
                Value nodes let you programmatically set or clear field values, enabling automated form population and
                data management.
              </p>

              <div className="bg-gray-800/50 rounded-lg border border-gray-700 mt-6">
                <Image
                  src="/powerConfigDocumentation/images/value/value-actions-overview.png"
                  alt="Value Actions Interface"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mt-8">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Set specific values in form fields</li>
                <li>Clear existing field values</li>
                <li>Group value actions for complex scenarios</li>
                <li>Works with all field types</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="space-y-6 pt-4">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Value Actions</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage how values are set or cleared in your forms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <List className="h-5 w-5 text-theme-primary" />
                    <div>
                      <h4 className="font-medium text-white">Action Types</h4>
                      <div className="flex gap-6 mt-2">
                        <div className="flex items-center gap-2">
                          <Plus className="h-4 w-4 text-theme-primary" />
                          <span className="text-gray-400">Set Value</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Minus className="h-4 w-4 text-amber-400" />
                          <span className="text-gray-400">Clear Value</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <Image
                      src="/powerConfigDocumentation/images/value/value-actions-list.png"
                      alt="Value Actions List"
                      width={600}
                      height={300}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-medium text-white">Adding a New Value Action</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Click "Add Action"</h4>
                        <p className="text-gray-400 mt-1">Open the value action configuration</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Select Field</h4>
                        <p className="text-gray-400 mt-1">Choose which field to modify</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Choose Operation</h4>
                        <p className="text-gray-400 mt-1">Select whether to set or clear the value</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Enter Value (if applied)</h4>
                        <p className="text-gray-400 mt-1">Specify the value to set in the field</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mt-4">
                    <Image
                      src="/powerConfigDocumentation/images/value/add-value-action.png"
                      alt="Add Value Action"
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
