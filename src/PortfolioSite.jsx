import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Moon, Download, Globe, Github, Linkedin, ExternalLink, BookOpen, Code, GraduationCap, Calendar, ChevronRight } from "lucide-react";

// Import data and components
import { PROFILE } from "./data/profile";
import { useLanguage } from "./contexts/LanguageContext";
import { LanguageProvider } from "./contexts/LanguageContext";

// Import sections
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import PublicationsSection from "./components/sections/PublicationsSection";
import IdeasSection from "./components/sections/IdeasSection";
import SkillsSection from "./components/sections/SkillsSection";
import TimelineSection from "./components/sections/TimelineSection";
import ContactSection from "./components/sections/ContactSection";

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

function PortfolioContent() {
    const { theme, toggle } = useThemeToggle();
    const { lang, t, toggleLanguage } = useLanguage();

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
                            <Button variant="ghost" size="sm" onClick={toggleLanguage}
                                className="rounded-xl">
                                {lang === "ja" ? "EN" : "日本語"}
                            </Button>
                            <Button variant="ghost" size="icon" onClick={toggle} className="rounded-xl">
                                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </Button>
                            <Button size="sm" className="rounded-xl">
                                <Download className="h-4 w-4 mr-2" /> {t.download_cv}
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
                        <TabsTrigger value="ideas">{t.ideas}</TabsTrigger>
                        <TabsTrigger value="skills">{t.skills}</TabsTrigger>
                        <TabsTrigger value="timeline">{t.timeline}</TabsTrigger>
                        <TabsTrigger value="contact">{t.contact}</TabsTrigger>
                    </TabsList>

                    <TabsContent value="about" className="pt-6">
                        <AboutSection />
                    </TabsContent>

                    <TabsContent value="projects" className="pt-6">
                        <ProjectsSection />
                    </TabsContent>

                    <TabsContent value="publications" className="pt-6">
                        <PublicationsSection />
                    </TabsContent>

                    <TabsContent value="ideas" className="pt-6">
                        <IdeasSection />
                    </TabsContent>

                    <TabsContent value="skills" className="pt-6">
                        <SkillsSection />
                    </TabsContent>

                    <TabsContent value="timeline" className="pt-6">
                        <TimelineSection />
                    </TabsContent>

                    <TabsContent value="contact" className="pt-6">
                        <ContactSection />
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

export default function PortfolioSite() {
    return (
        <LanguageProvider>
            <PortfolioContent />
        </LanguageProvider>
    );
}

// --- Tailwind helper classes expected in your app:
//   - Uses shadcn/ui component library and lucide-react icons
//   - Ensure your Tailwind config enables dark mode via class strategy
//   - In your root layout, include: <html className="dark"> to default dark
//   - This single-file component can be dropped into a Next.js / Vite React project