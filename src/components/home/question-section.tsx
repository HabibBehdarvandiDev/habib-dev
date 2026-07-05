import AvatarImage from "@/../public/habib.png";
import { Mail } from "lucide-react";
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

const faqs = [
    {
        id: 1,
        question: "What kind of projects do you usually work on?",
        answer: "I primarily build full-stack web applications, including SaaS platforms, internal management systems, community platforms, e-commerce solutions, and custom business tools. I enjoy taking projects from the initial idea all the way to deployment.",
    },
    {
        id: 2,
        question: "Do you help with project planning and architecture?",
        answer: "Absolutely. Before writing code, I like to understand the business goals, plan the database structure, define the application architecture, and identify potential challenges early. A solid foundation saves a lot of time later.",
    },
    {
        id: 3,
        question: "Can you handle both front-end and backend?",
        answer: "Yes. I work across the entire stack—from building responsive interfaces with Next.js and Tailwind CSS to designing databases, developing APIs, implementing authentication, and deploying applications.",
    },
    {
        id: 4,
        question: "How soon can you start?",
        answer: "That depends on my current workload and the project's scope, but I usually respond quickly and can often begin planning and discussing requirements within a few days.",
    },
    {
        id: 5,
        question: "How do you usually work with clients or teams?",
        answer: "I prefer clear communication, realistic expectations, and frequent updates. Whether I'm working independently or as part of a team, I focus on transparency, maintainable code, and delivering solutions that continue to work long after launch.",
    },
];

const QuestionSection = () => {
    return (
        <section
            className="w-full min-h-dvh relative overflow-x-hidden flex flex-col items-center justify-center bg-white dark:bg-[#111111] py-5"
            id="faqs"
        >
            <div className="flex flex-col items-center justify-center gap-5">
                <h2 className="font-sans text-3xl font-semibold">
                    Let&apos;s Clear Things Up
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
                            <h2 className="text-base font-semibold text-foreground">
                                Got a question? Let&apos;s chat.
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                I&apos;m just a message away. Whether it&apos;s
                                a bug, a collab, or just to say hi.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3 w-full mt-1">
                            <a
                                href="mailto:habibbehdarvandi.dev@gmail.com"
                                className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                Send me an email
                            </a>
                            <a
                                href="https://t.me/habibetoon"
                                className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                            >
                                <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                                Text me on Telegram
                            </a>
                        </div>
                    </div>

                    {/* Right — FAQ Accordion */}
                    <Card className="w-full max-w-lg self-center">
                        <CardHeader>
                            <CardTitle>Question About how I Work</CardTitle>
                            <CardDescription>
                                Common questions about your Project and how i
                                Work with You.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Accordion defaultValue={["plans"]}>
                                {faqs.map((item) => (
                                    <AccordionItem
                                        key={item.id}
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
