"use client";

import {useState} from "react";
import Link from "@/app/components/link";
import Button from "@/app/components/button";

export default function HeroButtons({ projectsTitle, contactTitle }: { projectsTitle: string, contactTitle: string }) {
    const [contactHovered, setContactHovered] = useState(false);
    const [projectsHovered, setProjectsHovered] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 justify-center md:justify-start">
            <Button 
                variant={contactHovered ? "solid" : "soft"}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={() => setProjectsHovered(true)}
                onMouseLeave={() => setProjectsHovered(false)}
            >
                {projectsTitle}
            </Button>
            <Button 
                variant={projectsHovered ? "soft" : "solid"} 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-cursor-keep-color={!projectsHovered ? "true" : undefined}
                onMouseEnter={() => setContactHovered(true)}
                onMouseLeave={() => setContactHovered(false)}
            >
                {contactTitle}
            </Button>
        </div>
    );
}
