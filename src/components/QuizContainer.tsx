"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { questions } from "../data/questions";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";

export default function QuizContainer() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);

  const correctCount = answers.filter((a, i) => a === questions[i].answer).length;
  const percent = Math.round((correctCount / questions.length) * 100);

  // SCORE COUNTER ANIMATION
  useEffect(() => {
    if (submitted) {
      let start = 0;
      const end = percent;
      const duration = 1000;
      const increment = end / (duration / 16.67);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setDisplayScore(Math.round(start));
      }, 16.67);

      return () => clearInterval(timer);
    }
  }, [submitted, percent]);

  const handleSelect = (opt: string) => {
    const updated = [...answers];
    updated[index] = opt;
    setAnswers(updated);
  };

  // ========================= RESULT SCREEN =========================
  if (submitted) {
    return (
      <div
        className="w-full h-screen flex flex-col justify-center items-center"
        style={{
          background: "white",
        }}
      >
        {/* KEEP LEARNING PILL */}
        <div
          style={{
            padding: "8px 22px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
            color: "#2E516B",
            fontFamily: "Manrope",
            fontWeight: 500,
            fontSize: "18px",
            marginBottom: "22px",
          }}
        >
          Keep Learning!
        </div>

        {/* TITLE */}
        <h1
          style={{
            fontFamily: "DM Serif Display, serif",
            fontSize: "48px",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#2E516B",
            marginBottom: "-10px",
          }}
        >
          Your Final score is
        </h1>

        {/* ANIMATED % */}
        <motion.p
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#2E516B",
            fontSize: "120px",
            fontWeight: 600,
            marginTop: "0px",
            lineHeight: "1",
          }}
        >
          {displayScore}%
        </motion.p>

        {/* START AGAIN BUTTON */}
        <button
          onClick={() => {
            setSubmitted(false);
            setIndex(0);
            setAnswers(Array(questions.length).fill(null));
            setDisplayScore(0);
          }}
          style={{
            marginTop: "30px",
            width: "180px",
            height: "50px",
            borderRadius: "10px",
            border: "1px solid #96E5FF",
            background:
              "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
            color: "#2E516B",
            fontFamily: "Manrope",
            fontSize: "18px",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
          }}
        >
          Start Again
        </button>
      </div>
    );
  }

  // ========================= QUIZ SCREEN =========================
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        background:
          "linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)",
      }}
    >
      <div
        style={{
          width: "1542px",
          height: "856px",
          borderRadius: "42px",
          border: "0.8px solid rgba(255,255,255,0.92)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.16)",
          padding: "32px",
          background:
            "linear-gradient(120deg, #BECFEE 0%, #7BC4DA 45%, #D9F4FA 75%, #BECFEE 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "32px",
            background: "#F4FDFF",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* ANSWER ALL QUESTIONS PILL */}
          <div
            style={{
              position: "absolute",
              top: 190,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 30,
            }}
          >
            <div
              style={{
                padding: "8px 22px",
                background: "white",
                borderRadius: 12,
                boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                color: "#000000",
                fontFamily: "Manrope",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "-0.31px",
                textAlign: "center",
              }}
            >
              Answer all questions to see your results
            </div>
          </div>

          {/* PAW + BUBBLE ONLY ON FIRST PAGE */}
          {index === 0 && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 30,
                zIndex: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <div style={{ position: "relative", marginBottom: -6 }}>
                <img src="/bubble.svg" style={{ width: 180 }} />
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#2E516B",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Best of Luck!
                </span>
              </div>

              <motion.img
                src="/paw.gif"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 175,
                  marginTop: -10,
                  filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.2))",
                }}
              />
            </div>
          )}

          {/* MAIN CONTENT */}
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 56,
              zIndex: 10,
            }}
          >
            {/* TITLE */}
            <h1
              className="text-center"
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: 90,
                fontStyle: "italic",
                letterSpacing: "-4px",
                margin: 0,
                fontWeight: 400,
                background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Test Your Knowledge
            </h1>

            <div style={{ width: 896, marginTop: 70, marginBottom: 32 }}>
              <ProgressBar index={index} total={questions.length} />
            </div>

            <div style={{ marginTop: 24 }}>
              <QuestionCard
                question={questions[index]}
                selected={answers[index]}
                onSelect={handleSelect}
              />
            </div>

            {/* NAVIGATION BUTTONS */}
            <div
              style={{
                width: 896,
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 28,
                gap: 12,
              }}
            >
              {/* LEFT ARROW ALWAYS VISIBLE */}
              <button
                disabled={index === 0}
                onClick={() => index > 0 && setIndex(index - 1)}
                className={`w-[62px] h-[58px] rounded-[10px] text-[40px] font-medium
                ${
                  index === 0
                    ? "bg-[#E5F8FF80] border border-[#96E5FF80] text-[#2E516B80]"
                    : "bg-[#E5F8FF] border border-[#96E5FF] text-[#2E516B] shadow"
                }`}
              >
                ←
              </button>

              {/* RIGHT ARROW OR SUBMIT */}
              {index < questions.length - 1 ? (
                <button
                  onClick={() => setIndex(index + 1)}
                  className="w-[62px] h-[58px] rounded-[10px] bg-[#E5F8FF] border border-[#96E5FF] text-[#2E516B] text-[40px] shadow"
                >
                  →
                </button>
              ) : (
                <button
                  onClick={() => setSubmitted(true)}
                  style={{
                    width: "150px",
                    height: "50px",
                    borderRadius: "10px",
                    border: "1px solid #96E5FF",
                    background:
                      "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
                    color: "#2E516B",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                  className="shadow"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}