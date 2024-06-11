import PuzzlePicture from "./PuzzlePicture";

interface Props {
  hintNo: number;
  images: string[];
}

export default function HintPicture(props: Props) {
  const { hintNo, images } = props;
  const imageSrc = "/2121798163.jpg";

  return (
    <div className="pt-4 pl-10 pr-10 pb-5 text-green-400">
      <div className="overflow-clip rounded-lg  border-solid border-black border-2 mt-4">
        <PuzzlePicture imageSrc={images[hintNo]} hintNo={hintNo} />
        {images.map((image, index) => {
          return (
            <img
              key={"bufferImage" + String(index)}
              alt="image used to cache file in background"
              src={image}
              className="absolute hidden"
            />
          );
        })}
      </div>
    </div>
  );
}
