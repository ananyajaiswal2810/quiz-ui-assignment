"use client";

import { motion } from "framer-motion";

export default function OptionButton({
  option,
  selected,
  onSelect,
}: {
  option: string;
  selected: string;
  onSelect: (opt: string) => void;
}) {
  const isSelected = selected === option;

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onSelect(option)}
      className={`
        w-full py-4 px-4 rounded-2xl text-[18px] transition-all
        border shadow-sm text-left
        ${
          isSelected
            ? "bg-[#DFF1FF] border-[#2E516B] text-[#2E516B] shadow-md scale-[1.02]"
            : "bg-white/70 text-[#2E516B] border-transparent hover:bg-white hover:shadow-md"
        }
      `}
    >
      {option}
    </motion.button>
  );
}