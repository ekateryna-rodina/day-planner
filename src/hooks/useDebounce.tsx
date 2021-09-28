import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number) {
  const [debauncedValue, setDebauncedValue] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebauncedValue(value), delay ?? 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);
  return debauncedValue;
}

export default useDebounce;
