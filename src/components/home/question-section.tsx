import AvatarImage from "@/../public/habib.png";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

const QuestionSection = async () => {
    const t = await getTranslations("faq");
    const locale = await getLocale();

    const messages = await getMessages();

    const faqs = messages.faq.items as {
        question: string;
        answer: string;
    }[];
    return (
        <section
            className="w-full min-h-dvh relative overflow-x-hidden flex flex-col items-center justify-center bg-white dark:bg-[#111111] py-5"
            id="faqs"
        >
            <div className="flex flex-col items-center justify-center gap-5">
                <h2
                    className={cn(
                        "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl mb-6",
                        locale === "fa"
                            ? "[font-family:var(--font-sans-fa)]"
                            : "[font-family:var(--font-sans)]",
                    )}
                >
                    {t("title")}
                </h2>

                {/* Two-column layout */}
                <div className="flex flex-col md:flex-row gap-5 items-start px-4">
                    {/* Left — Contact Card */}
                    <div className="w-full md:w-5/12 bg-card rounded-2xl p-8 flex flex-col items-center text-center gap-5 shadow-sm">
                        {/* Avatar */}
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 shrink-0">
                            <Image
                                src={AvatarImage.src}
                                alt="Profile avatar"
                                className="w-full h-full object-cover"
                                width={250}
                                height={250}
                            />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-2">
                            <h2
                                className={cn(
                                    "text-base font-semibold text-foreground",
                                )}
                            >
                                {t("contact.title")}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {t("contact.description")}
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3 w-full mt-1">
                            <a
                                href="mailto:habibbehdarvandi.dev@gmail.com"
                                className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                {t("contact.email")}
                            </a>
                            <a
                                href="https://t.me/habibetoon"
                                className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                            >
                                <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                                {t("contact.telegram")}
                            </a>
                        </div>
                    </div>

                    {/* Right — FAQ Accordion */}
                    <Card className="w-full max-w-lg self-center">
                        <CardHeader>
                            <CardTitle
                                className={cn(
                                    "",
                                    locale === "fa"
                                        ? "[font-family:var(--font-sans-fa)]"
                                        : "[font-family:var(--font-sans)]",
                                )}
                            >
                                {t("card.title")}
                            </CardTitle>
                            <CardDescription>
                                {t("card.description")}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion defaultValue={["plans"]}>
                                {faqs.map((item, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={item.question}
                                    >
                                        <AccordionTrigger>
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default QuestionSection;
