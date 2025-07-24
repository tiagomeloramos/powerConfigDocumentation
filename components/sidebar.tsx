"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Users,
  Play,
  Zap,
  Terminal,
  Settings,
  Layers,
  FolderOpen,
  ChevronDown,
  ChevronRight,
  Eye,
  CheckCircle2,
  CircleAlert,
  Regex,
  Split,
} from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
}

interface NavItem {
  title: string
  icon: React.ReactNode
  href?: string
  children?: NavItem[]
}

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>(["get-started"])

  useEffect(() => {
    const sectionsToExpand = sections
      .filter(section => section.items.some(item => pathname === item.href))
      .map(section => section.key)
    
    if (sectionsToExpand.length > 0) {
      setExpandedSections(prev => [
        // Keep currently expanded sections that aren't in our new list
        ...prev.filter(key => !sectionsToExpand.includes(key)),
        // Add the new sections
        ...sectionsToExpand
      ])
    }
  }, [pathname])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => 
      prev.includes(section) 
        ? prev.filter((s) => s !== section) 
        : [...prev, section]
    )
  }  

  const navItems: NavItem[] = [
    {
      title: "Documentation",
      icon: <BookOpen className="h-4 w-4" />,
      href: "/docs",
    },
    {
      title: "Community",
      icon: <Users className="h-4 w-4" />,
      href: "/community",
    },
  ]

  const sections = [
    {
      title: "Get Started",
      key: "get-started",
      items: [
        { title: "Install", icon: <Play className="h-4 w-4" />, href: "/" },
        { title: "Creating a Flow", icon: <Zap className="h-4 w-4" />, href: "/first-flow" },
      ],
    },
    {
      title: "Node Types",
      key: "node-types",
      items: [
        { title: "Condition", icon: <Split className="h-4 w-4" />, href: "/node/condition" },
        { title: "Visibility", icon: <Eye className="h-4 w-4" />, href: "/node/visibility" },
        { title: "Required", icon: <CheckCircle2 className="h-4 w-4" />, href: "/node/required" },
        { title: "Value", icon: <Zap className="h-4 w-4" />, href: "/node/value" },
        { title: "Validation", icon: <Regex className="h-4 w-4" />, href: "/node/validation" },
        { title: "Alert", icon: <CircleAlert className="h-4 w-4" />, href: "/node/alert" },
      ],
    },
    {
      title: "Essentials",
      key: "essentials",
      items: [
        { title: "Triggers", icon: <Zap className="h-4 w-4" />, href: "/triggers" },
        { title: "Actions", icon: <Terminal className="h-4 w-4" />, href: "/command-bar" },
      ],
    },
  ]

  // Check if section contains the current path
  const isSectionActive = (sectionKey: string) => {
    const section = sections.find(s => s.key === sectionKey)
    return section?.items.some(item => pathname === item.href)
  }

  if (!isOpen) return null

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-gray-800 border-r border-gray-700 overflow-y-auto">
      <div className="p-6">
        {/* Top Navigation Tabs */}
        <div className="flex mb-12 border-b border-gray-700 justify-start">
          <Button variant="ghost" className="text-emerald-400 border-b-2 border-emerald-400 rounded-none px-4 py-1 text-left w-full">
            Documentation
          </Button>
          {/*<Button variant="ghost" className="text-gray-400 hover:text-white rounded-none px-4 py-2">
            Controls
          </Button>*/}
        </div>

        {/* Main Navigation */}
        <nav className="space-y-6">
          {/* Top Level Items 
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link key={item.title} href={item.href || "#"}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${pathname === item.href ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Button>
              </Link>
            ))}
          </div>*/}

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.key} className="space-y-1">
              <Button
                variant="ghost"
                onClick={() => toggleSection(section.key)}
                className={`w-full justify-between ${isSectionActive(section.key) ? 'text-emerald-400' : 'text-gray-300 hover:text-white'} font-medium`}
              >
                <span>{section.title}</span>
                {expandedSections.includes(section.key) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>

              {expandedSections.includes(section.key) && (
                <div className="ml-4 space-y-1">
                  {section.items.map((item) => (
                    <Link key={item.title} href={item.href || "#"}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-sm ${
                          pathname === item.href
                            ? "text-emerald-400 bg-emerald-500/10"
                            : "text-gray-400 hover:text-white hover:bg-gray-700"
                        }`}
                      >
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}