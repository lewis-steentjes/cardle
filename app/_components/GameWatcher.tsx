import Guess from "../_models/Guess";
import { useEffect, useState } from "react";
interface Props {
  gameState: string;
  setHintNo: (value: number) => void;
}

export default function GameWatcher(props: Props) {
  const { gameState, setHintNo } = props;
  const [prevGameState, setPrevGameState] = useState(gameState);

  useEffect(() => {
    if (prevGameState != gameState) {
      // Game has probably ended
      setPrevGameState(gameState);
      if (gameState == "GameWon") {
        // Do Confetti
        console.log("DONE!");
        setHintNo(-1);
      }
      if (gameState == "GameLost") {
        // Do something?
        setHintNo(-1);
      }
    }
  }, [gameState, prevGameState, setHintNo]);
  return <></>;
}
