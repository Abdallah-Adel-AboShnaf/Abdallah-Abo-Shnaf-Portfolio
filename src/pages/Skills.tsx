
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "bg-blue-500" },
        { name: "C & C++", level: 80, color: "bg-blue-500" },
        { name: "SQL", level: 90, color: "bg-blue-500" },
        { name: "Java", level: 70, color: "bg-blue-500" },
        { name: "HTML", level: 70, color: "bg-blue-500" }
      ]
    },
    {
      category: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "Scikit-learn", level: 90, color: "bg-blue-500" },
        { name: "TensorFlow", level: 90, color: "bg-blue-500" },
        { name: "PyTorch", level: 80, color: "bg-blue-500" },
        { name: "Keras", level: 60, color: "bg-blue-500" },
        { name: "XGBoost", level: 85, color: "bg-blue-500" }
      ]
    },
    {
      category: "Data Science Tools",
      icon: Database,
      skills: [
        { name: "Pandas", level: 95, color: "bg-blue-500" },
        { name: "NumPy", level: 95, color: "bg-blue-500" },
        { name: "Matplotlib", level: 90, color: "bg-blue-500" },
        { name: "Seaborn", level: 85, color: "bg-blue-500" },
        { name: "Plotly", level: 80, color: "bg-blue-500" }
      ]
    },
    {
      category: "Cloud & Big Data",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 30, color: "bg-blue-500" }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving", "Critical Thinking", "Communication", "Team Leadership",
    "Project Management", "Statistical Analysis", "Data Storytelling", "Research",
    "Agile Methodology", "Technical Writing"
  ];

  const tools = [
    "Jupyter Notebook", "Git", "GitHub","VS Code", "PyCharm", "MLOps", "MLflow", "SQL Server"
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Technical expertise and professional competencies in data science and machine learning
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className="p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 border-b border-slate-200 pb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm sm:text-base font-medium text-slate-700">{skill.name}</span>
                          <span className="text-xs sm:text-sm text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <Card className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-teal-50 border-slate-200">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">Soft Skills</h2>
              <p className="text-sm sm:text-base text-slate-600">Professional and interpersonal competencies</p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Tools & Technologies */}
        <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-slate-200">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">Tools & Technologies</h2>
              <p className="text-sm sm:text-base text-slate-600">Development and productivity tools I work with</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
