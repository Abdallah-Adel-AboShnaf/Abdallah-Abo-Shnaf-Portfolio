
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95, color: "bg-blue-500" },
        { name: "R", level: 85, color: "bg-teal-500" },
        { name: "SQL", level: 90, color: "bg-purple-500" },
        { name: "Java", level: 75, color: "bg-green-500" },
        { name: "JavaScript", level: 70, color: "bg-yellow-500" }
      ]
    },
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: 95, color: "bg-blue-500" },
        { name: "TensorFlow", level: 90, color: "bg-orange-500" },
        { name: "PyTorch", level: 85, color: "bg-red-500" },
        { name: "Keras", level: 88, color: "bg-pink-500" },
        { name: "XGBoost", level: 92, color: "bg-green-500" }
      ]
    },
    {
      category: "Data Science Tools",
      skills: [
        { name: "Pandas", level: 95, color: "bg-blue-500" },
        { name: "NumPy", level: 93, color: "bg-teal-500" },
        { name: "Matplotlib", level: 88, color: "bg-purple-500" },
        { name: "Seaborn", level: 85, color: "bg-indigo-500" },
        { name: "Plotly", level: 80, color: "bg-green-500" }
      ]
    },
    {
      category: "Cloud & Big Data",
      skills: [
        { name: "AWS", level: 85, color: "bg-orange-500" },
        { name: "Google Cloud", level: 80, color: "bg-blue-500" },
        { name: "Apache Spark", level: 75, color: "bg-red-500" },
        { name: "Docker", level: 85, color: "bg-cyan-500" },
        { name: "Kubernetes", level: 70, color: "bg-indigo-500" }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving", "Critical Thinking", "Communication", "Team Leadership",
    "Project Management", "Statistical Analysis", "Data Storytelling", "Research",
    "Business Acumen", "Mentoring", "Agile Methodology", "Technical Writing"
  ];

  const tools = [
    "Jupyter Notebook", "Git", "GitHub", "Tableau", "Power BI", "JIRA",
    "Confluence", "VS Code", "PyCharm", "RStudio", "Databricks", "MLflow"
  ];

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Technical expertise and professional competencies in data science and machine learning
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-8 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-800 border-b border-slate-200 pb-3">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
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
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 border-slate-200">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">Soft Skills</h2>
              <p className="text-slate-600">Professional and interpersonal competencies</p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Tools & Technologies */}
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">Tools & Technologies</h2>
              <p className="text-slate-600">Development and productivity tools I work with</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"></div>
                  <span className="text-sm font-medium text-slate-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Skill Summary */}
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">Expertise Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm text-slate-600">Programming Languages</div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
                <div className="text-sm text-slate-600">ML Frameworks</div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-slate-600">Tools & Platforms</div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-sm text-slate-600">Cloud Platforms</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
