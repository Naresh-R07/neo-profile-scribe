import { Award, Trophy, Shield, Mic, Code, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { achievements } from "@/data/portfolioData";

const iconMap: Record<string, any> = {
  Award,
  Trophy,
  Shield,
  Mic,
  Code,
  Search,
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-primary">
            Notable <span className="text-secondary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <Card
                key={achievement.id}
                className="border-primary/30 hover:border-primary transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg">{achievement.title}</h3>
                        <Badge variant="outline" className="border-accent text-accent">
                          {achievement.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.description}
                      </p>
                      <Badge className="bg-secondary/20 text-secondary">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
