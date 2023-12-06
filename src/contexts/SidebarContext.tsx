'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface SidebarProviderProps {
  children: ReactNode
}

interface SidebarContextProps {
  expanded: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext({} as SidebarContextProps)

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [expanded, setExpanded] = useState(false)

  function toggleSidebar() {
    setExpanded(!expanded)
  }

  return (
    <SidebarContext.Provider
      value={{
        expanded,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

const useSidebar = () => useContext(SidebarContext)

export { SidebarContext, SidebarProvider, useSidebar }
