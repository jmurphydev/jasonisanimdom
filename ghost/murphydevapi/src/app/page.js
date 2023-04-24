import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>MurphyDev Coming Soon</h1>

      {/* spinner */}
      <div className="flex items-center justify-center w-24 h-24">
        <Image
          src="/spinner.svg"
          alt="MurphyDev Logo"
          width={100}
          height={100}
        />
      </div>
    </main>
  );
}
