import Image from "next/image";
import TitleCard from "./_components/TitleCard";
import Game from "./_components/Game";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex-col items-center justify-around bg-slate-400">
        <TitleCard />
        <div className="bg-red-300 flex flex-col items-center">
          <Game />
        </div>
      </main>
    </>
  );
}
