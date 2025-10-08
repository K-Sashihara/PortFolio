import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin } from "lucide-react";
import { PROFILE } from '../../data/profile';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ContactSection() {
    const { t } = useLanguage();

    return (
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
    );
}
