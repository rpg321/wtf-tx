import * as solanaWeb3 from "@solana/web3.js";

export default async function getTx(transactionHash) {
	const DEV_NET = solanaWeb3.clusterApiUrl("devnet");
	const solanaConnection = new solanaWeb3.Connection(DEV_NET);

	try {
		const transaction = await solanaConnection.getParsedTransaction(
			transactionHash
		);
		if (transaction === null) {
			return "error";
		}
		return transaction;
	} catch (error) {
		return "error";
	}
}
