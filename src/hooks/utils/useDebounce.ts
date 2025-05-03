import { useRef, useEffect, useCallback } from "react";

function useDebounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) {
  const timeoutRef = useRef<number | null>(null);

  const debouncedFunction = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay],
  );

  // Optional: Clear timeout if the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedFunction;
}

export default useDebounce;
