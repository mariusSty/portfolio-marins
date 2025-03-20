"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="text-xl font-bold">
          MonPortfolio
        </Link>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 flex-col md:flex-row items-center gap-6 p-4 md:p-0 bg-background md:bg-transparent border-b md:border-0`}
        >
          <Link href="#accueil" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
            Accueil
          </Link>
          <Link href="#a-propos" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
            À propos
          </Link>
          <Link href="#competences" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
            Compétences
          </Link>
          <Link href="#projets" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
            Projets
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
            Contact
          </Link>
          <Button className="w-full md:w-auto">Télécharger CV</Button>
        </nav>
      </div>
    </header>
  )
}

