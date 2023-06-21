"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
	const [tx, setTx] = useState("");
	const router = useRouter();

	const handleSubmit = (event) => {
		event.preventDefault();
		const transactionVal = event.target.transaction.value;
		router.push(`/tx/${transactionVal}`);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="mt-10 mb-10 w-full">
				<label htmlFor="transaction" className="mt-0 mb-3 block">
					Enter a tx signature below to find out wtf it&apos;s about:
				</label>
				<input
					type="text"
					placeholder="Transaction Signature (Devnet)"
					id="transaction"
					name="transaction"
					required="required"
					onChange={(event) => setTx(event.target.value)}
					//minLength={64}
					className="bg-white block rounded-md text-black px-4 py-4 leading-none w-full text-base outline-green-800"
				/>
				<button
					type="submit"
					className="bg-green-400 font-normal rounded-md text-black px-6 py-4 leading-none mt-3 block w-full mx-auto hover:bg-green-500 transition-colors duration-300"
				>
					Search
				</button>
			</form>
		</>
	);
}
