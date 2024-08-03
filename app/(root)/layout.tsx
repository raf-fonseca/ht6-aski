import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import { Sidebar } from "@/components/shared/Sidebar";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
    title: "Aski",
    description: "Feeling indecisive? Don't fear, Aski's here!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Topbar />
                <main className="flex flex-row">
                    <Sidebar />
                    <section className="main-container">
                        <div className="w-full max-w-4xl">{children}</div>
                    </section>
                </main>
            </body>
        </html>
    );
}
