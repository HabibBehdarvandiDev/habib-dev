import { ChevronRight } from "lucide-react";
import Image from "next/image";

import HabibImage from "@/../public/habib.png";

import { Button } from "../ui/button";
import Link from "next/link";

const AboutMeSection = () => {
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
                <h2 className="text-3xl font-semibold md:text-4xl font-sans">
                    A bit About Me
                </h2>

                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                    Hi, I&apos;m Habib. I started programming because I loved
                    the idea of creating something from nothing, and that
                    feeling still hasn&apos;t gone away. These days, I spend
                    most of my time building web applications, working with
                    modern technologies, and constantly learning new things. I
                    enjoy the balance between creativity and problem-solving
                    that software development offers.
                </p>

                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                    When I&apos;m working on a project, I care about more than
                    just getting it done. I like understanding the bigger
                    picture, paying attention to the details, and building
                    things the right way. Whether it&apos;s a personal side
                    project or a larger platform, I enjoy the challenge of
                    taking an idea, refining it through countless iterations,
                    and eventually turning it into something people can actually
                    use and benefit from.
                </p>

                <Button
                    render={
                        <Link href="#faqs">
                            Contact Me
                            <ChevronRight size={16} />
                        </Link>
                    }
                />
            </div>
        </section>
    );
};

export default AboutMeSection;
