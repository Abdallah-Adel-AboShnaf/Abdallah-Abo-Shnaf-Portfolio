
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "ALX Africa",
      period: "May 2025 - Present",
      location: "Remote",
      description: "Wrote Python code for data analysis and machine learning at ALX Africa. Worked with teammates on real projects to improve my skills. Connected with tech professionals across Africa to learn and grow.",
      technologies: ["Python", "Preparing Data", "SQL", "Data Analysis", "Data Visualization", "ML", "Regression", "NLP", "AWS Foundations"],
      achievements: [
        "Professional Foundations learn leadership and professional skills for workplace success",
        "Machine Learning understand algorithms to build predictive, data-driven models.",
        "AWS Cloud Practitioner gain basic AWS and cloud computing knowledge for a career start."
      ],
      category: "Internship"
    },
    {
      title: "Data Scientist",
      company: "Digital Egypt Pioneers Initiative - DEPI",
      period: "Oct 2024 - May 2025",
      location: "Cairo, Egypt",
      description: "The DEPI scholarship is a program from Egypt's Ministry of Communications that helps students and graduates get ready for tech jobs, especially in areas like Data Science.",
      technologies: ["Python", "Data Analysis", "SQL", "Data Visualization", "Machine Learning", "MLOps", "Web Scraping", "Deployment"],
      achievements: [
        "Python proficiency in Python programming.",
        "SQL ability to work with SQL databases.",
        "DataAnalysis skills in analyzing and interpreting data.",
        "MachineLearning expertise in building machine learning models."
      ],
      category: "Internship"
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A journey through my professional growth in data science and machine learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden sm:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-4 sm:space-x-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-bold text-slate-600">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Header */}
                      <div>
                        <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 leading-tight">{exp.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-blue-600 border-blue-200 text-xs sm:text-sm">
                              {exp.period}
                            </Badge>
                            <Badge variant="secondary" className={`text-xs sm:text-sm ${exp.category === "Work" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                              {exp.category}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-base sm:text-lg text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-sm sm:text-base text-slate-500">{exp.location}</p>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{exp.description}</p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-slate-700 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700 text-xs sm:text-sm px-2 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-slate-700 mb-3">Key Achievements</h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
