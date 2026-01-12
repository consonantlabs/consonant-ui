"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  ChevronRight, 
  ChevronDown,
  BookOpen, 
  Rocket, 
  Layers, 
  Code2, 
  Shield, 
  Activity,
  Settings,
  Plug,
  FileText,
  Menu,
  X,
  Search,
  Github,
  ArrowLeft
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  title: string
  href?: string
  icon?: React.ReactNode
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: "Introduction",
    icon: <BookOpen className="w-4 h-4" />,
    children: [
      { title: "What is Consonant?", href: "/docs" },
      { title: "Why Consonant?", href: "/docs/why-consonant" },
      { title: "Core Concepts", href: "/docs/core-concepts" },
      { title: "Comparison", href: "/docs/comparison" },
    ],
  },
  {
    title: "Getting Started",
    icon: <Rocket className="w-4 h-4" />,
    children: [
      { title: "Quickstart", href: "/docs/quickstart" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Your First Agent", href: "/docs/first-agent" },
      { title: "Your First Workflow", href: "/docs/first-workflow" },
    ],
  },
  {
    title: "Architecture",
    icon: <Layers className="w-4 h-4" />,
    children: [
      { title: "Overview", href: "/docs/architecture" },
      { title: "Control Plane", href: "/docs/architecture/control-plane" },
      { title: "Agent Runtime", href: "/docs/architecture/agent-runtime" },
      { title: "State Management", href: "/docs/architecture/state" },
    ],
  },
  {
    title: "Core Guides",
    icon: <Code2 className="w-4 h-4" />,
    children: [
      { title: "Agent Development", href: "/docs/guides/agent-development" },
      { title: "Orchestration", href: "/docs/guides/orchestration" },
      { title: "Policy Enforcement", href: "/docs/guides/policy-enforcement" },
      { title: "Observability", href: "/docs/guides/observability" },
      { title: "Human-in-the-Loop", href: "/docs/guides/human-in-the-loop" },
    ],
  },
  {
    title: "Operations",
    icon: <Settings className="w-4 h-4" />,
    children: [
      { title: "Deployment Patterns", href: "/docs/operations/deployment" },
      { title: "Scaling", href: "/docs/operations/scaling" },
      { title: "Security", href: "/docs/operations/security" },
      { title: "Monitoring", href: "/docs/operations/monitoring" },
    ],
  },
  {
    title: "API Reference",
    icon: <FileText className="w-4 h-4" />,
    children: [
      { title: "REST API", href: "/docs/api/rest" },
      { title: "CLI Reference", href: "/docs/api/cli" },
      { title: "SDK Reference", href: "/docs/api/sdk" },
    ],
  },
  {
    title: "Integrations",
    icon: <Plug className="w-4 h-4" />,
    children: [
      { title: "LangChain", href: "/docs/integrations/langchain" },
      { title: "AutoGen", href: "/docs/integrations/autogen" },
      { title: "CrewAI", href: "/docs/integrations/crewai" },
      { title: "Custom Agents", href: "/docs/integrations/custom" },
    ],
  },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile menu */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Consonant</span>
              <span className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">Docs</span>
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded">⌘K</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link 
              href="https://github.com/consonant-ai/consonant" 
              target="_blank"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Button size="sm" variant="outline" asChild className="hidden sm:flex">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="pt-16 lg:flex">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] w-72 border-r border-border bg-background overflow-y-auto transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <nav className="p-4 space-y-1">
            {navigation.map((section, index) => (
              <NavSection key={index} item={section} />
            ))}
          </nav>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

function NavSection({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(true)
  
  const isActive = item.children?.some(child => child.href === pathname)

  return (
    <div className="mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
          isActive ? "text-primary" : "text-foreground hover:bg-secondary/50"
        }`}
      >
        {item.icon}
        <span className="flex-1 text-left">{item.title}</span>
        {expanded ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      
      {expanded && item.children && (
        <div className="mt-1 ml-4 pl-3 border-l border-border space-y-0.5">
          {item.children.map((child, index) => (
            <NavLink key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const isActive = pathname === item.href
  
  return (
    <Link
      href={item.href || "#"}
      className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
        isActive 
          ? "text-primary bg-primary/5 font-medium" 
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
      }`}
    >
      {item.title}
    </Link>
  )
}
