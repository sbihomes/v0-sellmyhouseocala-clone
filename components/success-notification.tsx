"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, X } from "lucide-react"

interface SuccessNotificationProps {
  show: boolean
  onClose: () => void
}

export function SuccessNotification({ show, onClose }: SuccessNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 max-w-md w-full md:w-auto animate-in fade-in slide-in-from-bottom-5">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-green-200 dark:border-green-900 p-4 md:p-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 flex-shrink-0">
            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-500" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg">Request Received!</h3>
              <button
                onClick={() => {
                  setIsVisible(false)
                  onClose()
                }}
                className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Thank you for your submission. We'll reach out with a cash offer within 24 hours!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
