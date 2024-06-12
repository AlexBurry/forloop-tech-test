import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="flex-col justify-around ">
        <h1 className="flex justify-center font-bold text-4xl text-blue-600 p-10">Pokemon!</h1>
        <div className="h-screen flex items-center justify-center">
          <Link href="/pokemon">
            <span className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">See Pokemon!</span>
          </Link>
        </div>
      </div>    
    </main>
  );
}
