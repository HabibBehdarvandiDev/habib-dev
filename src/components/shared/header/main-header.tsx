import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import HeaderMenu from "./header-menu";
import { NavLinks } from "@/data/header";
import { useTranslations } from "next-intl";
import LanguageSelector from "./language-selector";

const MainHeader = () => {
    const t = useTranslations("navigation");
    return (
        <header className="bg-background p-4 flex items-center w-full border-b  justify-between z-50">
            <Badge className="bg-[#e95427] px-3 py-4 rounded-sm text-sm md:text-base">
                Habib-Dev
            </Badge>

            <nav className="hidden md:flex space-x-7 text-zinc-500">
                {NavLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.url}
                        className="hover:text-orange-500"
                    >
                        {t(link.title)}
                    </Link>
                ))}
            </nav>

            <span className="hidden md:flex md:space-x-2.5 ">
                <AnimatedThemeToggler />
                <LanguageSelector />
            </span>
            <span className="flex md:hidden">
                <HeaderMenu />
            </span>
        </header>
    );
};

export default MainHeader;
