import { useEffect, useState } from "react";
import React from "react";
import Confetti from "react-confetti";
interface Props {
  gameState: string;
  setHintNo: (value: number) => void;
}

export default function GameWatcher(props: Props) {
  const { gameState, setHintNo } = props;
  const [prevGameState, setPrevGameState] = useState(gameState);
  const [windowWidth, windowHeight] = useDeviceSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (prevGameState != gameState) {
      // Game has probably ended
      setPrevGameState(gameState);
      if (gameState == "GameWon") {
        // Do Confetti
        console.log("DONE!");
        setHintNo(-1);
        setShowConfetti(true);
      }
      if (gameState == "GameLost") {
        // Do something?
        setHintNo(-1);
      }
    }
  }, [gameState, prevGameState, setHintNo]);

  return (
    <div className="fixed top-0 left-0">
      <Confetti
        recycle={false}
        height={windowHeight}
        width={windowWidth}
        run={showConfetti}
        numberOfPieces={200}
      />
    </div>
  );
}

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};
