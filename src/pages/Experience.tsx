
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "Cairo, Egypt",
      description: "Leading machine learning initiatives and building predictive models for enterprise clients. Developed recommendation systems that increased user engagement by 40%.",
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes"],
      achievements: [
        "Built and deployed 15+ ML models in production",
        "Led a team of 5 data scientists",
        "Reduced model inference time by 60% through optimization"
      ]
    },
    {
      title: "Data Scientist",
      company: "DataInsights Inc.",
      period: "2020 - 2022",
      location: "Cairo, Egypt",
      description: "Developed end-to-end data science solutions for various industries including finance, healthcare, and retail. Specialized in NLP and computer vision projects.",
      technologies: ["Python", "Scikit-learn", "Pandas", "SQL", "Tableau", "Apache Spark"],
      achievements: [
        "Implemented fraud detection system saving $2M annually",
        "Created automated reporting dashboards for 20+ clients",
        "Published 3 research papers in ML conferences"
      ]
    },
    {
      title: "Junior Data Analyst",
      company: "Analytics Pro",
      period: "2019 - 2020",
      location: "Cairo, Egypt",
      description: "Started my data science journey by performing statistical analysis and creating data visualizations. Worked closely with business stakeholders to understand requirements.",
      technologies: ["Python", "R", "SQL", "Excel", "Power BI", "SPSS"],
      achievements: [
        "Automated monthly reporting processes",
        "Conducted A/B tests for marketing campaigns",
        "Improved data quality by implementing validation rules"
      ]
    }
  ];

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A journey through my professional growth in data science and machine learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-600">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-2xl font-semibold text-slate-800">{exp.title}</h3>
                          <Badge variant="outline" className="w-fit text-blue-600 border-blue-200">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-slate-500">{exp.location}</p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed">{exp.description}</p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-slate-700 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium text-slate-700 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mt-2 flex-shrink-0"></div>
                              <span className="text-slate-600">{achievement}</span>
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

        {/* Summary Stats */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 border-slate-200">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">Career Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">50+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                <div className="text-sm text-slate-600">ML Models in Prod</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-sm text-slate-600">Research Papers</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
