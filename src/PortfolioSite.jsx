import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Download, Globe, BookOpen, Code, GraduationCap, Calendar, ArrowRight, Sun, Moon, ExternalLink, ChevronRight } from "lucide-react";

// --- Quick theme toggler (Tailwind)
function useThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "light";
        return document.documentElement.classList.contains("dark") ? "dark" : "light";
    });
    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        if (next === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    };
    return { theme, toggle };
}

// --- Sample data (edit freely)
const PROFILE = {
    name: "Keishi Sashihara",
    role: "Physics major · Research‑oriented developer",
    location: "Tokyo, Japan",
    summary:
        "Exploring the edges of physics, math, and intelligent tooling. I build usable research software (TexFlow, iPad handwriting → LaTeX/TikZ) and study quantum & representation theory.",
    email: "you@example.com",
    links: {
        github: "https://github.com/yourname",
        linkedin: "https://www.linkedin.com/in/yourname/",
        homepage: "https://yourdomain.tld",
    },
    skills: [
        "Python", "C/C++", "TypeScript", "React", "Electron", "Swift (iOS)", "NumPy/SciPy", "Pandas", "LaTeX/TikZ", "Quantum Mechanics", "Group Theory", "Reinforcement Learning",
    ],
};

const PROJECTS = [
    {
        title: "TexFlow – Offline LaTeX IDE",
        period: "2025",
        tags: ["Electron", "React", "Monaco", "Tectonic WASM"],
        description:
            "A sleek, offline-first LaTeX IDE with multi-pane UI, instant PDF preview, and local LLM assists. Built for academic writing and reproducible research.",
        links: [{ label: "Repo", href: "#" }, { label: "Demo", href: "#" }],
    },
    {
        title: "iPad Handwriting → TikZ",
        period: "2025",
        tags: ["Swift", "MyScript SDK", "Computer Vision"],
        description:
            "Sketch math diagrams by hand; get exact TikZ/LaTeX back. Targeting fast iteration for notes, lectures, and research figures.",
        links: [{ label: "Spec", href: "#" }],
    },
    {
        title: "Burnside Visualizer",
        period: "2024",
        tags: ["Python", "Group Actions", "Combinatorics"],
        description:
            "Interactive simulator for Burnside’s lemma on cube colorings; validates orbits vs fixed points and exports proofs-of-concept.",
        links: [{ label: "Notebook", href: "#" }],
    },
];

const PUBLICATIONS = [
    {
        title: "Toward Context‑Aware Command Interpretation in AI Writing Tools",
        venue: "Preprint (2025)",
        link: "#",
    },
    {
        title: "Notes on Representation Theory for Quantum Systems",
        venue: "Working draft",
        link: "#",
    },
];

const TIMELINE = [
    { when: "2025 – now", title: "Research projects", body: "Context‑aware AI for technical writing; TexFlow ecosystem; iPad → TikZ converter." },
    { when: "2024", title: "Advanced coursework", body: "Quantum mechanics, statistical mechanics, representation theory." },
    { when: "2023", title: "Security & crypto", body: "Explored cryptography, network analysis, and secure lab environments." },
];

const LANG = {
    en: {
        hero_tag: "Portfolio",
        about: "About",
        projects: "Projects",
        publications: "Publications",
        skills: "Skills",
        timeline: "Timeline",
        contact: "Contact",
        view_more: "View more",
        download_cv: "Download CV",
        say_hello: "Say hello",
        form_name: "Your name",
        form_email: "Your email",
        form_message: "Message",
        send: "Send",
    },
    ja: {
        hero_tag: "ポートフォリオ",
        about: "概要",
        projects: "プロジェクト",
        publications: "成果物",
        skills: "スキル",
        timeline: "略歴",
        contact: "連絡先",
        view_more: "もっと見る",
        download_cv: "履歴書をダウンロード",
        say_hello: "お問い合わせ",
        form_name: "お名前",
        form_email: "メールアドレス",
        form_message: "メッセージ",
        send: "送信",
    },
};

