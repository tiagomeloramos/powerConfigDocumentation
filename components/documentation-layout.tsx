"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { TableOfContents } from "@/components/table-of-contents"

interface DocumentationLayoutProps {
  children: React.ReactNode
}

export function DocumentationLayout({ children }: DocumentationLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopNavigation onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} />
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-80" : "ml-0"}`}>
          <div className="flex">
            <div className="flex-1 p-8 max-w-6xl">{children}</div>

            <div className="hidden xl:block w-64 p-8">
              <TableOfContents />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
