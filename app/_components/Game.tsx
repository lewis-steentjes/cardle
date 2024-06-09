"use client";
import { createContext, useContext, useState } from "react";
import HintPicture from "./HintPicture";
import GuessCounter from "./GuessCounter";
import Guesser from "./Guesser";

export default function Game() {
  const GameState = createContext(null);
  const [guessNo, setGuessNo] = useState(2);
  const isFinished = false;
  return (
    <GameState.Provider value={null}>
      <div className="flex flex-col items-center bg-slate-800 max-w-screen-lg rounded-xl">
        <HintPicture />
        <GuessCounter guessNo={guessNo} isFinished={isFinished} />
        <Guesser />
      </div>
    </GameState.Provider>
  );
}
