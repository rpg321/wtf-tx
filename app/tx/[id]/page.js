import getTx from "../../api/getTx";
import { fromUnixTime, format } from "date-fns";
import Link from "next/link";
import TextBlock from "../../components/text-block";

//metadata
export async function generateMetadata({ params }) {
	const id = params.id;
	return {
		title: "wtf is " + id + "? | wtf.tx",
		description:
			"Display the details of a transaction on the Solana blockchain in a user-friendly way.",
	};
}

export default async function TxPage({ params }) {
	const { id } = params;
	const transactionData = await getTx(id);
	//console.log(transactionData);

	if (transactionData === "error") {
		return (
			<>
				<div className="w-full text-center">
					<p className="text-base">Error, please try again.</p>
					<Link
						href="/"
						className="bg-green-400 font-normal rounded-md text-black sm:px-6 sm:py-3 px-4 py-3 sm:text-base text-sm leading-none mb-12 mt-3 inline-block mx-auto hover:bg-green-500 transition-colors duration-300"
					>
						Go back
					</Link>
				</div>
			</>
		);
	}

	return (
		<>
			<main className="text-center sm:p-4 p-5 max-w-[580px] w-full mx-auto">
				<TextBlock title="Let's see wtf this is..." text={id} />

				<TextBlock
					title="The transaction finalized around"
					text={format(
						fromUnixTime(transactionData?.blockTime),
						"h:mmaaa 'on' MMMM d, yyyy'"
					)}
				/>

				<TextBlock
					title="It's slot number was"
					text={Intl.NumberFormat().format(transactionData.slot)}
				/>

				<TextBlock
					title="It incurred a fee of"
					text={`◎${transactionData.meta.fee / 1_000_000_000}`}
				/>

				<TextBlock
					title="The amount transacted was"
					text={`◎${
						transactionData.transaction.message.instructions[0].parsed
							.info.lamports / 1_000_000_000
					}`}
				/>

				<Link
					href="/"
					className="bg-green-400 font-normal rounded-md text-black sm:px-6 sm:py-3 px-4 py-3 sm:text-base text-sm leading-none mb-12 mt-12 inline-block mx-auto hover:bg-green-500 transition-colors duration-300"
				>
					Search again
				</Link>
			</main>
		</>
	);
}
