// This is a simplified version. For a full implementation, you might want to use a library like react-hot-toast
import { useState, useCallback } from 'react'

export interface Toast {
  title: string
  description?: string
}

export function useToast() {
  const [toast, setToast] = useState<Toast | null>(null)

  const showToast = useCallback((newToast: Toast) => {
    setToast(newToast)
    setTimeout(() => setToast(null), 3000) // Hide after 3 seconds
  }, [])

  return { toast, showToast }
}