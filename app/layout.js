import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
export const metadata = {
	title: "wtf.tx",
	description:
		"Display the details of a transaction on the Solana blockchain in a user-friendly way.",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="wrapper flex flex-col justify-center items-center min-h-screen">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
