"use client";

import {useContext, ComponentProps} from "react";
import {MenuContext} from "@/app/components/header-menu";

export type HeaderLinkProps = {
    href: string;
    children: string;
    mobile?: boolean;
} & ComponentProps<"a">;

export default function HeaderLink({href, children, mobile = false, onClick, ...props}: HeaderLinkProps) {
    const {open, setOpen} = useContext(MenuContext);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.includes('#')) {
            e.preventDefault();
            const id = href.split('#')[1];
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
        onClick?.(e);
    };

    return (
        <a
            href={href}
            className={"overflow-y-hidden cursor-pointer " + (mobile ? "md:hidden" : "")}
            onClick={handleClick}
            {...props}
        >
            <div
                className={`md:translate-y-0 ${open ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-700 
                ease-in-out delay-700`}
            >
                {children}
            </div>
        </a>
    )
}