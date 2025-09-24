"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface FormContextType {
  sharedAddress: string
  setSharedAddress: (address: string) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: ReactNode }) {
  const [sharedAddress, setSharedAddress] = useState("")

  return <FormContext.Provider value={{ sharedAddress, setSharedAddress }}>{children}</FormContext.Provider>
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}
