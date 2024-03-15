import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/styles/globals.css";
import MainNav from "@/components/main-nav";
import MainFooter from "@/components/main-footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "wulays's blog",
    description: "A next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <MainNav/>
        <main className="h-[calc(100vh-128px)] overflow-x-hidden bg-blue-50">
            {children}
        </main>
        <MainFooter />
        </body>
        </html>
    );
}
