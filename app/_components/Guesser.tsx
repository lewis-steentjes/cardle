import { useState } from "react";

export default function Guesser() {
  const [guessHistory, setGuessHistory] = useState([]);
  return (
    <div>
      <FailedGuess guess="Toyota Aqua" />
    </div>
  );
}

interface FailedGuessProps {
  guess: string;
}

export function FailedGuess(props: FailedGuessProps) {
  const { guess } = props;
  return (
    <div>
      <span>{guess}</span>
    </div>
  );
}
