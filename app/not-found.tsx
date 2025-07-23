// app/not-found.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DocumentationLayout } from "@/components/documentation-layout"
import { ReactElement } from 'react'

export default function NotFound(): ReactElement {
  return (
    <DocumentationLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-white-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-white-700 mb-6">Oops! Page not found</h2>
          <p className="text-white-600 mb-8">
            We couldn't find the page you were looking for.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  )
}