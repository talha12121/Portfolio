"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import LetsEat from "../assets/letseat_pic.png"
import Bella from "../assets/bella.png"

const projects = [
  {
    id: 1,
    title: "Let's Eat",
    imageUrl: LetsEat ,
    
    href:"https://letseat.ky/"
  },
  {
    id: 2,
    title: "Bella Staffing",
    imageUrl: Bella,
    href:"https://admin.bellastaffing.co/ "
    
  },
  {
    id: 3,
    title: "Intuitive Mobile App",
    imageUrl: "/placeholder.svg?height=600&width=800",
    
  },
  {
    id: 4,
    title: "Elegant Digital Campaign",
    imageUrl: "/placeholder.svg?height=800&width=600",
    
  },
  {
    id: 5,
    title: "Refined UI/UX Design",
    imageUrl: "/placeholder.svg?height=600&width=800",
    
  },
  {
    id: 6,
    title: "Minimalist Product Design",
    imageUrl: "/placeholder.svg?height=800&width=600",
    
  },
]


export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="projects"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our minimalist designs and creative solutions.
          </p>
        </motion.div>

       

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
