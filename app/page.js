import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center p-24 max-w-2xl w-full mx-auto">
      <p className="leading-6 text-xl">
        Solana transactions are hard to understand, so let&apos;s make it
        simpler.
      </p>
      <p className="mt-10 block">
        Enter a tx below to find out wtf it&apos;s about:
      </p>
      <form className="my-10 w-full">
        <input
          type="text"
          placeholder="Transaction #"
          id="transaction"
          name="transaction"
          className="bg-white block rounded-md text-black px-3 py-2 w-full text-base"
        />
        <button
          type="submit"
          className="bg-green-500 rounded-2xl text-black px-4 py-2 mt-2 inline-block mx-auto"
        >
          Search
        </button>
      </form>
    </main>
  );
}
