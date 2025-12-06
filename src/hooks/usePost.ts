import { useState } from "react"

export function usePost<T, R>(fn: (data: T) => Promise<R>) {
  const [loading, setLoading] = useState(false)

  async function execute(data: T): Promise<R> {
    setLoading(true)
    const result = await fn(data)
    setLoading(false)
    return result
  }

  return { execute, loading }
}