export default function PortfolioSite() {
    const { theme, toggle } = useThemeToggle();
    const [lang, setLang] = useState("ja");
    const t = useMemo(() => LANG[lang], [lang]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Top nav */}
            <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-xl bg-primary/20 grid place-items-center">
                                <Globe className="h-4 w-4" />
                            </div>
                            <span className="font-semibold">{PROFILE.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" onClick={() => setLang(lang === "ja" ? "en" : "ja")}
                                className="rounded-xl">
                                {lang === "ja" ? "EN" : "日本語"}
                            </Button>
                            <Button variant="ghost" size="icon" onClick={toggle} className="rounded-xl">
                                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </Button>
                            <Button size="sm" className="rounded-xl">
                                <Download className="h-4 w-4 mr-2" /> {lang === "ja" ? t.download_cv : t.download_cv}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20">
                <div className="grid md:grid-cols-2 items-center gap-8">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-extrabold leading-tight"
                        >
                            {PROFILE.role}
                        </motion.h1>
                        <p className="mt-4 text-muted-foreground">
                            {PROFILE.summary}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a className="inline-flex items-center text-sm hover:underline" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                                <Github className="h-4 w-4 mr-2" /> GitHub
                                <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
                            </a>
                            <a className="inline-flex items-center text-sm hover:underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                                <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                                <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
                            </a>
                            <a className="inline-flex items-center text-sm hover:underline" href={PROFILE.links.homepage} target="_blank" rel="noreferrer">
                                <Globe className="h-4 w-4 mr-2" /> Website
                                <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
                            </a>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:justify-self-end"
                    >
                        <Card className="rounded-2xl shadow-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base md:text-lg flex items-center gap-2"><BookOpen className="h-4 w-4" /> Highlights</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex items-start gap-2"><Code className="h-4 w-4 mt-0.5" /><span>Building <b>TexFlow</b> (Electron + React + WASM LaTeX)</span></div>
                                <div className="flex items-start gap-2"><GraduationCap className="h-4 w-4 mt-0.5" /><span>Physics major; focus on quantum & representation theory</span></div>
                                <div className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-0.5" /><span>Open to research internships and collaborations</span></div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Main content */}
            <main className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
                <Tabs defaultValue="projects" className="w-full">
                    <TabsList className="rounded-2xl">
                        <TabsTrigger value="about">{t.about}</TabsTrigger>
                        <TabsTrigger value="projects">{t.projects}</TabsTrigger>
                        <TabsTrigger value="publications">{t.publications}</TabsTrigger>
                        <TabsTrigger value="skills">{t.skills}</TabsTrigger>
                        <TabsTrigger value="timeline">{t.timeline}</TabsTrigger>
                        <TabsTrigger value="contact">{t.contact}</TabsTrigger>
                    </TabsList>

                    {/* About */}
                    <TabsContent value="about" className="pt-6">
                        <Card className="rounded-2xl">
                            <CardContent className="p-6 text-sm leading-7 text-muted-foreground">
                                <p>
                                    I enjoy bridging <b>theoretical physics</b> and <b>developer experience</b>—crafting tools that make deep work smoother. Recently building an offline LaTeX IDE and an iPad → TikZ converter, while studying quantum, stat mech, and representation theory.
                                </p>
                                <Separator className="my-6" />
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Profile</div>
                                        <ul className="mt-3 space-y-2 text-sm">
                                            <li><span className="opacity-70">Name:</span> {PROFILE.name}</li>
                                            <li><span className="opacity-70">Location:</span> {PROFILE.location}</li>
                                            <li className="flex items-center gap-2"><Mail className="h-4 w-4 opacity-70" /> <a className="hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Focus</div>
                                        <ul className="mt-3 space-y-2 text-sm list-disc ml-5">
                                            <li>Context-aware AI for scientific writing</li>
                                            <li>Human-in-the-loop research tooling</li>
                                            <li>Visualization & symbolic computation</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Projects */}
                    <TabsContent value="projects" className="pt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {PROJECTS.map((p, i) => (
                                <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                                    <Card className="rounded-2xl h-full">
                                        <CardHeader className="pb-2">
                                            <div className="flex items-center justify-between">
                                                <CardTitle className="text-lg">{p.title}</CardTitle>
                                                <Badge variant="secondary" className="rounded-xl">{p.period}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-sm text-muted-foreground space-y-4">
                                            <p>{p.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {p.tags.map((t) => (
                                                    <Badge key={t} variant="outline" className="rounded-xl">{t}</Badge>
                                                ))}
                                            </div>
                                            <div className="pt-1 flex flex-wrap gap-3">
                                                {p.links?.map((l) => (
                                                    <a key={l.href} href={l.href} className="inline-flex items-center text-sm hover:underline" target="_blank" rel="noreferrer">
                                                        {l.label} <ArrowRight className="h-3 w-3 ml-1" />
                                                    </a>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Publications */}
                    <TabsContent value="publications" className="pt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {PUBLICATIONS.map((pub, i) => (
                                <motion.div key={pub.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                                    <Card className="rounded-2xl h-full">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg flex items-start gap-2">
                                                <BookOpen className="h-5 w-5 mt-0.5" />
                                                <span>{pub.title}</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-sm text-muted-foreground">
                                            <div className="flex items-center justify-between">
                                                <div className="opacity-80">{pub.venue}</div>
                                                <a href={pub.link} className="inline-flex items-center hover:underline" target="_blank" rel="noreferrer">
                                                    Read <ExternalLink className="h-3 w-3 ml-1" />
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Skills */}
                    <TabsContent value="skills" className="pt-6">
                        <Card className="rounded-2xl">
                            <CardContent className="p-6">
                                <div className="flex flex-wrap gap-2">
                                    {PROFILE.skills.map((s) => (
                                        <Badge key={s} variant="secondary" className="rounded-xl">{s}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Timeline */}
                    <TabsContent value="timeline" className="pt-6">
                        <Card className="rounded-2xl">
                            <CardContent className="p-6">
                                <ol className="relative border-l pl-6">
                                    {TIMELINE.map((item, i) => (
                                        <li key={i} className="mb-10 ml-4">
                                            <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 mt-1 border"></div>
                                            <time className="text-xs uppercase tracking-wide text-muted-foreground">{item.when}</time>
                                            <h3 className="text-base font-semibold mt-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">{item.body}</p>
                                        </li>
                                    ))}
                                </ol>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Contact */}
                    <TabsContent value="contact" className="pt-6">
                        <Card className="rounded-2xl">
                            <CardContent className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <form className="space-y-4">
                                        <div>
                                            <label className="text-sm opacity-80">{t.form_name}</label>
                                            <Input placeholder="Ada Lovelace" className="rounded-xl mt-1" />
                                        </div>
                                        <div>
                                            <label className="text-sm opacity-80">{t.form_email}</label>
                                            <Input type="email" placeholder="ada@example.com" className="rounded-xl mt-1" />
                                        </div>
                                        <div>
                                            <label className="text-sm opacity-80">{t.form_message}</label>
                                            <Textarea rows={5} placeholder="Hello!" className="rounded-xl mt-1" />
                                        </div>
                                        <Button className="rounded-xl">{t.send}</Button>
                                    </form>

                                    <div className="text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2 mb-3"><Mail className="h-4 w-4" /><a className="hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
                                        <div className="flex items-center gap-2 mb-3"><Github className="h-4 w-4" /><a className="hover:underline" href={PROFILE.links.github} target="_blank" rel="noreferrer">GitHub</a></div>
                                        <div className="flex items-center gap-2 mb-3"><Linkedin className="h-4 w-4" /><a className="hover:underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
                                        <Separator className="my-4" />
                                        <p>
                                            This form is non-functional in this static demo. Hook it up to your email provider or serverless function.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>

            {/* Footer */}
            <footer className="border-t">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 text-sm text-muted-foreground">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
                        </div>
                        <nav className="flex items-center gap-4">
                            <a href="#projects" className="inline-flex items-center gap-1 hover:underline">{t.projects} <ChevronRight className="h-3 w-3" /></a>
                            <a href="#publications" className="inline-flex items-center gap-1 hover:underline">{t.publications} <ChevronRight className="h-3 w-3" /></a>
                            <a href="#contact" className="inline-flex items-center gap-1 hover:underline">{t.contact} <ChevronRight className="h-3 w-3" /></a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// --- Tailwind helper classes expected in your app:
//   - Uses shadcn/ui component library and lucide-react icons
//   - Ensure your Tailwind config enables dark mode via class strategy
//   - In your root layout, include: <html className="dark"> to default dark
//   - This single-file component can be dropped into a Next.js / Vite React project
