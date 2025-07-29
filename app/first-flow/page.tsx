import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Database, FileText, Settings, CheckCircle2, ArrowRight, Search, Plus, Layers, FormInput } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CreateRulePage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Get Started</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Creating a Rule</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Learn how to create your first rule in Rules for Power Pages. This step-by-step guide will walk you through
            the 3-step process to set up dynamic form behavior.
          </p>
        </div>

        {/* Rules Management Overview */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Rules Management Interface</h2>
          <p className="text-muted-foreground mb-6">
            Before creating a new rule, let's look at the Rules Management interface where you can view, manage, and
            create all your rules.
          </p>
          <Image
            src="/powerConfigDocumentation/images/create-rule/rules-management.png"
            alt="Rules Management Interface"
            width={1200}
            height={600}
            className="w-full rounded-lg border border-border"
          />
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-theme-primary/10 text-theme-primary border-theme-primary/20">
                All (6)
              </Badge>
              <span className="text-sm text-muted-foreground">Total rules</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                Active (5)
              </Badge>
              <span className="text-sm text-muted-foreground">Currently running</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
                Inactive (1)
              </Badge>
              <span className="text-sm text-muted-foreground">Disabled rules</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-muted border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="step1">Step 1: Select Table</TabsTrigger>
            <TabsTrigger value="step2">Step 2: Choose Form</TabsTrigger>
            <TabsTrigger value="step3">Step 3: Flow Details</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">3-Step Rule Creation Process</h2>
              <p className="text-muted-foreground">
                Creating a rule in Rules for Power Pages is a straightforward 3-step process that guides you through
                selecting your target table, choosing the appropriate form, and configuring the rule details.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-theme-primary/10 rounded-lg">
                        <Database className="h-6 w-6 text-theme-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">Step 1</CardTitle>
                        <CardDescription className="text-muted-foreground">Select Table</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Choose the data table that your rule will apply to, such as Account, Contact, or custom entities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-theme-primary/10 rounded-lg">
                        <FileText className="h-6 w-6 text-theme-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">Step 2</CardTitle>
                        <CardDescription className="text-muted-foreground">Choose Form</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Select between Basic Forms or Multi-step Forms, then choose the specific form to apply your rule
                      to.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-theme-primary/10 rounded-lg">
                        <Settings className="h-6 w-6 text-theme-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">Step 3</CardTitle>
                        <CardDescription className="text-muted-foreground">Flow Details</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Configure your rule name, description, and review the configuration summary before creation.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Before You Start</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-theme-primary mt-0.5 flex-shrink-0" />
                    <span>Ensure you have the necessary permissions to create rules in your environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-theme-primary mt-0.5 flex-shrink-0" />
                    <span>Identify the table and form you want to add dynamic behavior to</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-theme-primary mt-0.5 flex-shrink-0" />
                    <span>Plan out the logic and steps you want to implement</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="step1" className="space-y-6 pt-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-theme-primary/10 rounded-lg">
                    <Database className="h-6 w-6 text-theme-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">Step 1: Select Table</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Choose the data table for your rule
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <Image
                    src="/powerConfigDocumentation/images/create-rule/step1-select-table.png"
                    alt="Step 1 - Select Table"
                    width={800}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">What happens in this step:</h4>

                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">Workspace Selection</h5>
                        <p className="text-muted-foreground mt-1">
                          The system shows your current workspace (e.g., "Site Test - powerconfigsitepoc")
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">Browse Available Tables</h5>
                        <p className="text-muted-foreground mt-1">
                          Use the search box or browse through available tables like Account, Article, Feedback, Topic,
                          etc.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">Select Your Target Table</h5>
                        <p className="text-muted-foreground mt-1">
                          Click on the table you want to create rules for. The selected table will appear at the bottom.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-3">
                      <Search className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-blue-900 dark:text-blue-100">Tip</h5>
                        <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                          Use the "Refresh Tables" button if you don't see a recently created table, or use the search
                          functionality to quickly find specific tables.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="step2" className="space-y-6 pt-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-theme-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-theme-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">Step 2: Choose Form</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Select the form type and specific form for your rule
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Form Type Selection</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="bg-muted border-border">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <FormInput className="h-5 w-5 text-theme-primary" />
                            <CardTitle className="text-foreground text-lg">Basic Forms</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">
                            Single-page forms with standard field layouts. Perfect for simple data entry scenarios.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted border-border">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <Layers className="h-5 w-5 text-theme-primary" />
                            <CardTitle className="text-foreground text-lg">Multi-step Forms</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">
                            Forms with multiple steps/pages. Ideal for complex workflows and guided data entry.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Multi-step Forms Example</h4>
                    <div className="bg-muted p-4 rounded-lg border border-border">
                      <Image
                        src="/powerConfigDocumentation/images/create-rule/step2-multistep-forms.png"
                        alt="Step 2 - Multi-step Forms"
                        width={800}
                        height={600}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      When selecting Multi-step Forms, you can see the form steps breakdown, including which tables each
                      step relates to.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Basic Forms Example</h4>
                    <div className="bg-muted p-4 rounded-lg border border-border">
                      <Image
                        src="/powerConfigDocumentation/images/create-rule/step2-basic-forms.png"
                        alt="Step 2 - Basic Forms"
                        width={800}
                        height={600}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Basic Forms show a simpler selection with individual forms listed directly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-medium text-foreground">Selection Process:</h5>
                    <div className="space-y-3">
                      <div className="flex gap-4 items-start">
                        <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-theme-primary font-medium">1</span>
                        </div>
                        <div>
                          <h6 className="font-medium text-foreground">Choose Form Type</h6>
                          <p className="text-muted-foreground mt-1">
                            Select either "Basic Forms" or "Multi-step Forms" based on your form structure
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-theme-primary font-medium">2</span>
                        </div>
                        <div>
                          <h6 className="font-medium text-foreground">Browse Available Forms</h6>
                          <p className="text-muted-foreground mt-1">
                            Use the search functionality to find your specific form or browse through the list
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-theme-primary font-medium">3</span>
                        </div>
                        <div>
                          <h6 className="font-medium text-foreground">Select Your Form</h6>
                          <p className="text-muted-foreground mt-1">
                            Click on the form you want to apply rules to. The selection will be confirmed at the bottom.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="step3" className="space-y-6 pt-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-theme-primary/10 rounded-lg">
                    <Settings className="h-6 w-6 text-theme-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">Step 3: Flow Details</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Configure your rule settings and provide details
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <Image
                    src="/powerConfigDocumentation/images/create-rule/step3-flow-details.png"
                    alt="Step 3 - Flow Details"
                    width={800}
                    height={600}
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Configuration Fields</h4>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-theme-primary font-medium">1</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-foreground">Rule Name *</h5>
                          <p className="text-muted-foreground mt-1 mb-2">
                            Provide a descriptive name for your rule (e.g., "Account Rule")
                          </p>
                          <div className="bg-green-50 dark:bg-green-950/20 p-2 rounded border border-green-200 dark:border-green-800">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                              <span className="text-green-800 dark:text-green-200 text-sm">Looks good!</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-theme-primary font-medium">2</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-foreground">Rule Description (optional)</h5>
                          <p className="text-muted-foreground mt-1">
                            Briefly describe what this rule does or its purpose (0/500 characters)
                          </p>
                          <p className="text-muted-foreground text-sm mt-2">
                            Clear descriptions help team members understand your rule purpose.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Configuration Summary</h4>
                    <div className="bg-muted p-4 rounded-lg border border-border">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <Database className="h-5 w-5 text-theme-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Workspace</p>
                            <p className="font-medium text-foreground">Site Test - powerconfigsitepoc</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-theme-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Table</p>
                            <p className="font-medium text-foreground">Account</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <FormInput className="h-5 w-5 text-theme-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Form Type</p>
                            <p className="font-medium text-foreground">Basic Form</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Settings className="h-5 w-5 text-theme-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Form</p>
                            <p className="font-medium text-foreground">Test Account Basic Form2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4" />
                      <span className="text-sm">Click "Create Rule" to finish the setup</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Next Steps */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">What's Next?</h3>
          <p className="text-muted-foreground mb-6">
            After creating your rule, you'll be taken to the rule builder where you can add triggers and steps to define
            your form's behavior.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/triggers">
              <Card className="bg-muted border-border hover:border-theme-primary/50 transition-colors cursor-pointer">
                <CardHeader className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-theme-primary" />
                    <span className="text-foreground font-medium">Choose your Triggers</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    Set up when your rule should execute (On Form Load, Field Change or On Form Submit)
                  </p>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/steps">
              <Card className="bg-muted border-border hover:border-theme-primary/50 transition-colors cursor-pointer">
                <CardHeader className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4 text-theme-primary" />
                    <span className="text-foreground font-medium">Add Steps</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    Add conditions, visibility rules, validations, and other logic steps
                  </p>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  )
}
