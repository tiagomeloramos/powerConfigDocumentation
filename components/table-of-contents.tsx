"use client"

import { Button } from "@/components/ui/button"

export function TableOfContents() {
  const tocItems = [
    { title: "Setting up", href: "#setting-up" },
    { title: "Get Started", href: "#get-started" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>On this page</span>
      </div>

      <nav className="space-y-2">
        {tocItems.map((item) => (
          <Button
            key={item.title}
            variant="ghost"
            size="sm"
            className="w-full justify-start text-muted-foreground hover:text-theme-primary font-normal"
            asChild
          >
            <a href={item.href}>{item.title}</a>
          </Button>
        ))}
      </nav>
    </div>
  )
}
