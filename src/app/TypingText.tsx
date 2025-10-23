"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText() {
  return (
    <span className="text-[#19d090] text-2xl md:text-3xl font-medium">
      <Typewriter
        words={["Web Developer & AIML Enthusiast"]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
}
