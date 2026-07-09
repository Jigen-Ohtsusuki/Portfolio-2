import Link from "@/app/components/link";
import Button from "@/app/components/button";
import Marquee from "@/app/components/marquee";
import HeaderLink from "@/app/components/header-link";
import HeaderMenu from "@/app/components/header-menu";

export default function Header() {
    return (
        <header
            className="flex justify-end items-center mb-16 font-display font-bold text-2xl sticky top-0 py-4 md:py-8
            bg-white px-8 md:px-16 z-40"
        >
            <HeaderMenu>
                <HeaderLink
                    href="/#about"
                    data-cursor-text="About"
                >
                    About
                </HeaderLink>
                <HeaderLink
                    href="/#skills"
                    data-cursor-text="Skills"
                >
                    Skills
                </HeaderLink>
                <Link
                    href="/#projects"
                    className="hidden md:block"
                >
                    <Button className="w-14 overflow-hidden md:w-48 word-spacing-6 px-[0!important]">
                        <Marquee repeatCount={2}>
                            Projects
                        </Marquee>
                    </Button>
                </Link>
                <HeaderLink href="/#projects" mobile>
                    Projects
                </HeaderLink>
                <HeaderLink href="/#contact" mobile>
                    Contact
                </HeaderLink>
            </HeaderMenu>
        </header>
    )
}