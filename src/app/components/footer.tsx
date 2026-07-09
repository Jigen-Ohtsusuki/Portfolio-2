
import FooterLink from "@/app/components/footer-link";
import Link from "@/app/components/link";
import {SquareArrowUp} from "solar-icon-set";
export default function Footer() {
    return (
        <footer className="flex flex-col gap-16 mt-16 px-8 md:px-16 bg-white pt-4 pb-16 border-t-2 border-neutral-100">
            <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-8">
                <div className="flex flex-col gap-4 items-center lg:items-start mb-12 md:mb-0">
                    <h3 className="font-display font-bold text-4xl md:text-5xl cursor-help w-full max-w-xs text-center lg:text-left text-primary-500">
                        Portfolio
                    </h3>
                    <p className="text-xl text-neutral-800 w-full max-w-sm text-center lg:text-left">My Personal Portfolio</p>
                </div>
                <div className="flex flex-col gap-8 lg:gap-4 items-center lg:items-start w-full max-w-xs">
                    <FooterLink
                        href="/#about"
                    >
                        About
                    </FooterLink>
                    <FooterLink
                        href="/#skills"
                    >
                        Skills
                    </FooterLink>
                </div>
                <div className="flex flex-col gap-8 lg:gap-4 items-center lg:items-start w-full max-w-xs">
                    <FooterLink
                        href="/#projects"
                    >
                        Projects
                    </FooterLink>
                    <FooterLink
                        href="/#contact"
                    >
                        Contact
                    </FooterLink>
                </div>
                <Link
                    href="#top"
                    role="button"
                    className="group w-32 h-32 font-bold font-display aspect-square text-4xl overflow-hidden hover:bg-primary-500 flex-col
                        hover:text-primary-50 rounded-full bg-primary-100 text-primary-500 flex justify-center items-center transition-colors
                        active:bg-primary-400 active:text-primary-50 duration-300 ease-in-out min-w-max min-h-max"
                >
                    <div className="group-hover:-translate-y-32 transition-transform duration-300 ease-in-out">up</div>
                    <div className="translate-y-32 group-hover:-translate-y-5 transition-transform h-0 duration-300 ease-in-out flex items-center">
                        <SquareArrowUp size={60} iconStyle="Bold" />
                    </div>
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-2 lg:gap-8 text-neutral-800">
                <div className="transition-all flex gap-1 font-medium items-center">
                    Built with <span className="text-red-500">❤️</span> by <a href="https://github.com/Jigen-Ohtsusuki" target="_blank" rel="noopener noreferrer" className="font-bold text-primary-500 hover:text-primary-600 transition-colors">Jigen-Ohtsusuki</a>
                </div>
            </div>
        </footer>
    )
}
