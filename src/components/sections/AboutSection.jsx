import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { PROFILE } from '../../data/profile';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AboutSection() {
    const { t } = useLanguage();

    return (
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
    );
}
