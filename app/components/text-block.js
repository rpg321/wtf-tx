export default function TextBlock({ title, text }) {
	return (
		<>
			<p className="sm:text-xl sm:leading-6 text-base leading-5 break-words sm:mt-8 mt-7">
				{title}
				<br />
				<span className="block text-green-400">{text}</span>
			</p>
		</>
	);
}
