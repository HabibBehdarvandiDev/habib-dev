import SkillsGrid from "../shared/home/skills/skills-grid";

const MySkillsSection = () => {
    return (
        <section
            id="skills"
            className="relative w-full overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        My Skills & Stack
                    </h2>

                    <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                        Technologies and tools I use to design, build, deploy,
                        and maintain modern web applications.
                    </p>
                </div>

                <SkillsGrid />
            </div>
        </section>
    );
};

export default MySkillsSection;
