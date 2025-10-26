import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { socialLinks } from "@/data/portfolioData";

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>by Naresh Rajj S</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-primary/30 rounded-lg hover:bg-primary/10 hover:border-primary transition-all hover:scale-110"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4 text-primary" />
                </a>
              );
            })}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
