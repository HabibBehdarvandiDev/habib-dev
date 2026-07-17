import { cn } from "@/lib/utils";
import Providers from "@/providers/providers";
import { Playpen_Sans, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const playpen = Playpen_Sans({ subsets: ["latin"], variable: "--font-sans" });

const yekanBakh = localFont({
    src: "../../assets/fonts/YekanBakh.woff2",
    variable: "--font-sans-fa",
});

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

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={locale === "fa" ? "rtl" : "ltr"}
            className={cn(
                "h-full",
                "antialiased",
                "scroll-smooth duration-300 transition-all",
                locale === "fa" ? yekanBakh.className : roboto.className,
                playpen.variable,
            )}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground ">
                <Providers>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
