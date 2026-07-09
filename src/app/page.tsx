import Link from "@/app/components/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import FeaturesOverview from "@/app/components/features-overview";
import HeroButtons from "@/app/components/hero-buttons";
import WordRotator from "@/app/components/word-rotator";


import Marquee from "@/app/components/marquee";
import {default as skills} from "@/data/skills.json";
import {default as projects} from "@/data/projects.json";
import {default as about} from "@/data/about.json";
import {default as socials} from "@/data/socials.json";

import * as icons from "solar-icon-set";
import {ComponentType} from "react";
import {IconProps} from "solar-icon-set/dist/types";
import Anchor from "@/app/components/anchor";
const buzzwords = ["Kotlin", "Java", "C++", "C", "Python", "Android", "Jetpack Compose", "React", "Node.js", "ROMs", "Machine Learning"];

export default function Home() {
    return (
        <>
            <section className="w-full flex justify-center items-center flex-col gap-4 mt-48 md:mt-72 mb-16 px-4" id="top">
                <h1 className="text-primary-500 font-bold font-display text-5xl md:text-6xl lg:text-7xl text-center">
                    Hi, I&apos;m{" "}
                    <WordRotator words={["Jigen-Ohtsusuki", "Abhishek Penkey"]} interval={6000} />
                </h1>
                <p className="text-xl md:text-2xl text-neutral-800 w-full md:w-[30rem] text-center">A space enthusiast developing custom ROMs and modern apps.</p>
                <HeroButtons projectsTitle="Featured Projects" contactTitle="Get in touch" />
                
            </section>

            <Anchor id="about" />
            <section className="w-full flex justify-center items-center flex-col gap-16 mb-32 mt-48 md:mt-72 lg:mt-96">
                <h2 className="font-display font-bold text-5xl lg:text-7xl text-center">About Me</h2>
                <div className="flex flex-col md:flex-row gap-12 items-center bg-white p-8 md:p-16 rounded-4xl md:rounded-6xl border-2 border-neutral-100 max-w-5xl w-full">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <Image src={about.image} alt={about.name} width={256} height={256} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col text-center md:text-left">
                        <h3 className="text-4xl font-bold font-display mb-2">{about.name}</h3>
                        <p className="text-xl text-primary-500 font-medium mb-6">{about.role}</p>
                        <p className="text-neutral-700 text-lg md:text-xl">{about.description}</p>
                    </div>
                </div>
            </section>



            <Anchor id="skills" className="top-12 lg:-top-48" />
            <section
                className="bg-black text-white justify-between flex lg:px-24 lg:py-36 lg:gap-4 mb-16 flex-col w-full-no-offset
                lg:flex-row rounded-4xl lg:rounded-6xl lg:h-[28rem] mt-48 md:mt-72 lg:mt-96 sm:p-12 sm:pt-16 gap-12 p-4 pt-12 mx-offset md:o-16"
            >
                <div className="flex flex-col gap-4 justify-center">
                    <h3 className="font-bold font-display text-5xl lg:text-6xl 2xl:text-8xl text-center lg:text-left">
                        My Skills
                    </h3>
                    <p className="text-lg md:text-xl xl:text-2xl w-full lg:max-w-lg text-center lg:text-left">
                        Here is my core tech stack and the skills I specialize in.
                    </p>
                </div>

                <FeaturesOverview
                    features={[
                        ...skills.map(({id, name, tech}) => {
                            return {
                                name: name,
                                content: (
                                    <div className="flex flex-col items-center justify-center w-full h-full gap-4 px-6">
                                        <p className="text-4xl lg:text-5xl font-bold font-display text-center text-primary-500">{name}</p>
                                        <p className="text-xl md:text-2xl font-medium text-center text-neutral-800">{tech}</p>
                                    </div>
                                )
                            }
                        }),
                    ]}
                    className="lg:w-[32rem] h-fit md:h-[36rem] lg:-translate-y-96 rounded-3xl bg-primary-100 text-black"
                    leftOffset={24}
                />
            </section>

            <Anchor id="projects" />
            <section
                className="flex justify-center items-center flex-col gap-24 mb-16 border-2 py-12 px-4 md:px-12 lg:p-20
                border-neutral-100 rounded-4xl md:rounded-6xl bg-white md:o-16 o-4 mx-offset w-full-no-offset"
            >
                <div className="flex flex-col gap-4 lg:gap-6 items-center w-full mb-8">
                    <h3 className="font-bold font-display text-4xl lg:text-7xl text-center">
                        Featured Projects
                    </h3>
                    <p className="text-lg md:text-xl xl:text-2xl text-neutral-800 w-full max-w-lg text-center">
                        A selection of my recent work.
                    </p>
                </div>

                {projects.map((project, i) => {
                    const {id, note, title, description, url} = project;
                    return (
                        <figure
                            className={"flex w-full justify-between gap-8 md:gap-24 items-center flex-col-reverse " +
                                (i % 2 ? 'md:flex-row-reverse' : 'md:flex-row')}
                            key={i}
                        >
                            <div className="w-full md:w-5/12 aspect-video bg-neutral-100 rounded-2xl overflow-hidden flex items-center justify-center border-4 border-neutral-200">
                                <icons.CodeSquare iconStyle="Bold" size={80} className="text-neutral-300" />
                            </div>
                            <figcaption
                                className="flex flex-col justify-center gap-1 text-center md:text-left md:w-7/12 h-fit">
                                {note &&
                                    <p className="text-neutral-400 text-lg">
                                        {note}
                                    </p>
                                }
                                <h3 className="font-bold font-display text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                                    {title}
                                </h3>
                                <p className="text-neutral-800 text-lg md:text-xl xl:text-2xl mt-4 md:mt-6 mb-6">
                                    {description}
                                </p>
                                {url && (
                                    <a href={url} target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors w-max mx-auto md:mx-0">
                                        View Repository
                                    </a>
                                )}
                            </figcaption>
                        </figure>
                    )
                })}
            </section>

            <Anchor id="contact" className="md:-top-48" />
            <section className="w-full flex justify-center items-center flex-col px-5 md:px-8 gap-8 md:gap-16">
                <h2 className="font-display font-bold text-5xl lg:text-7xl text-center">Let&apos;s Connect</h2>
                <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
                    {
                        socials.map(({name, url}, i) => {
                            let Icon: any = undefined;
                            if (name === "GitHub") Icon = FaGithub;
                            else if (name === "LinkedIn") Icon = FaLinkedin;
                            else if (name === "Instagram") Icon = FaInstagram;
                            else if (name === "Telegram") Icon = FaTelegramPlane;
                            else if (name === "Email") Icon = FaEnvelope;
                            
                            return (
                                <a
                                    key={i}
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 px-8 py-4 bg-white border-2 border-neutral-100 rounded-full hover:border-primary-500 hover:text-primary-500 transition-colors"
                                >
                                    {Icon && <Icon size={32} />}
                                    <span className="text-xl font-medium">{name}</span>
                                </a>
                            )
                        })
                    }
                </div>
            </section>

            <div
                className="overflow-hidden w-full my-8 md:my-16 flex flex-col justify-center h-48 sm:h-[16rem] md:h-[24rem]
                word-spacing-6 text-5xl sm:text-7xl md:text-8xl font-bold font-display"
            >
                <Marquee rotation={8} className="text-neutral-300" scrollBoost={0.25}>
                    {buzzwords.join(" • ")}
                </Marquee>
                <div className="h-4 md:h-12" />
                <Marquee rotation={8} baseVelocity={-1} className="text-white text-outline-neutral-300" scrollBoost={0.25}>
                    {buzzwords.join(" • ")}
                </Marquee>
            </div>
            
            {/* @ts-expect-error Async Server Component */}
            <RecentCommits />
        </>
    )
}

