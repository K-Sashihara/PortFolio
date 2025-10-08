import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROFILE } from '../../data/profile';

export default function SkillsSection() {
    return (
        <Card className="rounded-2xl">
            <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                    {PROFILE.skills.map((s) => (
                        <Badge key={s} variant="secondary" className="rounded-xl">{s}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
