import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<>
			<header className="flex items-center justify-center p-12 text-center">
				<Link href="/">
					<Image
						src="/logo2.png"
						alt=""
						width={50}
						height={50}
						className="mx-auto"
					/>
					<h1 className="text-2xl block mt-1">wtf.tx</h1>
				</Link>
			</header>
		</>
	);
}
