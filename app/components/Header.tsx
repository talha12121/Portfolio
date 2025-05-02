"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

type HeaderProps = {
  onButtonClick: (id: string) => void
}
export default function Header({ onButtonClick }: HeaderProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const navLinks = [
    { name: "Projects", id: "projects" },
    { name: "About", id: "abouts" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-1">
      <button
            onClick={() => setMobileMenuOpen(true)}
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <Link href="/" className="-m-1.5 p-1.5 text-lg font-bold text-gradient">
          
            Talha .
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-x-12">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              onClick={() => onButtonClick(link.id)}
              style={{background:"none !important"}}

              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Button>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}

          {/* Hamburger Button (only on small screens) */}
        
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      className="sm:hidden fixed inset-0 z-50 bg-background p-6"
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.3 }}
      style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
    >
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-lg font-bold">
          Talha .
        </Link>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="rounded-md p-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="space-y-4" style={{background:"rgb(2 8 23)"}}>
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => onButtonClick(link.id)}
            style={{background:"none !important"}}


            className="block text-base font-semibold text-foreground hover:text-primary transition-colors"
          >
            {link.name}
          </button>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.header>
  )
}
