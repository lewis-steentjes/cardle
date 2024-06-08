import Image from "next/image";
interface Props {
  guessNumber?: number;
}

export default function HintPicture(props: Props) {
  return (
    <div className="pt-10 pl-10 pr-10 pb-5">
      <Image
        src="/2121798163.jpg"
        alt="image hint for the puzzle"
        width={600}
        height={800}
        className="rounded-lg border-solid border-black border-2"
      />
    </div>
  );
}
