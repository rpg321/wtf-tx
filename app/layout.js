import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
export const metadata = {
  title: "wtf.tx",
  description:
    "Display the details of a transaction on the Solana blockchain in a user-friendly way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
