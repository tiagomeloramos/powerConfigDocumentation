"use client"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Play, Zap, Terminal } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()

  const sections = [
    {
      title: "Get Started",
      key: "get-started",
      items: [
        { title: "Install", icon: <Play className="h-4 w-4" />, href: "/" },
        { title: "Creating a Rule", icon: <Zap className="h-4 w-4" />, href: "/first-rule" },
      ],
    },
    {
      title: "Essentials",
      key: "essentials",
      items: [
        { title: "Triggers", icon: <Zap className="h-4 w-4" />, href: "/triggers" },
        { title: "Steps", icon: <Terminal className="h-4 w-4" />, href: "/steps" },
      ],
    },
  ]

  // Check if section contains the current path
  const isSectionActive = (sectionKey: string) => {
    const section = sections.find((s) => s.key === sectionKey)
    return section?.items.some((item) => (item.href === "/" ? pathname === "/" : pathname.includes(item.href)))
  }

  if (!isOpen) return null

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-card border-r border-border overflow-y-auto">
      <div className="p-6">
        {/* Top Navigation Tabs */}
        <div className="flex mb-12 border-b border-border justify-start">
          <Button
            variant="ghost"
            className="text-theme-primary border-b-2 border-theme-primary rounded-none px-4 py-1 text-left w-full"
          >
            Documentation
          </Button>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-6">
          {/* Sections - Always expanded */}
          {sections.map((section) => (
            <div key={section.key} className="space-y-1">
              <Button
                variant="ghost"
                className={`w-full justify-between ${isSectionActive(section.key) ? "text-theme-primary" : "text-muted-foreground hover:text-foreground"} font-medium`}
              >
                <span>{section.title}</span>
              </Button>

              {/* Always show items */}
              <div className="ml-4 space-y-1">
                {section.items.map((item) => (
                  <Link key={item.title} href={item.href || "#"}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-sm ${
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.includes(item.href)
                            ? "text-theme-primary bg-theme-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
