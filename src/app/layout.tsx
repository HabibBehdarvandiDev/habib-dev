import { cn } from "@/lib/utils";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import { Playpen_Sans, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const playpen = Playpen_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
    metadataBase: new URL("https://habib-dev.ir"),

    title: {
        default: "Habib Behdarvandi",
        template: "%s | Habib Behdarvandi",
    },

    description:
        "Full-Stack Developer specializing in Next.js, TypeScript, Node.js, Prisma, MySQL and modern web applications.",

    keywords: [
        "Full Stack Developer",
        "Next.js Developer",
        "React Developer",
        "Node.js Developer",
        "Prisma",
        "TypeScript",
        "Portfolio",
        "habib behdarvandi",
        "habib",
    ],

    authors: [
        {
            name: "Habib Behdarvandi",
        },
    ],
    openGraph: {
        title: "Habib Behdarvandi",
        description:
            "Full-Stack Developer specializing in modern web applications.",
        url: "https://habib-dev.ir",
        siteName: "Habib Portfolio",
        images: [
            {
                url: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhabib.1bg4llfb73zce.png&w=640&q=75",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                "scroll-smooth duration-300 transition-all",
                roboto.className,
                playpen.variable,
            )}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground ">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
