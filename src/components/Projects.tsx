import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolioData";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative scan-line">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-primary">
            <span className="text-accent">&gt;</span> Featured <span className="text-secondary">Projects</span> <span className="text-accent">&lt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="border-primary/30 hover:border-primary transition-all hover:scale-105 overflow-hidden animate-fade-in cyber-border hover-glow group hex-overlay"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-muted overflow-hidden scan-line">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground hover-scale">
                    Featured
                  </Badge>
                )}
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary group-hover:text-glow-secondary transition-all">
                  <span className="text-accent">//</span> {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/50 hover-scale hover-glow">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10 hover-glow cyber-border"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10 hover-glow cyber-border"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
