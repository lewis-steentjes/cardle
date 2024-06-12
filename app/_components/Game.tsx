"use client";
import { useState } from "react";
import TitleCard from "./TitleCard";
import HintPicture from "./HintPicture";
import GuessCounter from "./GuessCounter";
import Guesser from "./Guesser";
import Guess from "../_models/Guess";
import AdCard from "./AdCard";
import GuessInput from "./GuessInput";
import GameWatcher from "./GameWatcher";

export default function Game() {
  const maxAttempts = 6;
  const images: string[] = [
    "https://trademe.tmcdn.co.nz/photoserver/1024sq/2121798163.jpg",
    "https://trademe.tmcdn.co.nz/photoserver/1024sq/2121798174.jpg",
    "https://trademe.tmcdn.co.nz/photoserver/1024sq/2121798160.jpg",
    "https://trademe.tmcdn.co.nz/photoserver/1024sq/2121798163.jpg",
    "https://trademe.tmcdn.co.nz/photoserver/1024sq/2121798174.jpg",
    "https://trademe.tmcdn.co.nz/photoserver/1024sq/2121798160.jpg",
  ];
  images[-1] = "https://trademe.tmcdn.co.nz/photoserver/1024sq/2121798163.jpg";
  const [history, setHistory] = useState([] as Guess[]);
  const [hintNo, setHintNo] = useState(0);
  const gameState = analyseGameState(history, maxAttempts);
  const isFinished = gameState == "GameWon" || gameState == "GameLost";

  let guessNo = history.length;
  if (isFinished) guessNo = history.length - 1;
  return (
    <div className="flex flex-col items-center bg-[#e8e8e8] max-w-screen-lg rounded-xl">
      <TitleCard />
      <HintPicture hintNo={hintNo} images={images} />
      <GuessCounter guessNo={guessNo} gameState={gameState} setHintNo={setHintNo} maxAttempts={maxAttempts} />
      <GuessInput history={history} setHistory={setHistory} setHintNo={setHintNo} maxAttempts={maxAttempts} />
      <AdCard gameState={gameState} />
      <Guesser history={history} maxAttempts={maxAttempts} />
      <GameWatcher gameState={gameState} setHintNo={setHintNo} />
    </div>
  );
}

function analyseGameState(history: Guess[], maxAttempts: number) {
  const latestGuess = history[history.length - 1];
  if (latestGuess?.makeIsCorrect && latestGuess?.modelIsCorrect) {
    return "GameWon";
  } else if (history.length == maxAttempts) {
    return "GameLost";
  } else {
    return "GameRunning";
  }
}
