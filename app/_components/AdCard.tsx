import Guess from "../_models/Guess";

interface Props {
  gameState: string;
}

export default function AdCard(props: Props) {
  const { gameState } = props;
  const isFinished = gameState == "GameWon" || gameState == "GameLost";

  const adData: AdData = {
    listingURL: "https://www.trademe.co.nz/a/motors/cars/toyota/celica/listing/4730014056",
    listingThumb: "https://trademe.tmcdn.co.nz/photoserver/full/2121798163.jpg",
    listingTitle: "1994 Toyota Celica",
    listingDesc: "Childhood dream up for grabs.",
    listingPrice: 22000,
  };

  let message = "";
  if (gameState == "GameWon") {
    message = "Now go win the car 😎";
  }
  if (gameState == "GameLost") {
    message = "😭 Go win the car instead ";
  }

  let adCardHeight = "150px";
  if (!isFinished) {
    // Game is still running, don't show ad.'
    adCardHeight = "0px";
  }
  // Game is finished, show ad for user to visit listing
  return (
    <div
      className="flex flex-col items-center mt-2 mb-2 mx-2 overflow-clip ease-in-out duration-1000"
      style={{ height: adCardHeight }}
      key="adCard"
    >
      <p className="text-black italic">{message}</p>
      <ListingCard {...adData} />
    </div>
  );
}

function ListingCard(props: AdData) {
  const { listingURL, listingThumb, listingTitle, listingDesc, listingPrice } = props;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <a
      href={listingURL}
      className="flex flex-row border-solid border-2 border-black mb-4 mt-2 max-w-lg  bg-[#f6f5f4] rounded-lg "
    >
      <img
        src={listingThumb}
        alt="thumbnail for the listed car"
        className="w-1/3 object-cover rounded-l border-r-2 border-black"
      ></img>
      <div className="flex flex-col w-full mr-4 justify-between ml-2">
        <div>
          <span className="font-semibold text-xl text-black">{listingTitle}</span>
          <br />
          <span className="italic text-black">{listingDesc}</span>
        </div>
        <div className="mb-2 text-black text-2xl text-right w-full">{formatter.format(listingPrice)}</div>
      </div>
    </a>
  );
}

interface AdData {
  listingURL: string;
  listingThumb: string;
  listingTitle: string;
  listingDesc?: string;
  listingPrice: number;
}
