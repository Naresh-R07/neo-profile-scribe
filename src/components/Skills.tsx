import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/portfolioData";

export const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-primary">
            Technical <span className="text-secondary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="border-primary/30 hover:border-primary transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out glow-primary"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{skill.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
