"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, Search, Home as HomeIcon } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const docsConfig = {
  nav: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs" },
        { title: "Quickstart", href: "/docs/quickstart" },
        { title: "Core Concepts", href: "/docs/concepts" },
        { title: "Architecture", href: "/docs/architecture" },
      ],
    },
    {
      title: "Guides",
      items: [
        { title: "Agent Development", href: "/docs/guides/agent-development" },
        { title: "Orchestration", href: "/docs/guides/orchestration" },
        { title: "Policy Enforcement", href: "/docs/guides/policy-enforcement" },
        { title: "Observability", href: "/docs/guides/observability" },
        { title: "Human-in-the-Loop", href: "/docs/guides/human-in-the-loop" },
      ],
    },
    {
      title: "Reference",
      items: [
        { title: "CLI Reference", href: "/docs/reference/cli" },
        { title: "API Reference", href: "/docs/reference/api" },
        { title: "Configuration", href: "/docs/reference/config" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "FAQ", href: "/docs/faq" },
        { title: "Troubleshooting", href: "/docs/troubleshooting" },
        { title: "Community", href: "/docs/community" },
      ],
    },
  ],
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Nav Header (only visible on small screens) */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
        <div className="flex h-14 items-center px-4">
          <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
               <div className="px-4 py-4">
                 <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-6">
                    <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs">C</div>
                    Consonant
                 </Link>
                 <DocsSidebarNav items={docsConfig.nav} setOpen={setIsMobileNavOpen} />
               </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1 font-semibold text-sm">Documentation</div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        
        {/* Desktop Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <div className="mb-4 px-2">
               <div className="relative">
                 <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                 <input 
                   placeholder="Search documentation..." 
                   className="w-full rounded-md border border-input bg-secondary/20 px-8 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                 />
                 <div className="absolute right-2 top-2.5 text-[10px] text-muted-foreground border border-border rounded px-1.5 bg-background">⌘K</div>
               </div>
            </div>
            <DocsSidebarNav items={docsConfig.nav} />
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
          <div className="mx-auto w-full min-w-0">
            {/* Breadcrumb placeholder - simplified for now */}
            <div className="mb-4 flex items-center text-sm text-muted-foreground">
               <Link href="/" className="hover:text-foreground"><HomeIcon className="w-4 h-4" /></Link>
               <ChevronRight className="w-4 h-4 mx-1" />
               <span className="font-medium text-foreground">Docs</span>
            </div>
            
            {children}
            
            {/* Page Footer Navigation placeholde r*/}
            <div className="mt-16 flex justify-between border-t border-border pt-8">
               {/* This helps navigation flow - could be automated later */}
            </div>
          </div>
          
          {/* Right Sidebar (TOC) */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-10">
              <ScrollArea className="h-full pb-10">
                 <div className="space-y-2">
                   <p className="font-medium text-foreground">On This Page</p>
                   <ul className="m-0 list-none space-y-2">
                     {/* Static TOC placeholder - in real app this would parse children */}
                     <li>
                       <a href="#" className="text-muted-foreground hover:text-foreground">Overview</a>
                     </li>
                   </ul>
                 </div>
              </ScrollArea>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

interface DocsSidebarNavProps {
  items: {
    title: string
    items: {
      title: string
      href: string
      items?: any[]
    }[]
  }[]
  setOpen?: (open: boolean) => void
}

function DocsSidebarNav({ items, setOpen }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
            {item.title}
          </h4>
          {item.items?.length && (
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {item.items.map((navItem, index) => (
                <Link
                  key={index}
                  href={navItem.href}
                  className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground hover:text-foreground ${
                     pathname === navItem.href ? "font-medium text-primary" : ""
                  }`}
                  onClick={() => setOpen?.(false)}
                >
                  {navItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
