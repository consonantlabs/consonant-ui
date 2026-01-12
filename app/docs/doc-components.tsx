"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Check, AlertTriangle, Info, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

export function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-border bg-secondary/30 overflow-hidden my-6 group">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/50">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          <span className="text-xs text-muted-foreground ml-2 font-mono">{language}</span>
        </div>
        <button 
          onClick={copyToClipboard}
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  )
}

export function Callout({ 
  type = "info", 
  title, 
  children 
}: { 
  type?: "info" | "warning" | "success" | "danger"
  title?: string
  children: React.ReactNode 
}) {
  const styles = {
    info: { border: "border-primary/30", bg: "bg-primary/5", icon: Info, text: "text-primary" },
    warning: { border: "border-chart-4/30", bg: "bg-chart-4/5", icon: AlertTriangle, text: "text-chart-4" },
    success: { border: "border-green-500/30", bg: "bg-green-500/5", icon: Check, text: "text-green-500" },
    danger: { border: "border-destructive/30", bg: "bg-destructive/5", icon: AlertTriangle, text: "text-destructive" },
  }

  const style = styles[type]
  const Icon = style.icon

  return (
    <div className={cn("rounded-lg border p-4 my-6", style.border, style.bg)}>
      <div className="flex items-start gap-3">
        <Icon className={cn("w-5 h-5 shrink-0 mt-0.5", style.text)} />
        <div className="text-sm text-foreground/90">
          {title && <h5 className={cn("font-medium mb-1", style.text)}>{title}</h5>}
          {children}
        </div>
      </div>
    </div>
  )
}

export function NextStepCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link 
      href={href}
      className="group p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 transition-all block"
    >
      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
        {title}
        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </h4>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </Link>
  )
}

export function DocHeader({ title, description, label }: { title: string; description: string; label?: string }) {
  return (
    <div className="mb-12 border-b border-border pb-8">
      {label && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
          <Terminal className="w-3.5 h-3.5" />
          {label}
        </div>
      )}
      <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
        {description}
      </p>
    </div>
  )
}
