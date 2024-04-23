import { useEffect, useState } from "react";
import {} from "react-dom";

export function useFirstCountCount(runCount: number) {
  const [count, setCount] = useState(0);
  const [isCountFinish, setIsCountFinish] = useState(false);

  useEffect(() => {
    for (let i = 0; i < runCount; i++) {
      setTimeout(() => {
        setCount((c) => c + 1);
        if ((runCount - 1) === i) {
          setIsCountFinish(true);
        }
      }, i * 1000);
    }
  }, []);

  return {
    count,
    isCountFinish,
  };
}
