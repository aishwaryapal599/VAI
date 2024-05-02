import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className=""> {children}</main>
      <Footer />
    </>
  );
}
