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
    <section id="achievements" className="py-20 relative scan-line hex-overlay">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-primary">
            <span className="text-primary">&gt;</span> Notable <span className="text-secondary">Achievements</span> <span className="text-primary">&lt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <Card
                key={achievement.id}
                className="border-primary/30 hover:border-primary transition-all hover:scale-105 animate-fade-in cyber-border hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg hover-scale group-hover:bg-primary/20 transition-all border border-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg group-hover:text-primary group-hover:text-glow-primary transition-all">
                          <span className="text-accent">//</span> {achievement.title}
                        </h3>
                        <Badge variant="outline" className="border-accent text-accent hover-scale">
                          {achievement.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.description}
                      </p>
                      <Badge className="bg-secondary/20 text-secondary hover-scale">
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
