import ClientQuiz from "@/components/ClientQuiz";

export default function Home() {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)",
        backdropFilter: "blur(200px)",
      }}
    >
      <ClientQuiz />
    </div>
  );
}