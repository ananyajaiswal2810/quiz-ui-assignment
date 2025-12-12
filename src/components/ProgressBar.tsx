"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  index: number;
  total: number;
};

export default function ProgressBar({ index, total }: ProgressBarProps) {
  return (
    <div
      style={{
        width: "896px",
        height: "8px",
        display: "flex",
        gap: "6px",
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: "8px",
            background: "#E6F4FF",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: index >= i ? "100%" : "0%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{
              height: "100%",
              background: "#1C3C55",
              borderRadius: "10px",
            }}
          />
        </div>
      ))}
    </div>
  );
}