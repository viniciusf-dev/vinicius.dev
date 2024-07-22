import type {Metadata} from "next";
import { Analytics } from "@vercel/analytics/react"
import {Inter} from "next/font/google";
import "./globals.css";
import {Separator} from "@/components/ui/separator";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import siteData from "@/blog.config";
import ProviderTheme from "@/provider/provider-theme";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: siteData.title,
    description: siteData.description,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={'min-h-screen font-mono'}>
        <ProviderTheme>
            <Header/>
            <Separator/>
            <main className={'container my-12'}>
                <div className={'prose md:prose-lg min-w-full w-full dark:prose-invert'}>
                    {children}
                    <Analytics />
                </div>
            </main>
            <Footer/>
            <BackToTop/>
        </ProviderTheme>
        </body>
        </html>
    );
}