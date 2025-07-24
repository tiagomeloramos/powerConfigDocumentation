import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { List } from "@radix-ui/react-tabs"
import { Regex, ShieldAlert, ShieldCheck } from "lucide-react"
import Image from "next/image"

export default function ValidationPage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Node Types</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary/10 rounded-lg">
              <Regex className="h-6 w-6 text-theme-primary" />
            </div>
            <h1 className="text-3xl font-bold text-white">Validation Node</h1>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            Apply validation rules to ensure field data meets your requirements.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="rules">Validation Rules</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Data Validation</h2>
              <p className="text-gray-400">
                Validation nodes let you define rules that ensure user input meets specific criteria before submission.
              </p>

              <div className="bg-gray-800/50 rounded-lg border border-gray-700 mt-6">
                <Image
                  src="/images/validation/validation-rules-overview.png"
                  alt="Validation Rules Interface"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mt-8">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Built-in validation types (email, url, etc.)</li>
                <li>Custom regex pattern validation</li>
                <li>Custom error messages for each rule</li>
                <li>Combine multiple validation rules</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="rules" className="space-y-6 pt-4">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Validation Rules</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage the validation rules applied to your form fields
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <List className="h-5 w-5 text-theme-primary" />
                    <div>
                      <h4 className="font-medium text-white">Rule Types</h4>
                      <div className="flex gap-6 mt-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-theme-primary" />
                          <span className="text-gray-400">Built-in</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-400">Custom</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <Image
                      src="/images/validation/validation-rules-list.png"
                      alt="Validation Rules List"
                      width={600}
                      height={300}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-medium text-white">Adding a New Validation Rule</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Click "Add Rule"</h4>
                        <p className="text-gray-400 mt-1">Open the validation rule configuration</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Select Field</h4>
                        <p className="text-gray-400 mt-1">Choose which field to validate</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Choose Validation Type</h4>
                        <p className="text-gray-400 mt-1">Select built-in or custom validation</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Configure Rule</h4>
                        <p className="text-gray-400 mt-1">Set pattern and error message</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mt-4">
                    <Image
                      src="/images/validation/add-validation-rule.png"
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
