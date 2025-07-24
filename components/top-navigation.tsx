"use client"

import { Search, Menu, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface TopNavigationProps {
  onMenuClick: () => void
}

export function TopNavigation({ onMenuClick }: TopNavigationProps) {
  const [isDark, setIsDark] = useState(true)

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onMenuClick} className="text-gray-400 hover:text-white lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-white font-semibold">Power Config</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/*<div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-600 px-2 py-1 rounded">
              Ctrl K
            </kbd>
          </div>*/}

          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            Support
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="text-gray-400 hover:text-white"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
