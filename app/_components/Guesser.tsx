import Guess from "../_models/Guess";

interface GuesserProps {
  history: Guess[];
  setHistory: (value: Guess[]) => void;
  setHintNo: (value: number) => void;
  maxAttempts: number;
}

export default function Guesser(props: GuesserProps) {
  const { history, maxAttempts } = props;
  const renderArray = [...history];
  for (let i = history.length; i < maxAttempts; i++) {
    renderArray.push({
      make: "secretpassphrase",
      model: "toot",
      makeIsCorrect: false,
      modelIsCorrect: false,
    });
  }
  return (
    <div className="flex flex-col items-center mb-2">
      {renderArray.reverse().map((guess, index) => (
        <PreviousGuess {...guess} key={"guessK" + index} />
      ))}
    </div>
  );
}

export function PreviousGuess(props: Guess) {
  const { make, model, makeIsCorrect, modelIsCorrect } = props;

  if (make == "secretpassphrase") {
    //TO DO - Implement a better solution than coding the make as "secretpassphrase"
    return <div className="w-56 h-0 bg-orange-400 text-transparent"></div>;
  }

  const bothAreIncorrect = !makeIsCorrect && !modelIsCorrect;
  const makeName = make[0].toUpperCase() + make.substring(1);
  const modelName = model[0].toUpperCase() + model.substring(1);

  const correctColour = "#111111";
  const wrongColour = "#FF0000";
  const correctTextDeco = "none";
  const wrongTextDeco = "line-through";
  return (
    <div className="flex flex-row items-center justify-center bg-slate-300 rounded h-8 w-56 mb-2 overflow-clip ease-in-out duration-500 ">
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
