interface Props {
  hintNo: number;
  imageSrc: string;
}

export default function PuzzlePicture(props: Props) {
  const { hintNo, imageSrc } = props;

  switch (hintNo) {
    case 0:
      return (
        <img
          src={imageSrc}
          alt="image hint for the puzzle"
          width={800}
          style={{ transform: "scale(4, 4) translateX(-12%) translateY(-25%)", filter: "blur(2px)" }}
        />
      );
      break;
    case 1:
      return (
        <img
          src={imageSrc}
          alt="image hint for the puzzle"
          width={800}
          style={{ transform: "scale(4, 4) translateX(30%) translateY(25%)", filter: "blur(2px)" }}
        />
      );
      break;
    case 2:
      return (
        <img
          src={imageSrc}
          alt="image hint for the puzzle"
          width={800}
          style={{ transform: "scale(3, 3) translateX(30%) translateY(0%)", filter: "blur(2px)" }}
        />
      );
      break;
    case 3:
      return (
        <img
          src={imageSrc}
          alt="image hint for the puzzle"
          width={800}
          style={{ transform: "scale(4.5, 4.5) translateX(-30%) translateY(-5%)", filter: "blur(2px)" }}
        />
      );
      break;
    case 4:
      return (
        <img
          src={imageSrc}
          alt="image hint for the puzzle"
          width={800}
          style={{ transform: "scale(4, 4) translateX(0%) translateY(15%)", filter: "blur(2px)" }}
        />
      );
      break;
    case 5:
      return (
        <img
          src={imageSrc}
          alt="image hint for the puzzle"
          width={800}
          style={{ transform: "scale(1.1, 1.1) translateX(0) translateY(0) ", filter: "blur(8px)" }}
        />
      );
      break;

    default:
      return <img src={imageSrc} alt="image hint for the puzzle" width={800} />;
      break;
  }
}
