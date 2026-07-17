"use client";

import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { CircleFlag } from "react-circle-flags";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
    {
        code: "en",
        nativeName: "English",
        englishName: "English",
        flag: "us",
    },
    {
        code: "fa",
        nativeName: "فارسی",
        englishName: "Persian",
        flag: "ir",
    },
    {
        code: "de",
        nativeName: "Deutsch",
        englishName: "German",
        flag: "de",
    },
    {
        code: "ru",
        nativeName: "Русский",
        englishName: "Russian",
        flag: "ru",
    },
    {
        code: "es",
        nativeName: "Español",
        englishName: "Spanish",
        flag: "es",
    },
] as const;

const LanguageSelector = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const current =
        languages.find((lang) => lang.code === locale) ?? languages[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant="outline"
                        className="min-w-24 justify-between"
                    >
                        <span className="flex items-center gap-2">
                            <CircleFlag
                                countryCode={current.flag}
                                height={18}
                                className="w-6.25 h-6.25"
                            />

                            <span className="font-medium uppercase">
                                {current.code}
                            </span>
                        </span>

                        <ChevronDown className="size-4 opacity-60" />
                    </Button>
                }
            />

            <DropdownMenuContent align="end" className="w-64 rounded-xl">
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() =>
                            router.replace(pathname, {
                                locale: language.code,
                            })
                        }
                        className="flex cursor-pointer items-center justify-between py-2"
                    >
                        <div className="flex items-center gap-3">
                            <CircleFlag
                                countryCode={language.flag}
                                height={4}
                                className="w-6.25 h-6.25"
                            />

                            <div className="flex flex-col">
                                <span>{language.nativeName}</span>

                                <span className="text-xs text-muted-foreground">
                                    {language.englishName}
                                </span>
                            </div>
                        </div>

                        {locale === language.code && (
                            <Check className="size-4 text-primary" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSelector;
