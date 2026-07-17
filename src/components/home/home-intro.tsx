import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import TrueFocus from "../TrueFocus";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { getLocale, getTranslations } from "next-intl/server";

const HomeIntroSection = async () => {
    const t = await getTranslations("hero");
    const locale = await getLocale();

    return (
        <section className="w-full min-h-dvh relative overflow-x-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center justify-around gap-5 z-40">
                <span className="bg-background border border-zinc-500/15 rounded-lg p-2 flex items-center justify-center space-x-3">
                    <Badge className="bg-orange-600/20 border border-orange-500/60 text-orange-600 text-base rounded-sm p-3 ">
                        {t("badge")}
                    </Badge>

                    <p className="font-medium">
                        <span className="text-zinc-400">{t("intro")}</span>{" "}
                        {t("name")}
                    </p>
                </span>

                <h1 className="font-semibold text-6xl text-center mt-5 gap-3">
                    <span>I Build</span>

                    <TrueFocus
                        sentence="Full Stack"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="#e95427"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1.5}
                    />

                    <span>web applications</span>
                </h1>

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

export default HomeIntroSection;
