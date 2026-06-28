"use client";

import { useRef } from "react";
import { AnimatedBeam } from "../ui/animated-beam";

export function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    const a = useRef<HTMLDivElement>(null);
    const b = useRef<HTMLDivElement>(null);
    const c = useRef<HTMLDivElement>(null);
    const d = useRef<HTMLDivElement>(null);
    const e = useRef<HTMLDivElement>(null);
    const f = useRef<HTMLDivElement>(null);
    const g = useRef<HTMLDivElement>(null);
    const h = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden opacity-25"
        >
            {/* Hidden anchors */}
            <div ref={a} className="absolute left-[15%] top-[15%] size-2" />
            <div ref={b} className="absolute left-[50%] top-[15%] size-2" />
            <div ref={c} className="absolute left-[80%] top-[15%] size-2" />

            <div ref={d} className="absolute left-[15%] top-[50%] size-2" />
            <div ref={e} className="absolute left-[50%] top-[50%] size-2" />
            <div ref={f} className="absolute left-[80%] top-[50%] size-2" />

            <div ref={g} className="absolute left-[25%] top-[80%] size-2" />
            <div ref={h} className="absolute left-[75%] top-[80%] size-2" />

            {/* Top */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={a}
                toRef={b}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={0}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={b}
                toRef={c}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={0}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />

            {/* Middle */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={d}
                toRef={e}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={0}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={e}
                toRef={f}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={0}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />

            {/* Verticals */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={a}
                toRef={d}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={0}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={b}
                toRef={e}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={0}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={c}
                toRef={f}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={0}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />

            {/* Bottom branches */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={e}
                toRef={g}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={-75}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={e}
                toRef={h}
                pathWidth={1}
                pathOpacity={0.12}
                curvature={75}
                duration={999999}
                gradientStartColor="transparent"
                gradientStopColor="transparent"
                pathColor="rgb(161 161 170)"
            />
        </div>
    );
}
