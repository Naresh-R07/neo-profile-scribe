import { MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, certifications } from "@/data/portfolioData";

export const About = () => {
  return (
    <section id="about" className="py-20 relative scan-line hex-overlay">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-primary">
            <span className="text-primary">&gt;</span> About <span className="text-secondary">Me</span> <span className="text-primary">&lt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="relative w-64 h-64 mx-auto lg:w-full lg:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg rotate-6 group-hover:rotate-3 transition-transform"></div>
              <div className="relative h-full bg-card rounded-lg overflow-hidden border border-primary/30 scan-line cyber-border hover-lift">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-muted-foreground leading-relaxed">{personalInfo.bio}</p>

            <div className="grid gap-4">
              <Card className="border-primary/30 hover:border-primary transition-colors cyber-border hover-glow hover-lift">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><span className="text-primary text-xs">//</span> {personalInfo.location}</span>
                </CardContent>
              </Card>

              <Card className="border-primary/30 hover:border-primary transition-colors cyber-border hover-glow hover-lift">
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    <span className="text-primary text-xs">//</span> {personalInfo.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-primary/30 hover:border-primary transition-colors cyber-border hover-glow hover-lift">
                <CardContent className="p-4 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    <span className="text-primary text-xs">//</span> {personalInfo.phone}
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4 text-primary">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
