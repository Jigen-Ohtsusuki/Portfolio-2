"use client";
import {ComponentProps} from "react";

export type ButtonProps = ComponentProps<"button"> & {
    variant?: "soft" | "solid";
};

export default function Button({className, children, variant = "soft", ...props}: ButtonProps) {
    const softClasses = "text-primary-500 hover:text-white hover:bg-primary-500 bg-primary-100 active:bg-primary-400 active:text-white";
    const solidClasses = "text-white hover:text-primary-500 hover:bg-primary-100 bg-primary-500 active:bg-primary-600";
    
    return (
        <button
            className={`rounded-full font-display font-bold text-2xl py-4 px-8 duration-300 ease-in-out transition-all disabled:opacity-50 disabled:pointer-events-none hover:scale-105 active:scale-95 ${variant === 'soft' ? softClasses : solidClasses} ${className || ""}`}
            {...props}
        >
            {children}
        </button>
    )
}