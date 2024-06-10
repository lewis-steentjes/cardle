"use client";
import { useState } from "react";
import HintPicture from "./HintPicture";
import GuessCounter from "./GuessCounter";
import Guesser from "./Guesser";
import Guess from "../_models/Guess";
import AdCard from "./AdCard";

export default function Game() {
  // const guessProps1: Guess = {
  //   make: "honda",
  //   model: "civic",
  //   makeIsCorrect: false,
  //   modelIsCorrect: false,
  // };
  // const guessProps2: Guess = {
  //   make: "toyota",
  //   model: "aqua",
  //   makeIsCorrect: true,
  //   modelIsCorrect: false,
  // };
  const [history, setHistory] = useState([] as Guess[]);
  const latestEntry = history[history.length - 1];
  const maxAttempts = 6;
  const isFinished =
    (latestEntry?.makeIsCorrect && latestEntry?.modelIsCorrect) || history.length == maxAttempts;
  let guessNo = history.length;
  if (isFinished) guessNo--;
  return (
    <div className="flex flex-col items-center bg-[#e8e8e8] max-w-screen-lg rounded-xl">
      <HintPicture />
      <GuessCounter guessNo={guessNo} isFinished={isFinished} />
      <Guesser history={history} setHistory={setHistory} />
      <AdCard isFinished={isFinished} />
    </div>
  );
}
