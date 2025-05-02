"use client"

import { useRef } from "react"
import Header from "./Header"

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  
  const ScrollToContent = (id: string) => {
    const section = document.getElementById(id)
    console.log(section ,"section")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Header onButtonClick={ScrollToContent} />
      <main>{children}</main>
    </>
  )
}
