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

  const getStatusImage = () => {
    if (accepted)
      return "https://media1.tenor.com/m/DDRz38sfMSIAAAAd/milk-mocha-bear.gif";
    if (tooManyNo)
      return "https://media1.tenor.com/m/umwFdDPwCJAAAAAd/i-have-been-bullied-a-lot-how-could-you-do-this-to-me.gif";
    return "https://images-ext-1.discordapp.net/external/tKi9YcGW7wejplEquIWkMptg0zTwAW5eAmYCyGmWBTk/https/media.tenor.com/tAtFFcpDDgQAAAPo/milk-and-mocha-milk-mocha-bear.mp4";
  };

  console.log(tooManyNo);
  return (
    <div
      className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <main className="flex flex-col gap-12 justify-center items-center font-bold text-3xl">
        <h3 className="text-black">{getText()}</h3>
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

        <img src={getStatusImage()} />
      </main>
    </div>
  );
}
