import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "GabOil",
  description: "Distribution pétrolière et gazière au Gabon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        {/* --- Navbar visible partout --- */}
        <Navbar />

        {/* --- Contenu des pages --- */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
