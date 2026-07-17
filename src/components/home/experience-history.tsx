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

const roadmap = [
    {
        id: 1,
        date: "Sep 2025 - Dec 2025",
        title: "Gaming PC Assembly Specialist",
        company: "PCMOD",
        description:
            "Built and configured custom gaming systems, ensuring hardware compatibility, performance tuning, and quality assurance.",
    },
    {
        id: 2,
        date: "Oct 2023 - Oct 2025",
        title: "Webmaster",
        company: "TSCO",
        description:
            "Managed and optimized company websites, improving performance, SEO, content workflows, and overall user experience.",
    },
    {
        id: 3,
        date: "Mar 2023 - Sep 2023",
        title: "Full-Stack Developer",
        company: "TSCO",
        description:
            "Developed internal platforms and business solutions, working across frontend, backend, databases, and system integrations.",
    },
    {
        id: 4,
        date: "Aug 2022 - Oct 2022",
        title: "ICDL Instructor",
        company: "Farabi Entrepreneurship Complex",
        description:
            "Taught computer fundamentals, office software, internet skills, and digital literacy to students and professionals.",
    },
    {
        id: 5,
        date: "Jan 2022 - Oct 2022",
        title: "IT Specialist",
        company: "Amirkabir Technical & Vocational University",
        description:
            "Provided technical support, system maintenance, troubleshooting, and infrastructure assistance across the university environment.",
    },
    {
        id: 6,
        date: "Apr 2021 - Present",
        title: "Full-Stack Web Developer",
        company: "Freelance",
        description:
            "Building web applications, automation tools, and custom solutions for clients using modern frontend and backend technologies.",
    },
];

const ExperienceHistory = () => {
    return (
        <section
            id="experience"
            className="relative w-full overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl font-sans">
                        Where I&apos;ve Worked
                    </h2>

                    <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                        A timeline of the companies, roles, and projects that
                        shaped my journey as a developer.
                    </p>
                </div>

                {/* Timeline */}
                <Timeline
                    defaultValue={roadmap.length}
                    className="mx-auto w-full max-w-3xl"
                >
                    {roadmap.map((item) => (
                        <TimelineItem
                            key={item.id}
                            step={item.id}
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
