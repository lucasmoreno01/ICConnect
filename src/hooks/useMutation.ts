// hooks/useMutation.ts
import { useState, useCallback } from "react";

interface UseMutationOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export function useMutation<T, V = unknown>(
  mutationFn: (variables: V) => Promise<T>,
  options?: UseMutationOptions<T>
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = useCallback(
    async (variables: V) => {
      setLoading(true);
      setError(null);

      try {
        const result = await mutationFn(variables);
        setData(result);
        if (options?.onSuccess) {
          options.onSuccess(result);
        }
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setError(error);
        if (options?.onError) {
          options.onError(error);
        }
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [mutationFn, options]
  );

  return {
    mutate,
    data,
    loading,
    error,
    reset: () => {
      setData(null);
      setError(null);
    },
  };
}