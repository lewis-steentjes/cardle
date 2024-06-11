import Image from "next/image";
import TitleCard from "./_components/TitleCard";
import Game from "./_components/Game";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e8e8] flex flex-col items-center">
      <Game />
    </main>
  );
}
