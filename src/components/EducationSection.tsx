import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Engineering Classes- SDBDIA',
    institution: 'ENSA Agadir',
    location: 'Agadir, Morocco',
    period: '2024 - Present',
    description: 'Data Science, Big Data and Artificial Intelligence program. Focused on advanced algorithms, machine learning, and data engineering.',
    current: true,
  },
  {
    degree: 'Preparatory Classes',
    institution: 'ENSA Agadir',
    location: 'Agadir, Morocco',
    period: '2022 - 2024',
    description: 'Two-year intensive preparatory program covering mathematics, physics, and computer science fundamentals.',
    current: false,
  },
  {
    degree: 'Baccalaureate in Physical Sciences',
    institution: 'Lycée Almajd',
    location: 'Azrou, Morocco',
    period: '2022',
    description: 'High school diploma with focus on physics and mathematics.',
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic path and the foundation of my technical knowledge
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex relative">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    edu.current
                      ? 'bg-gradient-to-br from-primary to-accent'
                      : 'bg-secondary border border-border'
                  }`}>
                    <GraduationCap className={`w-6 h-6 ${edu.current ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                  edu.current
                    ? 'gradient-border bg-card'
                    : 'bg-card border border-border hover:border-primary/30'
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    {edu.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
