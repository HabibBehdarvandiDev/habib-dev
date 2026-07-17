import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/data/header";
import { Menu } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import LanguageSelector from "./language-selector";

const HeaderMenu = async () => {
    const t = await getTranslations("navigation");
    const locale = await getLocale();

    return (
        <Sheet>
            <SheetTrigger
                render={
                    <Button variant="ghost">
                        <Menu size={4} />
                    </Button>
                }
            />
            <SheetContent
                side={locale === "fa" ? "right" : "left"}
                className={"p-4 bg-background text-foreground"}
            >
                <nav className="flex flex-col space-y-7 text-zinc-500 mt-10">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="w-full rounded-lg bg-background px-3 py-4 text-foreground hover:bg-accent hover:text-orange-500"
                        >
                            {t(link.title)}
                        </Link>
                    ))}
                </nav>
                <SheetFooter className="flex flex-row gap-4 items-center justify-center align-middle">
                    <AnimatedThemeToggler />
                    <LanguageSelector />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default HeaderMenu;
