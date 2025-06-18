
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of CS and Information",
      institution: "Helwan National University",
      period: "2023 - 2027",
      location: "Cairo, Egypt",
      gpa: "2.9/4.0",
      description: "Comprehensive program covering statistical analysis, machine learning, data visualization, and big data technologies. Strong foundation in mathematics, programming, and research methodologies.",
      coursework: [
        "Python",
        "Hadoop and Apache Spark essentials",
        "Neural Networks and Deep Learning",
        "Data wrangling",
        "Big Data",
        "Data Structure and Algorithms",
        "C Programming",
        "Java Programming",
        "Database",
        "SQL Server",
        "Statistics",
        "Machine Learning",
      ],
      projects: [
        "Sales Forecasting and Optimization",
        "Tic-Tac-Toe AI",
      ]
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Academic foundation and continuous learning journey in data science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden sm:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start space-x-4 sm:space-x-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-bold text-slate-600">🎓</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Header */}
                      <div>
                        <div className="space-y-2 sm:space-y-0 sm:flex sm:items-start sm:justify-between mb-2">
                          <div className="space-y-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 leading-tight">{edu.degree}</h3>
                            <p className="text-base sm:text-lg text-blue-600 font-medium">{edu.institution}</p>
                            <p className="text-sm sm:text-base text-slate-500">{edu.location}</p>
                          </div>
                          <div className="flex flex-col sm:text-right space-y-1">
                            <Badge variant="outline" className="text-blue-600 border-blue-200 w-fit">
                              {edu.period}
                            </Badge>
                            <p className="text-xs sm:text-sm text-slate-600">GPA: {edu.gpa}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{edu.description}</p>

                      {/* Coursework and Projects Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {/* Relevant Coursework */}
                        <div>
                          <h4 className="text-sm sm:text-base font-medium text-slate-700 mb-3">Relevant Coursework</h4>
                          <div className="space-y-1.5 sm:space-y-2">
                            {edu.coursework.map((course, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                <span className="text-xs sm:text-sm text-slate-600">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Projects */}
                        <div>
                          <h4 className="text-sm sm:text-base font-medium text-slate-700 mb-3">Key Projects</h4>
                          <div className="space-y-1.5 sm:space-y-2">
                            {edu.projects.map((project, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                                <span className="text-xs sm:text-sm text-slate-600">{project}</span>
                              </div>
                            ))}
                          </div>
                        </div>
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

export default Education;
