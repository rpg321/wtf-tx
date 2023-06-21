import Form from "./components/form";

export default function Home() {
	return (
		<main className="text-center p-4 max-w-[580px] w-full mx-auto">
			<p className="leading-7 text-xl">
				Solana transactions are hard to understand.
				<br />
				Let&apos;s make it <span className="text-green-400">simpler</span>.
			</p>
			<Form />
			<p className="text-xs block mt-4 break-words text-gray-500">
				If you need an example tx, try:
				<br />
				4nvhrWBHPQdB87dEdp2rS7rAP9SeBPYhNwfzuYVmwTX7vF23RX3vemStXCi9oUxKvTtVfZt2Fh16pEQwgis37UAT
			</p>
		</main>
	);
}
