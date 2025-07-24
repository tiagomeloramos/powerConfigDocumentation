import { DocumentationLayout } from "@/components/documentation-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { List } from "@radix-ui/react-tabs"
import { AlertCircle, Bell, BellRing, CheckCircle2, CircleAlert } from "lucide-react"
import Image from "next/image"

export default function AlertPage() {
  return (
    <DocumentationLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-theme-primary">
            <span>Actions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-primary/10 rounded-lg">
              <AlertCircle className="h-6 w-6 text-red-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">Alert Node</h1>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            Configure notifications and confirmations to communicate important information to users.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="actions">Alert Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">User Notifications</h2>
              <p className="text-gray-400">
                Alert nodes let you display important messages and confirmation dialogs to users at key moments in your
                application flow.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Show notifications and confirmation dialogs</li>
                <li>Customize message content and styling</li>
                <li>Configure auto-dismiss timing</li>
                <li>Add action buttons to notifications</li>
                <li>Trigger based on conditions or events</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="space-y-6 pt-4">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Alert Actions</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure different types of alerts and notifications
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
                          <Bell className="h-4 w-4 text-theme-primary" />
                          <span className="text-gray-400">Notification</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BellRing className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-400">Confirmation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <Image
                      src="/powerConfigDocumentation/images/alert/alert-actions-list.png"
                      alt="Alert Actions List"
                      width={400}
                      height={200}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-medium text-white">Adding a New Alert Action</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Click "Add Action"</h4>
                        <p className="text-gray-400 mt-1">Open the alert action configuration</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Choose Operation Type</h4>
                        <p className="text-gray-400 mt-1">Select notification or confirmation</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-theme-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-theme-primary font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Enter Message</h4>
                        <p className="text-gray-400 mt-1">Specify the content to display</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                      <Image
                        src="/powerConfigDocumentation/images/alert/alert-notification.png"
                        alt="Alert Notification"
                        width={600}
                        height={300}
                        className="w-full"
                      />
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                      <Image
                        src="/powerConfigDocumentation/images/alert/alert-confirmation.png"
                        alt="Alert Confirmation"
                        width={600}
                        height={300}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Branching Behavior For Alert Notification</CardTitle>
                <CardDescription className="text-gray-400">
                  Your flow takes different paths based on user approach
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-theme-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">True Path</h4>
                    <p className="text-gray-400">Executes when user confirm the Alert Confirmation</p>
                    <p className="text-sm text-gray-500 mt-1">Example: When user confirms, field will be displayed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CircleAlert className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">False Path</h4>
                    <p className="text-gray-400">Executes when user cancels the Alert Confirmation</p>
                    <p className="text-sm text-gray-500 mt-1">Example: When user cancels, notification will display</p>
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
