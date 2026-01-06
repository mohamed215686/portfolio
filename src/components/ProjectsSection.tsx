import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AOSmovies',
    description: 'A movie discovery web application built with JavaScript. Browse and search for your favorite movies with an intuitive interface.',
    tech: ['JavaScript', 'HTML', 'CSS', 'API'],
    github: 'https://github.com/mohamed215686/AOSmovies',
    featured: true,
  },
  {
    title: 'DB Hotel',
    description: 'A comprehensive hotel management database system designed to streamline room bookings, guest records, and billing operations.',
    tech: ['SQL', 'Database Design', 'Backend', 'Data Management'],
    github: 'https://github.com/mohamed215686/dbhotel',
    featured: true,
  },
  {
    title: 'First ML Project',
    description: 'My first machine learning project exploring data analysis and predictive modeling using Python and Jupyter Notebooks.',
    tech: ['Python', 'Jupyter', 'ML', 'Data Analysis'],
    github: 'https://github.com/mohamed215686/first_ML_project',
    featured: true,
  },
  {
    title: 'Shop Website',
    description: 'An e-commerce website project demonstrating web development skills with modern JavaScript.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/mohamed215686/shope_website',
    featured: false,
  },
  {
    title: 'IoT Watch Project',
    description: 'An IoT project involving embedded systems and data collection, exploring the intersection of hardware and software.',
    tech: ['Jupyter', 'IoT', 'Python'],
    github: 'https://github.com/mohamed215686/test-project-iot-watch',
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="code-font text-xs text-primary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Other Projects</h3>
          <div className="space-y-4">
            {projects.filter(p => !p.featured).map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <Folder className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.tech.join(' • ')}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* View All on GitHub */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/mohamed215686" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
