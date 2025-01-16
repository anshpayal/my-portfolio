import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ansh Payal - Portfolio",
  description: "Portfolio of Ansh Payal, Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <Header />
        <main className="max-w-3xl mx-auto mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
