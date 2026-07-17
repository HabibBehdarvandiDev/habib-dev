import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Smile } from "lucide-react";

type Testimonial = {
    image: string;
    text: string;
    name: string;
    username: string;
    social: string;
};

/* const testimonials: Testimonial[] = [
    {
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop",
        text: "I'm blown away by the versatility of the components in this library. They make UI development a breeze!",
        name: "Alice Johnson",
        username: "@alicejohnson",
        social: "",
    },
    {
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",
        text: "Using this component library has significantly sped up our development process. The quality and ease of integration are remarkable!",
        name: "David Smith",
        username: "@davidsmith",
        social: "",
    },
    {
        image: "https://i.imgur.com/kaDy9hV.jpeg",
        text: "The components in this library are not just well-designed but also highly customizable. It's a developer's dream!",
        name: "Emma Brown",
        username: "@emmabrown",
        social: "",
    },
    {
        image: "https://i.imgur.com/cRwFxtE.png",
        text: "I love how intuitive and well-documented this component library is. It has significantly improved our UI consistency across projects.",
        name: "James Wilson",
        username: "@jameswilson",
        social: "",
    },
]; */

const testimonials: Testimonial[] = [];

function getInitials(name: string) {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="flex h-full flex-col border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
            <CardContent className="flex-1 pt-6">
                <p className="leading-relaxed text-muted-foreground">
                    {testimonial.text}
                </p>
            </CardContent>

            <CardFooter className="pt-0">
                <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                        <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                        />

                        <AvatarFallback>
                            {getInitials(testimonial.name)}
                        </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                        <p className="truncate font-medium">
                            {testimonial.name}
                        </p>

                        <p className="truncate text-sm text-muted-foreground">
                            {testimonial.username}
                        </p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default function TestimonialsSection() {
    return (
        <section
            id="testimonials"
            className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl font-sans">
                        What People Say
                    </h2>

                    <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                        Feedback from clients, collaborators, and teammates
                        I&apos;ve had the opportunity to work with.
                    </p>
                </div>

                {testimonials.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2 xl:gap-8">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.username}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <Card className="w-full max-w-2xl border-dashed border-border/60 bg-muted/20">
                            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="mb-4 rounded-full border border-border bg-background p-4">
                                    <Smile className="text-zinc-400" />
                                </div>

                                <h3 className="text-lg font-semibold">
                                    No testimonials yet
                                </h3>

                                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                                    I&apos;m currently collecting feedback from
                                    clients and collaborators. Check back soon
                                    to see what people have to say!
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}
