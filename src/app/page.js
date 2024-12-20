import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24 bg-slate-950">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm text-white">
        <h1 className="text-4xl font-bold mb-5  text-white">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="text-xl">
          <ul>
            <Link href="/webPages">Holidays</Link>
          </ul>
        </div>
      </div>
    </main>
  );
}
