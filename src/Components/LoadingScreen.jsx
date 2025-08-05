import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [hide, setHide] = useState(false);
  const fullText = " Loading.....";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setHide(true);

          setTimeout(() => {
            onComplete();
          }, 800);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={"/public/bgk.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
