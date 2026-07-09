import '@/app/assets/globals.css'
import React, {ReactNode} from "react";
import localFont from "next/font/local";
import {Metadata} from "next";
import Cursor from "@/app/components/cursor";

const calSans = localFont({
    src: 'assets/fonts/CalSans-SemiBold.woff2',
    variable: '--font-cal-sans',
    display: "swap"
})
const onest = localFont({
    src: [
        {
            path: 'assets/fonts/Onest-Regular.woff',
            weight: '400',
        },
        {
            path: 'assets/fonts/Onest-Medium.woff',
            weight: '500',
        },
        {
            path: 'assets/fonts/Onest-Bold.woff',
            weight: '700'
        }
    ],
    variable: '--font-onest',
    display: "swap"
})

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function RootLayout({children}: {children: ReactNode}) {
    // noinspection HtmlRequiredTitleElement
    return (
        <html lang="en" className="scroll-smooth selection:bg-primary-100 selection:text-primary-500">
        <head/>
        <body className={`${onest.variable} ${calSans.variable} font-sans overscroll-none`} style={{
            '--font-sans': 'var(--font-onest)',
            '--font-display': 'var(--font-cal-sans)',
        } as any}>
            <Cursor />
            <Header />
            <main className="min-h-screen w-full">
                {children}
            </main>
            <Footer />
        </body>
        </html>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    const canonicalUrl = process.env.CANONICAL_URL ||
        (process.env.NODE_ENV === "development" ? `http://localhost:${process.env.PORT || 3000}` :
            `https://${process.env.VERCEL_URL}` || "")

    return {
        metadataBase: new URL(canonicalUrl),
        title: {
            default: "Jigen-Ohtsusuki's Portfolio",
            template: "%s | Portfolio"
        },
        description: "Personal portfolio of Jigen-Ohtsusuki, Software Engineer & ROM Developer.",
        generator: "Next.js",
        colorScheme: "light",
        themeColor: "#F54142",
        icons: {
            icon: '/favicon.ico',
            shortcut: '/favicon.ico',
            apple: '/favicon.ico',
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            title: "Jigen-Ohtsusuki's Portfolio",
            description: "Personal portfolio of Jigen-Ohtsusuki, Software Engineer & ROM Developer.",
            siteName: "Portfolio",
            url: '/',
        },
        twitter: {
            card: "summary_large_image",
            title: "Jigen-Ohtsusuki's Portfolio",
            description: "Personal portfolio of Jigen-Ohtsusuki, Software Engineer & ROM Developer.",
        },
        alternates: {
            canonical: '/'
        }
    };
}
