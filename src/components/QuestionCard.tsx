"use client";

type Props = {
  question: {
    id: number;
    question: string;
    options: string[];
  };
  selected?: string;
  onSelect: (opt: string) => void;
};

export default function QuestionCard({ question, selected, onSelect }: Props) {
  return (
    <div className="flex flex-col items-center">
      {/* Question Box */}
      <div
        className="w-[896px] h-[78px] flex items-center justify-center rounded-[10px] mb-[24px]"
        style={{
          background: "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
          border: "1px solid #96E5FF",
        }}
      >
        <span
          className="text-[#2E516B] font-bold"
          style={{
            fontSize: "24px",   // ⬅️ increased from 20px
            fontWeight: 700,
          }}
        >
          {question.id}. {question.question}
        </span>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-[16px]">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="w-[896px] h-[78px] rounded-[10px] flex items-center justify-center font-bold"
            style={{
              fontSize: "22px", // ⬅️ increased from 18px
              background:
                selected === opt
                  ? "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)"
                  : "linear-gradient(89.72deg, rgba(198, 233, 247, 0.1) 0.09%, rgba(229, 248, 255, 0.1) 99.91%)",

              border: "1px solid #96E5FF80",
              color: "#2E516B",
              fontWeight: 700,
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}