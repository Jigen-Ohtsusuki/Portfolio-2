"use client";
import { useState, useEffect, useRef } from 'react';

export default function WordRotator({ words, interval = 6000 }: { words: string[], interval?: number }) {
    const [index, setIndex] = useState(0);
    const [phase, setPhase] = useState<"enter" | "idle" | "exit">("enter");
    const [containerWidth, setContainerWidth] = useState<number | 'auto'>('auto');
    const measureRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (measureRef.current) {
            setContainerWidth(measureRef.current.getBoundingClientRect().width);
        }
    }, [index]);

    useEffect(() => {
        const timer = setInterval(() => {
            setPhase("exit");
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setPhase("enter");
            }, 600); // Wait for exit animation to finish
        }, interval);
        return () => clearInterval(timer);
    }, [words, interval]);

    useEffect(() => {
        if (phase === "enter") {
            // Small delay to let DOM reset at the bottom before animating up
            const t = setTimeout(() => setPhase("idle"), 50);
            return () => clearTimeout(t);
        }
    }, [phase]);

    const currentWord = words[index];

    return (
        <span 
            className="inline-flex [clip-path:inset(0_-0.2em_0_-0.2em)] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] relative" 
            style={{ height: "1.2em", width: containerWidth === 'auto' ? 'auto' : `${containerWidth}px` }}
        >
            <span ref={measureRef} className="absolute invisible whitespace-pre leading-[1.2em]" aria-hidden="true">
                {currentWord}
            </span>

            {currentWord.split("").map((char, i) => {
                let yClass = "translate-y-[1.2em]";
                let opacityClass = "opacity-0";
                
                if (phase === "idle") {
                    yClass = "translate-y-0";
                    opacityClass = "opacity-100";
                } else if (phase === "exit") {
                    yClass = "-translate-y-[1.2em]";
                    opacityClass = "opacity-0";
                }

                return (
                    <span
                        key={`${index}-${i}`}
                        className={`inline-block whitespace-pre transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] leading-[1.2em] ${yClass} ${opacityClass}`}
                        style={{
                            transitionDelay: phase === 'exit' ? `${i * 0.015}s` : `${i * 0.03}s`
                        }}
                    >
                        {char}
                    </span>
                );
            })}
        </span>
    );
}
