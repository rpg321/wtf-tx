import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<>
			<header className="flex items-center justify-center pb-12 pt-8 text-center">
				<Link
					href="/"
					className="hover:opacity-80 transition-opacity duration-300"
				>
					<Image
						src="/logo3.png"
						alt=""
						width={50}
						height={50}
						priority={true}
						className="mx-auto"
					/>
					<h1 className="text-base text-green-400 block mt-2">wtf.tx</h1>
				</Link>
			</header>
		</>
	);
}
