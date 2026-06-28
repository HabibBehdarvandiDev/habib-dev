import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import HeaderMenu from "./header-menu";
import { NavLinks } from "@/data/header";

const MainHeader = () => {
    return (
        <header className="bg-background rounded-xl p-4 flex items-center w-full fixed top-5 shadow-sm justify-between z-50 max-w-[95%] md:max-w-4xl">
            <Badge className="bg-[#e95427] px-3 py-4 rounded-sm text-sm md:text-base">
                Habib-Dev
            </Badge>

            <nav className="hidden md:flex space-x-7 text-zinc-500">
                {NavLinks.map((link, idx) => (
                    <Link
                        key={link.id || idx}
                        href={link.url}
                        className="hover:text-orange-500"
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>

            <span className="hidden md:block">
                <AnimatedThemeToggler />
            </span>
            <span className="flex md:hidden">
                <HeaderMenu />
            </span>
        </header>
    );
};

export default MainHeader;
