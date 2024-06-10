import { Lisu_Bosa } from "next/font/google";
const lisuBosa = Lisu_Bosa({ weight: "500", subsets: ["latin"] });

export default function TitleCard() {
  return (
    <div className="text-center text-6xl pt-10 text-black tracking-tight">
      <span className={lisuBosa.className}> CARDLE </span>
    </div>
  );
}
