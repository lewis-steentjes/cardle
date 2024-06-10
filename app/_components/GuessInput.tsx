import { ChangeEvent, useState, FormEvent } from "react";
import Guess from "../_models/Guess";
import { checkGuess } from "../_utils/clientAPI";

interface Props {
  history: Guess[];
  setHistory: (value: Guess[]) => void;
}

export default function GuessInput(props: Props) {
  const { history, setHistory } = props;
  const [inputText, setInputText] = useState("");
  const [guessHint, setGuessHint] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entryData = inputText.toLowerCase().split(" ");
    if (entryData.length < 2) {
      setGuessHint("Guess needs to be made of at least two words");
      return;
    } else {
      setGuessHint("");
    }
    const make = entryData[0].trim();
    const model = entryData.slice(1, entryData.length).join(" ").trim();
    const guess = await checkGuess(make, model);
    if (!guess) {
      setGuessHint("Something went wrong..");
      return;
    } else {
      setGuessHint("");
    }
    console.log(guess);
    // const makeIsCorrect = true;
    // const modelIsCorrect = false;
    const prevHistory = [...history];
    prevHistory.push(guess);
    setHistory(prevHistory);
  };

  const latestGuess = history[history.length - 1];
  const maxAttempts = 6;
  const isWinner = latestGuess?.makeIsCorrect && latestGuess?.modelIsCorrect;
  const isLoser = !isWinner && history.length >= maxAttempts;
  if (!isWinner && !isLoser)
    // Play game]
    return (
      <div className="flex flex-col items-center">
        <form onSubmit={(event) => handleSubmit(event)} className="flex flex-row gap-1">
          <input
            className="shadow appearance-none border border-red-500 rounded w-56 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            value={inputText}
            placeholder='Guess, ex: "Ford GT"'
          ></input>
          <button
            className="shadow appearance-none border border-black rounded w-24 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline bg-slate-200 hover:bg-green-500"
            onClick={() => {}}
            type="submit"
          >
            Guess!
          </button>
        </form>
        <p className="w-64 text-center text-balance">{guessHint}</p>
      </div>
    );
  if (isWinner) {
    // Game won, do confetti
    return (
      <div className="flex flex-row items-center justify-center rounded h-8 w-56 bg-green-300">
        <div className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)] text-black">You Win!</div>
      </div>
    );
  }
  if (isLoser) {
    // Game lost, do something
    return (
      <div className="flex flex-row items-center justify-center rounded h-8 w-56 bg-red-400">
        <div className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)] text-black">You Lose.</div>
      </div>
    );
  }
}