async function RecentCommits() {
    let commits: any[] = [];
    try {
        const res = await fetch(
            'https://api.github.com/search/commits?q=author:Jigen-Ohtsusuki&sort=author-date&order=desc&per_page=7',
            {
                headers: { Accept: "application/vnd.github.cloak-preview" },
                next: { revalidate: 3600 }
            }
        );
        const data = await res.json();
        if (data && data.items) {
            commits = data.items;
        }
    } catch (e) {
        console.error("Failed to fetch commits:", e);
    }

    if (commits.length === 0) return null;

    return (
        <section className="w-full flex justify-center items-center flex-col px-5 md:px-8 gap-8 md:gap-12 mt-16 mb-32 max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-center">Recent Activity</h2>
            <div className="w-full flex flex-col gap-4">
                {commits.map((commitItem, i) => {
                    const commit = commitItem.commit;
                    const repoName = commitItem.repository.name;
                    const date = new Date(commit.author.date).toLocaleDateString(undefined, {
                        month: 'short', day: 'numeric', year: 'numeric'
                    });
                    
                    return (
                        <a 
                            key={i} 
                            href={commitItem.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-white border border-neutral-100 rounded-2xl p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between hover:border-primary-300 transition-all group"
                        >
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xl font-bold font-display text-neutral-900 group-hover:text-primary-500 transition-colors">
                                    {commit.message.split('\n')[0]}
                                </h4>
                                <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
                                    <icons.CodeSquare iconStyle="Bold" size={16} />
                                    <span>{repoName}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400 text-sm flex-shrink-0">
                                <icons.ClockSquare iconStyle="Bold" size={16} />
                                <span>{date}</span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
