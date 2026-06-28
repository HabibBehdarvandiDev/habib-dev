import { Badge } from "@/components/reui/badge";

type TableDataType = {
    title: string;
    skills: string[];
}[];

const SKILLS: TableDataType = [
    {
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "ShadCN/UI",
            "GSAP",
            "Zustand",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT",
            "Zod",
            "Microservices",
            "GitHub Actions",
        ],
    },
    {
        title: "Database",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"],
    },
    {
        title: "Tools",
        skills: ["Git", "Linux", "Vercel", "Figma"],
    },
];

const SkillsGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SKILLS.map((category) => (
                <div
                    key={category.title}
                    className="
                        group
                        flex
                        h-full
                        flex-col
                        rounded-3xl
                        border
                        border-border/50
                        bg-card
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary/30
                        hover:shadow-lg
                    "
                >
                    <div className="flex-1">
                        <h3 className="mb-5 text-xl font-semibold">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="primary-light"
                                    className="transition-transform duration-200 group-hover:scale-[1.02]"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsGrid;
