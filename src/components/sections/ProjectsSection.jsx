import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from '../../data/projects';

export default function ProjectsSection() {
    return (
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
    );
}
