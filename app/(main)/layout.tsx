import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="flex flex-col min-h-screen items-center p-4 gap-4">
        <Navbar />

        <main className="flex-1 max-w-[1000px] w-full">
            {children}
        </main>

        <Footer />
    </div>
    )
}
