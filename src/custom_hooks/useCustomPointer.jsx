import { useState, useEffect } from "react";

export default function useCustomPointer(component) {
  const [posizione, setPosizione] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setPosizione({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouse);

    return () => document.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: posizione.y,
        left: posizione.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        cursor: "none",
      }}
    >
      {component}
    </div>
  );
}
