'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'

import { queryClient } from '@/services/queryClient'

import { SidebarProvider } from './SidebarContext'

interface ContextsProvidersProps {
  children: ReactNode
}

export function ContextsProviders({ children }: ContextsProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </SidebarProvider>
    </QueryClientProvider>
  )
}
