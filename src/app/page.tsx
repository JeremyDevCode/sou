"use client";

import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const tooManyNo = noCount >= 10;

  const handleNoClick = () => {
    setSize(size + 1);
    setNoSize(noSize - 0.1);
    setNoCount((prev) => prev + 1);
    setNoPosition({
      x: Math.random() * window.innerWidth * 0.5 - window.innerWidth * 0.25,
      y: Math.random() * window.innerHeight * 0.5 - window.innerHeight * 0.25,
    });
  };

  const getText = () => {
    if (accepted) return "Te quiero muchito";
    if (tooManyNo) return "Listo, te odio";
    return "¿Quieres ser mi San Valentin?";
  };

  const getBackgroundColor = () => {
    if (accepted) return "#DCCCE9";
    if (tooManyNo) return "#FAFCF9";
    return "#F9EFE9";
  };

  console.log(tooManyNo);
  return (
    <div
      className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <main className="flex flex-col gap-12 justify-center items-center font-bold text-3xl">
        <h3 className="text-black text-center">{getText()}</h3>
        {!accepted && !tooManyNo && (
          <div className="flex justify-between w-full">
            <button
              className="bg-green-500 px-8 py-4 rounded-lg"
              style={{ transform: `scale(${size})` }}
              onClick={() => setAccepted(true)}
            >
              Si
            </button>
            <button
              className="bg-red-500 px-8 py-4 rounded-lg"
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px) scale(${noSize})`,
              }}
              onClick={handleNoClick}
            >
              No
            </button>
          </div>
        )}
        {accepted && <img src="/yes.gif" />}
        {tooManyNo && <img src="/no.gif" />}
        {!accepted && !tooManyNo && <img src="/question.gif" />}
      </main>
    </div>
  );
}
