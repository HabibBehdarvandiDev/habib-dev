import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://habib-dev.ir",
            lastModified: new Date(),
        },
    ];
}
