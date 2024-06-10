interface Props {
  hintNo: number;
}

export default function HintPicture(props: Props) {
  const { hintNo } = props;
  return (
    <div className="pt-4 pl-10 pr-10 pb-5 text-green-400">
      {hintNo}
      <img
        src="/2121798163.jpg"
        alt="image hint for the puzzle"
        width={600}
        height={800}
        className="rounded-lg border-solid border-black border-2"
      />
    </div>
  );
}
