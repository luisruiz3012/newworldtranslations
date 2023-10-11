import { useState, useEffect } from "react"

export const Counter = ({number, title, prefix, delay}) => {
  const [count, setCount] = useState(0);

  const maxCount = number; // Change this to your desired maximum count

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < maxCount) {
        setCount(count + 1);
      }
    }, delay); // Adjust the interval (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, [count, maxCount]);

  return (
    <div className="px-10 font-semibold text-center">
      <p className="text-4xl">{ prefix }{ count }</p>
      <p className="text-lg">{ title }</p>
    </div>
  )
}