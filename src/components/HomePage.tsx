'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ITimelineItem } from "@/types"
import { BorderTrail } from "@/components/motion-primitives/border-trail"
import { ArrowRight, Code2, ExternalLink, Mail } from "lucide-react"

interface HomePageProps {
    projects: ITimelineItem[];
}

const interactiveClass = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"

function ProjectCard({ project }: { project: ITimelineItem }) {
    const technologies = Array.isArray(project.subtitle) ? project.subtitle : [project.subtitle]
    const visibleTechnologies = technologies.slice(0, project.featured ? 8 : 6)
    const usesWidePreview = project.preview?.layout === 'wide'

    return (
        <article
            className={`glass-panel overflow-hidden rounded-2xl border transition-colors hover:border-purple-500/40 ${
                project.featured ? `lg:col-span-2 ${usesWidePreview ? '' : 'lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]'}` : ''
            }`}
        >
            <div className={`project-preview relative ${usesWidePreview ? 'aspect-[16/9] sm:aspect-[2/1]' : project.featured ? 'min-h-64 lg:min-h-full' : 'h-52'}`}>
                {project.img && project.img !== '/' ? (
                    <Image
                        src={project.img}
                        alt={`${project.title} interface preview`}
                        fill
                        sizes={usesWidePreview && project.featured ? "(max-width: 1280px) 100vw, 1152px" : project.featured ? "(max-width: 1024px) 100vw, 550px" : "(max-width: 768px) 100vw, 550px"}
                        className={project.preview?.fit === 'contain' ? 'object-contain' : 'object-cover'}
                        style={{ objectPosition: project.preview?.position ?? 'center' }}
                    />
                ) : (
                    <div className="flex h-full min-h-52 items-center justify-center bg-gradient-to-br from-orange-500/10 to-purple-500/10 px-6 text-center font-mono text-xl text-gray-400">
                        {project.title}
                    </div>
                )}
                {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full border border-orange-400/30 bg-black/70 px-3 py-1 font-mono text-xs text-orange-300 backdrop-blur-sm">
                        Featured project
                    </span>
                )}
            </div>

            <div className={`flex flex-col ${project.featured ? 'p-6 md:p-8' : 'p-6'}`}>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
                    {project.category} project
                </p>
                <h3 className={`font-mono text-white ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{project.description}</p>

                {project.highlights && (
                    <ul className="mt-5 space-y-2 text-sm text-gray-300">
                        {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {project.outcome && (
                    <p className="mt-5 border-l-2 border-purple-500/50 pl-3 text-sm leading-6 text-gray-300">
                        <span className="font-mono text-xs uppercase tracking-wider text-purple-400">Evidence</span>
                        <span className="mt-1 block">{project.outcome}</span>
                    </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                    {visibleTechnologies.map((tech) => (
                        <span key={tech} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 font-mono text-xs text-gray-300">
                            {tech}
                        </span>
                    ))}
                    {technologies.length > visibleTechnologies.length && (
                        <span className="px-1 py-1 font-mono text-xs text-gray-400">
                            +{technologies.length - visibleTechnologies.length} more
                        </span>
                    )}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    {project.link && project.link !== '/' && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.linkLabel ?? 'Live'} ${project.title} (opens in a new tab)`}
                            className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-400 to-rose-600 px-4 py-2 font-mono text-sm text-white transition-opacity hover:opacity-90 ${interactiveClass}`}
                        >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            {project.linkLabel ?? 'Live'}
                        </a>
                    )}
                    {project.code && project.code !== '/' && (
                        <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub (opens in a new tab)`}
                            className={`inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-mono text-sm text-gray-200 transition-colors hover:border-purple-500/40 hover:text-white ${interactiveClass}`}
                        >
                            <Code2 className="h-4 w-4" aria-hidden="true" />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export default function HomePage({ projects }: HomePageProps) {
    const completedProjects = projects.filter((project) => !project.isInProgress)

    return (
        <div className="relative">

            <section className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center px-6 py-16" aria-labelledby="hero-title">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]"
                >
                    <div className="order-2 text-center lg:order-1 lg:text-left">
                        <h1 id="hero-title" className="text-5xl font-mono font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
                            Full-Stack <span className="bg-gradient-to-r from-orange-400 to-rose-600 bg-clip-text text-transparent">Next.js</span> Developer
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 lg:text-xl">
                            I build secure SaaS dashboards, internal tools, and business automation.
                        </p>
                        <p className="mt-4 font-mono text-sm text-gray-400">
                            Available for remote B2B contracts <span aria-hidden="true">·</span> Open to relocation
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <a
                                href="#projects"
                                className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 to-rose-600 px-5 py-3 font-mono text-white transition-opacity hover:opacity-90 ${interactiveClass}`}
                            >
                                View projects
                                <ArrowRight className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <Link
                                href="/about"
                                className={`inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-mono text-white transition-colors hover:border-purple-500/40 ${interactiveClass}`}
                            >
                                Go to download resume
                                <ArrowRight className="h-5 w-5" aria-hidden="true" />
                            </Link>
                            <a
                                href="mailto:kasionma@gmail.com"
                                className={`inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-mono text-white transition-colors hover:border-purple-500/40 ${interactiveClass}`}
                            >
                                <Mail className="h-5 w-5" aria-hidden="true" />
                                Email me
                            </a>
                        </div>
                    </div>

                    <div className="order-1 mx-auto lg:order-2">
                        <div className="relative h-72 w-56 rounded-2xl md:h-80 md:w-64">
                            <Image
                                fill
                                priority
                                alt="Michael K."
                                src="/meImg/prof.webp"
                                sizes="(max-width: 768px) 224px, 256px"
                                className="rounded-2xl object-cover object-center"
                            />
                            <BorderTrail
                                style={{ boxShadow: '0 0 50px 20px rgb(251 146 60 / 25%)' }}
                                size={90}
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            <section id="projects" className="relative z-10 scroll-mt-24 px-6 py-16" aria-labelledby="projects-title">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 max-w-2xl">
                        <h2 id="projects-title" className="text-3xl font-mono md:text-4xl">
                            <span className="text-purple-500">#</span> Projects
                        </h2>
                        <p className="mt-3 leading-7 text-gray-400">
                            Selected completed work, with implementation details and verifiable outcomes.
                        </p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {completedProjects.map((project) => (
                            <ProjectCard key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-6 py-16 text-center">
                <p className="font-mono text-gray-500">
                    More about my delivery process <span aria-hidden="true">→</span>{' '}
                    <Link href="/about" className={`text-purple-400 underline-offset-4 hover:underline ${interactiveClass}`}>About me</Link>
                </p>
            </section>
        </div>
    )
}
