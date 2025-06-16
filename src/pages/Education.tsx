
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Cairo University",
      period: "2017 - 2019",
      location: "Cairo, Egypt",
      gpa: "3.8/4.0",
      description: "Specialized in machine learning, statistical modeling, and big data analytics. Completed thesis on 'Deep Learning Applications in Natural Language Processing'.",
      coursework: [
        "Advanced Machine Learning",
        "Statistical Learning Theory",
        "Deep Learning",
        "Natural Language Processing",
        "Big Data Analytics",
        "Data Mining",
        "Bayesian Statistics",
        "Computer Vision"
      ],
      projects: [
        "Sentiment Analysis of Arabic Social Media Posts",
        "Predictive Modeling for Stock Market Analysis",
        "Image Classification using Convolutional Neural Networks"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "American University in Cairo",
      period: "2013 - 2017",
      location: "Cairo, Egypt",
      gpa: "3.6/4.0",
      description: "Strong foundation in computer science with focus on algorithms, data structures, and software engineering principles.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Programming Languages",
        "Discrete Mathematics",
        "Statistics"
      ],
      projects: [
        "Library Management System (Java)",
        "E-commerce Web Application (PHP/MySQL)",
        "Mobile App for Campus Navigation (Android)"
      ]
    }
  ];

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in data science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-600">🎓</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                          <div>
                            <h3 className="text-2xl font-semibold text-slate-800 mb-1">{edu.degree}</h3>
                            <p className="text-lg text-blue-600 font-medium">{edu.institution}</p>
                            <p className="text-slate-500">{edu.location}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="text-blue-600 border-blue-200 mb-1">
                              {edu.period}
                            </Badge>
                            <p className="text-sm text-slate-600">GPA: {edu.gpa}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed">{edu.description}</p>

                      {/* Coursework and Projects Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Relevant Coursework */}
                        <div>
                          <h4 className="font-medium text-slate-700 mb-3">Relevant Coursework</h4>
                          <div className="space-y-2">
                            {edu.coursework.map((course, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="text-sm text-slate-600">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Projects */}
                        <div>
                          <h4 className="font-medium text-slate-700 mb-3">Key Projects</h4>
                          <div className="space-y-2">
                            {edu.projects.map((project, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <div className="w-2 h-2 rounded-full bg-teal-500 mt-1.5"></div>
                                <span className="text-sm text-slate-600">{project}</span>
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
