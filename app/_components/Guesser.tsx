import { useState, useContext, createContext } from "react";
import GuessInput from "./GuessInput";
import Guess from "../_models/Guess";

interface GuesserProps {
  history: Guess[];
  setHistory: (value: Guess[]) => void;
  setHintNo: (value: number) => void;
}

export default function Guesser(props: GuesserProps) {
  const { history, setHistory, setHintNo } = props;

  return (
    <div className="flex flex-col items-center mb-2 gap-2">
      {history.map((guess, index) => (
        <PreviousGuess {...guess} key={"guessK" + index} />
      ))}
    </div>
  );
}

export function PreviousGuess(props: Guess) {
  const { make, model, makeIsCorrect, modelIsCorrect } = props;
  const bothAreIncorrect = !makeIsCorrect && !modelIsCorrect;
  const makeName = make[0].toUpperCase() + make.substring(1);
  const modelName = model[0].toUpperCase() + model.substring(1);

  const correctColour = "#111111";
  const wrongColour = "#FF0000";
  const correctTextDeco = "none";
  const wrongTextDeco = "line-through";
  return (
    <div className="flex flex-row items-center justify-center bg-slate-300 rounded h-8 w-56 ">
      <div className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)]">
        <span
          style={
            makeIsCorrect
              ? { textDecorationLine: correctTextDeco, color: correctColour, fontWeight: 600 }
              : { textDecorationLine: wrongTextDeco, color: wrongColour }
          }
        >
          {makeName}
        </span>
        <span
          style={
            bothAreIncorrect
              ? { textDecorationLine: wrongTextDeco, color: wrongColour, fontWeight: 600 }
              : { textDecorationLine: correctTextDeco, color: correctColour }
          }
        >
          {" "}
        </span>
        <span
          style={
            modelIsCorrect
              ? { textDecorationLine: correctTextDeco, color: correctColour, fontWeight: 600 }
              : { textDecorationLine: wrongTextDeco, color: wrongColour }
          }
        >
          {modelName}
        </span>
      </div>
    </div>
  );
}
