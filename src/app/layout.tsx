import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ansh Payal - Frontend Developer",
  description:
    "I've been developing web app for 2 years straight. Get in touch with me to know more",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-900 text-white">
        <Header />
        <main className="max-w-3xl mx-auto mt-8 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
