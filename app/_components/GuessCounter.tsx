interface GuessCounterProps {
  guessNo: number;
  gameState: string;
  setHintNo: (value: number) => void;
  maxAttempts: number;
}

export default function GuessCounter(props: GuessCounterProps) {
  const { guessNo, gameState, setHintNo, maxAttempts } = props;
  const isFinished = gameState == "GameWon" || gameState == "GameLost";
  const wrongAnswerColour = "#FF0000";
  const correctAnswerColour = "#00FF00";
  const currentlyGuessingColour = "#DDDD00";
  const notYetGuessedColour = "#94A3B8";

  const handleClick = (index: number) => {
    console.log(index, guessNo);
    if (index == guessNo && isFinished) {
      setHintNo(-1);
      return;
    }
    if (index > guessNo) {
      return;
    } else {
      setHintNo(index);
    }
  };

  const blockColours = [];
  for (let i = 0; i < maxAttempts; i++) {
    if (i < guessNo) {
      blockColours.push(wrongAnswerColour);
    } else if (i == guessNo && isFinished) {
      blockColours.push(correctAnswerColour);
    } else if (i == guessNo && !isFinished) {
      blockColours.push(currentlyGuessingColour);
    } else {
      blockColours.push(notYetGuessedColour);
    }
  }

  return (
    <div className="flex flex-row gap-1 pb-4">
      {blockColours.map((colour, index) => (
        <button key={"gb" + index} onClick={() => handleClick(index)}>
          <GuessBlock colour={colour} />
        </button>
      ))}
    </div>
  );
}

interface GuessBlockProps {
  colour: string;
}
function GuessBlock(props: GuessBlockProps) {
  const { colour } = props;
  return (
    <div
      className={"p-4 rounded-lg border-solid border-black border"}
      style={{ background: `${colour}` }}
    ></div>
  );
}
