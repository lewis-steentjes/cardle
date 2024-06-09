interface GuessCounterProps {
  guessNo: number;
  isFinished: boolean;
}

export default function GuessCounter(props: GuessCounterProps) {
  const { guessNo, isFinished } = props;
  const maxAttempts = 6;
  const wrongAnswerColour = "#FF0000";
  const correctAnswerColour = "#00FF00";
  const currentlyGuessingColour = "#DDDD00";
  const notYetGuessedColour = "#94A3B8";

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
        <GuessBlock colour={colour} key={"gb" + index} />
      ))}
    </div>
  );
}

interface GuessBlockProps {
  colour: string;
}
function GuessBlock(props: GuessBlockProps) {
  const { colour } = props;
  return <div className={"p-4 rounded-lg"} style={{ background: `${colour}` }}></div>;
}
