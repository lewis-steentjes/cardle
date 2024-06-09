import { useState } from "react";
import GuessInput from "./GuessInput";

export default function Guesser() {
  const guessProps1: PreviousGuessProps = {
    make: "honda",
    model: "civic",
    makeIsCorrect: false,
    modelIsCorrect: false,
  };
  const guessProps2: PreviousGuessProps = {
    make: "toyota",
    model: "aqua",
    makeIsCorrect: true,
    modelIsCorrect: false,
  };
  const [guessHistory, setGuessHistory] = useState([guessProps1, guessProps2]);

  return (
    <div>
      {guessHistory.map((guess, index) => (
        <PreviousGuess {...guess} key={"guessK" + index} />
      ))}
      <GuessInput history={guessHistory} setHistory={setGuessHistory} />
    </div>
  );
}

export interface PreviousGuessProps {
  make: string;
  model: string;
  makeIsCorrect: boolean;
  modelIsCorrect: boolean;
}

export function PreviousGuess(props: PreviousGuessProps) {
  const { make, model, makeIsCorrect, modelIsCorrect } = props;
  const bothAreIncorrect = !makeIsCorrect && !modelIsCorrect;
  const makeName = make[0].toUpperCase() + make.substring(1);
  const modelName = model[0].toUpperCase() + model.substring(1);

  const correctColour = "#00FF00";
  const wrongColour = "#FF0000";
  const correctTextDeco = "none";
  const wrongTextDeco = "line-through";
  return (
    <div>
      <span
        style={
          makeIsCorrect
            ? { textDecorationLine: correctTextDeco, color: correctColour }
            : { textDecorationLine: wrongTextDeco, color: wrongColour }
        }
      >
        {makeName}
      </span>
      <span
        style={
          bothAreIncorrect
            ? { textDecorationLine: wrongTextDeco, color: wrongColour }
            : { textDecorationLine: correctTextDeco, color: correctColour }
        }
      >
        {" "}
      </span>
      <span
        style={
          modelIsCorrect
            ? { textDecorationLine: correctTextDeco, color: correctColour }
            : { textDecorationLine: wrongTextDeco, color: wrongColour }
        }
      >
        {modelName}
      </span>
    </div>
  );
}
