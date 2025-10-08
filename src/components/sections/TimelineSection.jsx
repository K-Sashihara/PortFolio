import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TIMELINE } from '../../data/timeline';

export default function TimelineSection() {
    return (
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
    );
}
