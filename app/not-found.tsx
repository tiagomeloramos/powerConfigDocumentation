import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DocumentationLayout } from "@/components/documentation-layout"
import type { ReactElement } from "react"

export default function NotFound(): ReactElement {
  return (
    <DocumentationLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-muted-foreground mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mb-6">Oops! Page not found</h2>
          <p className="text-muted-foreground mb-8">We couldn't find the page you were looking for.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild className="bg-theme-primary hover:bg-theme-primary/90 text-white">
              <Link href="/">Home</Link>
            </Button>
            <Button variant="outline" asChild className="border-border text-foreground hover:bg-accent bg-transparent">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  )
}
