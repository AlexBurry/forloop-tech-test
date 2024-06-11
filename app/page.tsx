import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link
      href="/pokemon"
      className="h-screen flex items-center justify-center">
        <span className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">See Pokemon!</span>
      </Link>
    </main>
  );
}
