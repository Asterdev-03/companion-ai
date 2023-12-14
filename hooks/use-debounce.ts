import { useEffect, useState } from "react";

/*  
  This function is used for debouncing, i.e. to ensure that 
  time-consuming tasks do not fire so often, that it stalls the performance 
  of the web page. In other words, it limits the rate at which a function gets invoked.
*/
export function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay || 500);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}
