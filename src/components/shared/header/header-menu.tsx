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
import Link from "next/link";

const HeaderMenu = () => {
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
                side="left"
                className={"p-4 bg-background text-foreground"}
            >
                <nav className="flex flex-col space-y-7 text-zinc-500 mt-10">
                    {NavLinks.map((link, idx) => (
                        <Link
                            key={link.id || idx}
                            href={link.url}
                            className="w-full px-3 py-4 bg-background text-foreground hover:bg-accent hover:text-orange-500 rounded-lg"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <SheetFooter>
                    <AnimatedThemeToggler />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default HeaderMenu;
