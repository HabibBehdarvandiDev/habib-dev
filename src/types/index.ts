export type NavigationKey =
    | "about"
    | "skills"
    | "faq"
    | "testimonials"
    | "experience";

export type NavLinkType = {
    id: number;
    title: NavigationKey;
    url: string;
};
