import AboutMeSection from "@/components/home/about-me";
import ExperienceHistory from "@/components/home/experience-history";
import HomeIntroSection from "@/components/home/home-intro";
import MainFooter from "@/components/home/main-footer";
import MySkillsSection from "@/components/home/my-skills";
import QuestionSection from "@/components/home/question-section";
import TestimonialsSection from "@/components/home/testimonials";

export default function Home() {
    return (
        <section className="w-full h-min-screen overflow-x-hidden">
            <HomeIntroSection />
            <AboutMeSection />
            <MySkillsSection />
            <QuestionSection />
            <TestimonialsSection />
            <ExperienceHistory />
            <MainFooter />
        </section>
    );
}
