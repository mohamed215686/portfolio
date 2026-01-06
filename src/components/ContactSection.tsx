import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently looking for internship opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <a
                href="mailto:afkirmohamad4@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">afkirmohamad4@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+212626643014"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+212 626 643 014</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Aït Melloul, Morocco</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/mohamed215686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohamed-afkir-974520330/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="gradient-border p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 animate-glow">
                <Send className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
              
              <p className="text-muted-foreground mb-8">
                I'm excited about opportunities in Data Science, Machine Learning, and AI. 
                Drop me a message and let's discuss how I can contribute to your team!
              </p>

              {/* Replace your CTA Card button with this improved version */}
              <Button variant="hero" size="xl" asChild className="w-full relative z-10">
                <a 
                  href="mailto:afkirmohamad4@gmail.com" 
                  onClick={(e) => {
                    // Optional: Log to check if it's clicking
                    console.log("Attempting to open mail client");
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
