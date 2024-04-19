import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="container mx-auto"> {children}</main>
      <Footer />
    </>
  );
}
