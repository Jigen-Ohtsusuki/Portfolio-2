"use client";
import NextLink from "next/link";
import React, {ComponentProps, ReactNode} from "react";

export type LinkProps = {
    underline?: boolean;
    href: string;
    children: ReactNode;
    className?: string;
} & ComponentProps<typeof NextLink>

export default function Link(
    {
        underline,
        href,
        children,
        className,
        onClick,
        ...props
    }: LinkProps
) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof href === 'string' && href.includes('#')) {
            e.preventDefault();
            const id = href.split('#')[1];
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
        onClick?.(e);
    };

    return (
        <NextLink href={href} className={(underline ? (className || "") + " group" : className)} onClick={handleClick} {...props}>
            {children}
            {underline &&
                <div className="w-full scale-x-0 group-hover:scale-x-100 h-1 mt-1 rounded-full bg-primary-500 transition-transform duration-300 ease-in-out" />
            }
        </NextLink>
    )
}