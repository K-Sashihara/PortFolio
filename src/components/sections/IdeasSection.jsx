import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IDEAS } from '../../data/ideas';

export default function IdeasSection() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {IDEAS.map((idea, i) => (
                <motion.div key={idea.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                    <Card className="rounded-2xl h-full">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{idea.title}</CardTitle>
                                <div className="flex gap-2">
                                    <Badge variant="outline" className="rounded-xl text-xs">{idea.category}</Badge>
                                    <Badge 
                                        variant={idea.status === "In Development" ? "default" : idea.status === "Planning" ? "secondary" : "outline"} 
                                        className="rounded-xl text-xs"
                                    >
                                        {idea.status}
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-4">
                            <p>{idea.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {idea.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="rounded-xl text-xs">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
