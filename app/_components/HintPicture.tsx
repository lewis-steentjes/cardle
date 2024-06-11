import PuzzlePicture from "./PuzzlePicture";

interface Props {
  hintNo: number;
}

export default function HintPicture(props: Props) {
  const { hintNo } = props;
  const imageSrc = "/2121798163.jpg";

  return (
    <div className="pt-4 pl-10 pr-10 pb-5 text-green-400">
      <div className="overflow-clip rounded-lg  border-solid border-black border-2 mt-4">
        <PuzzlePicture imageSrc={imageSrc} hintNo={hintNo} />
      </div>
    </div>
  );
}
