import { ChangeEvent, useState, FormEvent } from "react";
import { PreviousGuessProps } from "./Guesser";

interface Props {
  history: PreviousGuessProps[];
  setHistory: (value: PreviousGuessProps[]) => void;
}

export default function GuessInput(props: Props) {
  const [inputText, setInputText] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entryData = inputText.toLowerCase().split(" ");
    if (entryData.length < 2) {
      return;
    }
    const make = entryData[0];
    const model = entryData.slice(1, entryData.length).join(" ");
    const makeIsCorrect = true;
    const modelIsCorrect = false;
    const guess = { make, model, makeIsCorrect, modelIsCorrect };
    const prevHistory = [...history];
    prevHistory.push(guess);
    setHistory(prevHistory);
  };
  const { history, setHistory } = props;
  const latestGuess = history[history.length - 1];
  const isWinner = latestGuess.makeIsCorrect && latestGuess.modelIsCorrect;
  if (!isWinner)
    return (
      <div>
        <form onSubmit={(event) => handleSubmit(event)} className="flex flex-row gap-1">
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={inputText}
            placeholder='Guess, ex: "Ford GT"'
          ></input>
          <button
            className="shadow appearance-none border border-black rounded w-24 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-slate-200 hover:bg-green-500"
            onClick={() => {}}
            type="submit"
          >
            Guess!
          </button>
        </form>
      </div>
    );
}
