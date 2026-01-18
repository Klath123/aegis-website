"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingImages = ({
    images,
    direction = "left",
    speed = "normal",
    className,
}: {
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    direction?: "right" | "left";
    speed?: "fast" | "normal" | "slow";
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "60s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_2%,white_98%,transparent)] gallery-hover-medium",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
                    start && "animate-scroll",
                )}
            >
                {images.map((image, idx) => (
                    <li
                        className="relative shrink-0 group"
                        key={image.src + idx}
                    >
                        <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-xl overflow-hidden border border-purple-500/50 bg-black/40 backdrop-blur-sm transition-all duration-300 shadow-[0_0_15px_rgba(130,0,223,0.4),0_0_30px_rgba(130,0,223,0.2)] group-hover:border-cyan-400/70 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,255,255,0.6),0_0_50px_rgba(0,255,255,0.3),0_0_75px_rgba(130,0,223,0.2)]">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {image.caption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                                    <p className="text-white font-mono text-sm md:text-base font-semibold drop-shadow-lg">
                                        {image.caption}
                                    </p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
