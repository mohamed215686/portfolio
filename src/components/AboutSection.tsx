import { User, MapPin, Mail, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background and what drives me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* About Text */}
          <div className="space-y-6">
            <div className="gradient-border p-6 rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                I am a student in the{' '}
                <span className="text-foreground font-medium">SDBDIA program</span>{' '}
                (Data Science, Big Data and Artificial Intelligence) at ENSA Agadir.
                I am currently looking for an observation internship in the field of
                data analysis and artificial intelligence.
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              This internship would allow me to put into practice the skills acquired
              during my academic training and discover the concrete workings of the
              professional world in these fields. I am passionate about using technology
              to solve complex problems and create meaningful impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">Mohamed Afkir</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">Agadir, Morocco</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-xs">afkirmohamad4@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">+212 626 643 014</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="gradient-border p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted-foreground text-sm">Years of Study</div>
            </div>
            <div className="gradient-border p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">6+</div>
              <div className="text-muted-foreground text-sm">Projects</div>
            </div>
            <div className="gradient-border p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground text-sm">Technologies</div>
            </div>
            <div className="gradient-border p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-muted-foreground text-sm">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
