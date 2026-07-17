import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/reui/timeline";
import { cn } from "@/lib/utils";
import { useMessages } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

const ExperienceHistory = async () => {
    const t = await getTranslations("experience");
    const locale = await getLocale();

    const messages = await getMessages();

    const roadmap = messages.experience.items as {
        date: string;
        title: string;
        company: string;
        description: string;
    }[];

    return (
        <section
            id="experience"
            className="relative w-full overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
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

                {/* Timeline */}
                <Timeline
                    defaultValue={roadmap.length}
                    className="mx-auto w-full max-w-3xl"
                >
                    {roadmap.map((item, idx) => (
                        <TimelineItem
                            key={idx}
                            step={idx}
                            className="pb-8 sm:group-data-[orientation=vertical]/timeline:ms-40"
                        >
                            <TimelineHeader>
                                <TimelineSeparator />

                                <TimelineDate
                                    className="
                                        whitespace-nowrap
                                        text-xs
                                        text-muted-foreground
                                        sm:absolute
                                        sm:-left-40
                                        sm:w-32
                                        sm:text-right
                                    "
                                >
                                    {item.date}
                                </TimelineDate>

                                <TimelineTitle className="font-semibold">
                                    {item.title}
                                </TimelineTitle>

                                <TimelineIndicator />
                            </TimelineHeader>

                            <TimelineContent className="pt-2">
                                <p className="mb-2 text-sm font-medium text-primary">
                                    {item.company}
                                </p>

                                <p className="leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};

export default ExperienceHistory;
