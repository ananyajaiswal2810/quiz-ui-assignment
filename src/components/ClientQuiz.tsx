"use client";

import { useEffect, useState } from "react";
import QuizContainer from "./QuizContainer";

export default function ClientQuiz() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportH = window.innerHeight;
      const baseH = 1080; // original Figma canvas height
      const newScale = viewportH / baseH;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          width: "1920px",
          height: "1080px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <QuizContainer />
      </div>
    </div>
  );
}