import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import HabibImage from "@/../public/habib.png";

import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { getTranslations, getLocale } from "next-intl/server";

const AboutMeSection = async () => {
    const t = await getTranslations("about");
    const locale = await getLocale();

    return (
        <section
            className="relative flex min-h-dvh w-full flex-col items-center justify-center gap-12 overflow-hidden bg-white px-6 py-20 dark:bg-[#111111] lg:flex-row lg:px-16"
            id="about"
        >
            {/* Image */}
            <div className="flex w-full justify-center lg:w-1/2">
                <div className="relative aspect-2/3 w-full max-w-sm overflow-hidden rounded-3xl border border-orange-500/20 shadow-xl">
                    <div className="absolute inset-0 bg-orange-500/5" />

                    <Image
                        src={HabibImage}
                        alt="Habib Behdarvandi"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex w-full max-w-3xl flex-col items-start gap-6 lg:w-1/2">
                <h2
                    className={cn(
                        "text-3xl font-semibold md:text-4xl",
                        locale === "fa"
                            ? "[font-family:var(--font-sans-fa)]"
                            : "[font-family:var(--font-sans)]",
                    )}
                >
                    {t("title")}
                </h2>

                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                    {t("paragraph1")}
                </p>

                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                    {t("paragraph2")}
                </p>

                <Button
                    render={
                        <Link href="#faqs">
                            {t("contactButton")}
                            {locale === "fa" ? (
                                <ChevronLeft size={16} data-icon="inline-end" />
                            ) : (
                                <ChevronRight
                                    size={16}
                                    data-icon="inline-start"
                                />
                            )}
                        </Link>
                    }
                />
            </div>
        </section>
    );
};

export default AboutMeSection;
