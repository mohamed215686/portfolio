import { Code, Database, Brain, BarChart, FileCode, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    items: ['Python', 'C', 'Java', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Data Processing',
    icon: Database,
    items: ['Pandas', 'NumPy', 'Data Cleaning', 'Data Visualization'],
  },
  {
    category: 'Machine Learning',
    icon: Brain,
    items: ['Scikit-learn', 'TensorFlow Basics', 'Model Training', 'Data Analysis'],
  },
  {
    category: 'Math & Statistics',
    icon: BarChart,
    items: ['Statistics', 'Probability', 'Linear Algebra', 'Calculus'],
  },
  {
    category: 'Web Development',
    icon: FileCode,
    items: ['HTML', 'CSS', 'JavaScript', 'React Basics'],
  },
  {
    category: 'Tools & Software',
    icon: Wrench,
    items: ['Git/GitHub', 'Jupyter Notebooks', 'VS Code', 'Microsoft Office'],
  },
];

const languages = [
  { name: 'Arabic', level: 'Native', percent: 100 },
  { name: 'French', level: 'Good', percent: 75 },
  { name: 'English', level: 'Good', percent: 75 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Languages</h3>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
