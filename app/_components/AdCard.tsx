interface Props {
  isFinished: boolean;
}

export default function AdCard(props: Props) {
  const { isFinished } = props;
  const adData: AdData = {
    listingURL: "https://www.trademe.co.nz/a/motors/cars/toyota/celica/listing/4730014056",
    listingThumb: "https://trademe.tmcdn.co.nz/photoserver/full/2121798163.jpg",
    listingTitle: "1994 Toyota Celica",
    listingDesc: "Childhood dream up for grabs.",
    listingPrice: 22000,
  };

  if (!isFinished) {
    // Game is still running, don't show ad.'
    return <div className="my-2"></div>;
  } else {
    // Game is finished, show ad for user to visit listing
    return <ListingCard {...adData} />;
  }
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
      className="flex flex-row border-solid border-2 border-black my-4 max-w-lg  bg-[#f6f5f4] rounded-lg "
    >
      <img src={listingThumb} className="w-1/3 object-fit rounded-l border-r-2 border-black"></img>
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

// <div
//   className="flex flex-row rounded-lg w-[20rem] h-[7.5rem] bg-info border-solid border-2 border-content-muted"
//   style={{ display: infoWindowOpen ? "flex" : "none" }}
//   onClick={() => window.open(listingURL, "_blank")}
// >
//   {props.details.PictureHref ? (
//     <img
//       src={props.details.PictureHref}
//       alt="Image of Property"
//       className="ml-0 w-2/5 object-cover rounded-l-md border-r-2 border-primary"
//     />
//   ) : (
//     <img
//       src={"/no-image-found4.jpg"}
//       alt="No Property Found"
//       className="ml-0 w-2/5 object-cover rounded-l-lg"
//     />
//   )}
//   <div className="flex flex-col justify-around items-center w-3/5">
//     <div className="text-black text-sm text-right">Available {props.details.AvailableFrom} </div>
//     <div className="grid grid-cols-2 justify-items-center gap-2">
//       <div className="text-black content-center">🛏️ {props.details.Bedrooms} </div>
//       <div className="text-black">🐈 {props.details.PetsOkay ? "✅" : "❌"} </div>
//       <div className="text-black">🛁 {props.details.Bathrooms} </div>
//       <div className="text-black">🚬 {props.details.SmokersOkay ? "✅" : "❌"} </div>
//     </div>
//   </div>
// </div>
interface AdData {
  listingURL: string;
  listingThumb: string;
  listingTitle: string;
  listingDesc?: string;
  listingPrice: number;
}
