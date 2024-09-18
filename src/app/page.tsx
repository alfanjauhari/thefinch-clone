import { Hero } from "./_components/_home/hero";

export default function Home() {
  return (
    <div className="w-full h-[768px] relative">
      <div className="font-extrabold text-6xl h-[calc(100vh-7.1rem)] mt-6">
        <Hero />
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
}
