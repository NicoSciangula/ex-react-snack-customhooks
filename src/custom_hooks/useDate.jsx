import { useState, useEffect } from "react";

export default function useDate() {
  const [currentData, setCurrentData] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date().toLocaleString("it-IT");
      setCurrentData(date);
    }, 1000);
  }, []);

  return currentData;
}
