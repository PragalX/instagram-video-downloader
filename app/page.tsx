import Link from "next/link";
import InstagramForm from "./components/InstagramForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row md:px-8 gap-2 w-full justify-between items-center px-2 py-1.5 mb-12 border-b">
        <div className="flex gap-1 items-center text-xl font-bold tracking-tight">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <Link href="/">Instagram Downloader</Link>
        </div>
        <ul className="flex gap-2 text-lg font-semibold">
          <li className="px-2 py-1 bg-gray-700 hover:bg-gray-900 text-white rounded">
            <Link
              href="https://github.com/riad-azz/instagram-videos-downloader"
              target="_blank"
            >
              Github Repository
            </Link>
          </li>
          <li className="px-2 py-1 bg-gray-700 hover:bg-gray-900 text-white rounded">
            <Link href="https://github.com/riad-azz/" target="_blank">
              Author
            </Link>
          </li>
        </ul>
      </header>
      <main className="w-full md:max-w-2xl mx-auto p-4 md:border rounded">
        <header className="mb-8">
          <h1 className="text-2xl text-center font-bold select-none">
            Instagram Videos Downloader
          </h1>
          <p className="tracking-wide text-center">
            Copy and paste the post or reel URL and press Download
          </p>
        </header>
        <InstagramForm />
      </main>
    </>
  );
}