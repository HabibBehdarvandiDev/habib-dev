import { useTranslations } from "next-intl";
import SkillsGrid from "../shared/home/skills/skills-grid";
import { getLocale, getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";

const MySkillsSection = async () => {
    const t = await getTranslations("skills");
    const locale = await getLocale();
    return (
        <section
            id="skills"
            className="relative w-full overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
                    <h2
                        className={cn(
                            "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
                            locale === "fa"
                                ? "[font-family:var(--font-sans-fa)]"
                                : "[font-family:var(--font-sans)]",
                        )}
                    >
                        {t("title")}
                    </h2>

                    <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                        {t("description")}
                    </p>
                </div>

                <SkillsGrid />
            </div>
        </section>
    );
};

export default MySkillsSection;
