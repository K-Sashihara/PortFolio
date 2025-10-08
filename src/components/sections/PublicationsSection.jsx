import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";
import { PUBLICATIONS } from '../../data/publications';

export default function PublicationsSection() {
    return (
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
    );
}
